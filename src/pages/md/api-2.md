## Presets

There are also a couple of generic presets that will cover some common ground.

```jsx
import { ..., config } from 'react-spring'

useSpring({ ..., config: config.default })
```

| Property                  | Value |
| ------------------------- | ------- |
| config.default             | { mass: 1, tension: 170, friction: 26 } |
| config.gentle              | { mass: 1, tension: 120, friction: 14 } |
| config.wobbly              | { mass: 1, tension: 180, friction: 12 } |
| config.stiff               | { mass: 1, tension: 210, friction: 20 } |
| config.slow                | { mass: 1, tension: 280, friction: 60 } |
| config.molasses            | { mass: 1, tension: 280, friction: 120 } |

## Properties

```jsx
useSpring({ from: { ... }, to: { ... }, delay: 100, onRest: () => ... })
```

All primitives inherit the following properties (though some of them may bring their own additionally):

| Property | Type | Description |
| -------- | ---- | -------- |
| from     | obj | Base values, optional |
| to       | obj/fn/array(obj) | Animates to ... |
| delay     | number/fn | Delay in ms before the animation starts. Also valid as a function for individual keys: key => delay |
| immediate     | bool/fn | Prevents animation if true. Also valid as a function for individual keys: key => immediate |
| config     | obj/fn | Spring config (contains mass, tension, friction, etc). Also valid as a function for individual keys: key => config |
| reset     | bool | The spring starts to animate from scratch (from -> to) if set true |
| reverse     | bool | "from" and "to" are switched if set true, this will only make sense in combination with the "reset" flag |
| onStart     | fn | Callback when the animation starts to animate |
| onRest     | fn | Callback when the animation comes to a still-stand |
| onFrame     | fn | Frame by frame callback, first argument passed is the animated value |

## Interpolations

`value.interpolate` either takes an object of the following shape:

| Value            | default  | Description |
| ---------------- | -------- | ----------- |
| extrapolateLeft  | extend   | Left extrapolate. Can be: identity/clamp/extend
| extrapolateRight | extend   | Right extrapolate. Can be: identity/clamp/extend
| extrapolate      | extend   | Shortcut to set left and right-extrapolate
| range            | [0,1]    | Array of input ranges
| output           | undefined | Array of mapped output ranges
| map              | undefined | Value filter applied to input value

A range shortcut: `value.interpolate([...inputRange], [...outputRange])`

Or a function: `value.interpolate(v => ...)`