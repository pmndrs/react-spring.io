```jsx
// Will fade children in and out in a loop
const Script = Keyframes.Spring(async next =>
  while (true)
    await next({ opacity: 1, from: { opacity: 0 }, reset: true })
)
```
