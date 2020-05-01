export function format(code) {
  code = code.trim()
  code = code.replace(/\/\/\s*(prettier-ignore)\s*(\n\s*|$)/g, '')
  return code
}
