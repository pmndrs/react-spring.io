```jsx
// The spring will start right away: 0.0 * 1000ms = 0ms
// The transition will start after: 0.5 * 1000ms (the timeFrame default) = 500ms
useChain([springRef, transitionRef], [0, 0.5], /*1000*/)
```