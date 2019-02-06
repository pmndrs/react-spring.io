```jsx
useTransition(items, items => items.id, {
  enter: item => [
    { opacity: item.opacity, height: item.height },
    { life: '100%' },
  ],
  leave: item => async (next, cancel) => {
    await next({ life: '0%' })
    await next({ opacity: 0 })
    await next({ height: 0 })
  },
  from: { life: '0%', opacity: 0, height: 0 },
})
```