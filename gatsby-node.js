const componentWithMDXScope = require('gatsby-plugin-mdx/component-with-mdx-scope')

const path = require('path')

const startCase = require('lodash.startcase')

const config = require('./config')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allMdx {
              edges {
                node {
                  fields {
                    id
                    slug
                  }
                  tableOfContents
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        // Create blog posts pages.
        result.data.allMdx.edges.forEach(({ node }) => {
          createPage({
            path: node.fields.slug,
            component: path.resolve('./src/templates/docs.js'),
            context: {
              id: node.fields.id,
            },
          })
        })
      })
    )
  })
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    devtool: false,
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      alias: {
        buble: path.resolve(__dirname, 'node_modules/buble'),
        react: path.resolve(__dirname, 'node_modules/react'),
        'react-dom': path.resolve(__dirname, 'node_modules/react-dom'),
        $components: path.resolve(__dirname, 'src/components'),
      },
    },
  })
}

exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: '@babel/plugin-proposal-export-default-from',
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const parent = getNode(node.parent)

    let slug = `/` + parent.relativePath.replace(parent.ext, '')
    if (slug.endsWith(`/index`)) {
      slug = slug.slice(0, -6)
    }
    if (config.gatsby && config.gatsby.trailingSlash) {
      slug += `/`
    }

    createNodeField({
      name: 'slug',
      node,
      value: slug || `/`,
    })

    createNodeField({
      name: 'id',
      node,
      value: node.id,
    })

    createNodeField({
      name: 'title',
      node,
      value: node.frontmatter.title || startCase(parent.name),
    })
  }
}
