import nebu from 'nebu'

const hookIds = ['useSpring']

function isHookCall(expr) {
  return expr.type == 'CallExpression' && hookIds.indexOf(expr.callee.name) >= 0
}

function isHookStatement(stmt) {
  switch (stmt.type) {
    case 'ExpressionStatement':
      return isHookCall(stmt.expression)
    case 'VariableDeclaration':
      return isHookCall(stmt.declarations[0].init)
  }
  return false
}

function getVariableNames(expr) {
  switch (expr.type) {
    case 'Identifier':
      return [expr.name]
    case 'ObjectPattern':
      // TODO: support rest operator
      return expr.properties.map(prop => prop.value.name)
    case 'ArrayPattern':
      return expr.elements.map(elem => elem.name)
  }
}

// TODO: support more than "useSpring"
export function transform(input) {
  const plugins = getPlugins()
  try {
    const output = nebu.process(input, { plugins })
    // console.log('%O\n\n--------\n\n%O', input, output)
    return `__r(props => {\n${output}\n})`
  } catch (e) {
    console.warn('Transform failed: ' + e.stack)
    return '__r(() => false)'
  }
}

function getPlugins() {
  return [
    {
      Program(node) {
        const stmts = node.body.filter(isHookStatement)
        if (stmts.length) {
          const calls = []

          let nextId = 1
          stmts.forEach(stmt => {
            switch (stmt.type) {
              case 'ExpressionStatement':
                const id = 'style' + nextId++
                stmt.before(`const ${id} = `)
                calls.push({
                  stmt,
                  type: 'Identifier',
                  callee: stmt.expression.callee.name,
                  args: stmt.expression.arguments,
                  out: [id],
                })
                break
              case 'VariableDeclaration':
                const decl = stmt.declarations[0]
                calls.push({
                  stmt,
                  type: decl.id.type,
                  callee: decl.init.callee.name,
                  args: decl.init.arguments,
                  out: getVariableNames(decl.id),
                })
                break
            }
          })

          let style = ''
          calls.forEach(({ stmt, type, callee, args, out }, i) => {
            if (i > 0) {
              style += ', '
            }
            if (callee == 'useSpring') {
              const isFn = args[0].type == 'ArrowFunctionExpression'

              // Merge all animated styles and apply them to the example div.
              style += type == 'ObjectPattern' ? out.join(', ') : '...' + out[0]

              // TODO: replace this with <SpringContext>
              switch (args[0].type) {
                case 'ObjectExpression':
                  args[0].unshift('properties', '...props,\n')
                  break
                case 'ArrowFunctionExpression':
                  const update = out[1]
                  stmt.after(`\nuseEffect(() => {\n  ${update}(props)\n})`)
                  break
              }
            }
          })

          node.push('body', `\nreturn { ${style} }`)
        }
      },
    },
  ]
}
