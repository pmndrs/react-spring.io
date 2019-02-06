const transitions = useTransition(items, item => item.id, {
  from: { opacity: 0 },
  enter: { opacity: 1 },
  leave: { opacity: 0 },
})
return transitions.map(({ item, key, props }) => (
  <animated.div key={key} style={props}>
    {item}
  </animated.div>
))