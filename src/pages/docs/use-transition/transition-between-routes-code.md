```jsx
const { location } = useRouter()
const transitions = useTransition(location, location => location.pathname, { ... })
return transitions.map(({ item, props, key }) => (
  <animated.div key={key} style={props}>
    <Switch location={item}>
      <Route path="/a" component={A} />
      <Route path="/b" component={B} />
      <Route path="/c" component={C} />
    </Switch>
  </animated.div>
))
```