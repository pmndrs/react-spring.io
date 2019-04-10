## Properties

All properties of the [shared-api](/docs/hooks/api) apply.

| Property    | Type              | Description                                                                         |
| ----------- | ----------------- | ----------------------------------------------------------------------------------- |
| initial     | obj/fn            | Initial (first time) base values, optional (can be null)                            |
| from        | obj/fn            | Base values, optional                                                               |
| enter       | obj/fn/array(obj) | Styles apply for entering elements                                                  |
| update      | obj/fn/array(obj) | Styles apply for updating elements (you can update the hook itself with new values) |
| leave       | obj/fn/array(obj) | Styles apply for leaving elements                                                   |
| trail       | number            | Delay in ms before the animation starts, adds up for each enter/update and leave    |
| unique      | bool/fn           | If this is true, items going in and out with the same key will be re-used           |
| reset       | bool/fn           | Used in combination with "unique" and makes entering items start from scratch       |
| onDestroyed | fn                | Called when objects have disappeared for good                                       |

## Additional notes

### Multi-stage transitions

The initial/from/enter/update/leave lifecycles can be objects, arrays or functions. When you provide a function you have access to individual items. The function is allowed to return plain objects, or either an array or a function for multi-stage transitions. When you provide a plain array you also can form a basic multi-stage transition (without access to the item).

```jsx
useTransition(items, items => items.id, {
  enter: item => [{opacity: item.opacity, height: item.height}, {life: '100%'}],
  leave: item => async (next, cancel) => {
    await next({life: '0%'})
    await next({opacity: 0})
    await next({height: 0})
  },
  from: {life: '0%', opacity: 0, height: 0}
})
```

### Transitioning [between routes](https://twitter.com/0xca0a/status/1092772431087964161)

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

## Demos
