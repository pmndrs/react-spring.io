import 'typeface-inter'

const baseTheme = {
  fonts: {
    mono: "Menlo, 'SF Mono', 'Roboto Mono', monospace",
    body:
      "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
  },
}

export default baseTheme

export const lightTheme = {
  ...baseTheme,
  colors: {
    background: '#fff',
    heading: '#000',
    text: 'hsl(216, 30%, 28%)',
    preFormattedText: 'hsl(216, 35%, 98%)',
  },
}

export const darkTheme = {
  ...baseTheme,
  colors: {
    background: '#001933',
    heading: '#fff',
    text: '#fff',
    preFormattedText: '#000',
    link: '#1ED3C6',
  },
}
