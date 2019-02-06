```jsx
// Build a spring and catch its ref
const springRef = useRef()
const props = useSpring({ ...values, ref: springRef })
// Build a transition and catch its ref
const transitionRef = useRef()
const transitions = useTransition({ ...values, ref: transitionRef })
// First run the spring, when it concludes run the transition
useChain([springRef, transitionRef])
// Use the animated props like always
return (
  <animated.div style={props}>
    {transitions.map(({ item, key, props }) =>
      <animated.div key={key} style={props} />)}
  </animated.div>
)
```