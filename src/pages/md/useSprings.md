# useSprings

```js
import { useSprings, animated } from 'react-spring'
```

Creates multiple springs, each with its own config. Use it for static lists, etc.

### Either: overwrite values to change the animation

If you re-render the component with changed props, the animation will update.

```jsx
const springs = useSprings(number, items.map(item => ({ opacity: item.opacity }))
```

### Or: pass a function that returns values, and update using "set"

You will get an updater function back. It will not cause the component to render like an overwrite would (still the animation executes of course). Handling updates like this is useful for fast-occurring updates, but you should generally prefer it. Optionally there's also a stop function as a third argument.

```jsx
const [springs, set, stop] = useSprings(number, index => ({ opacity: 1 }))

// Update springs with new props
set(index => ({ opacity: 0 }))
// Stop all springs
stop()
```

### Finally: distribute animated props among the view

The return value is an array containing animated props.

```jsx
return springs.map(props => <animated.div style={props} />)
```

## Properties

All properties of the [shared-api](/api) apply.

## Demos