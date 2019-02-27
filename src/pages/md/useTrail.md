# useTrail

```js
import { useTrail, animated } from 'react-spring'
```

Creates multiple springs with a single config, each spring will follow the previous one. Use it for staggered animations.

### Either: overwrite values to change the animation

If you re-render the component with changed props, the animation will update.

```jsx
const trail = useTrail(number, { opacity: 1 })
```

### Or: pass a function that returns values, and update using "set"

You will get a `set` function back. It will not cause the component to render like an overwrite would (still the animation executes of course). Handling updates like this is useful for fast-occurring updates, but you should generally prefer it. Optionally there's also a stop function as a third argument.

```jsx
const [trail, set, stop] = useTrail(number, () => ({ opacity: 1 }))

// Update trail
set({ opacity: 0 })
// Stop trail
stop()
```

### Finally: distribute animated props among the view

The return value is an array containing animated props.

```jsx
return trail.map(props => <animated.div style={props} />)
```

## Properties

All properties of the [shared-api](/docs/hooks/api) apply.

## Demos
