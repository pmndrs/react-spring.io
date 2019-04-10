```jsx
// You can create keyframes for springs and trails
const Container = Keyframes.Spring({
  // Single props
  show: {opacity: 1},
  // Chained animations (arrays)
  showAndHide: [{opacity: 1}, {opacity: 0}],
  // Functions with side-effects with access to component props
  wiggle: async (next, cancel, ownProps) => {
    await next({x: 100, config: config.wobbly})
    await delay(1000)
    await next({x: 0, config: config.gentle})
  }
})
```
