```jsx
const props = useSpring({ 
  to: [{ opacity: 1, color: '#ffaaee' }, { opacity: 0, color: 'rgb(14,26,19)' }],
  from: { opacity: 0, color: 'red' } 
})
// ...
return <animated.div style={props}>I will fade in and out</animated.div>
```