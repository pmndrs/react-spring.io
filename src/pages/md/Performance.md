# Better performance ⚡️

```jsx
import {animated, interpolate} from 'react-spring/renderprops'
```

One of the strengths of react-spring is that it can _apply animations without relying on React_ to render updates frame by frame like most React animation libraries do. The difference may not be apparent in simple situations, but try a nested chart or routes and the difference will be quite drastic.

By default we will render every frame (like in the image on the left) as it gives you more freedom (for instance this is the only way that you can animate React-component props). In situations where that becomes expensive use the `native` flag. The flag is available for all primitives (Spring, Transition & Trail, Keyframes, Parallax is native by design). _Try doing this in all situations where you can_, the benefits are worth it. Especially if your animated component consists of large subtrees, routes, etc.

Just be aware of the following conditions:

1.  `native` only animates styles, attributes and children (as textContent)
2.  The values you receive _are opaque objects, not regular values_
3.  Receiving elements must be `animated.[elementName]`, for instance `div` becomes `animated.div`
4.  If you use styled-components or custom components do: `animated(component)`
5.  If you need to interpolate styles use `interpolate`

You can natively animate _styles_,

```jsx
<Spring native from={{opacity: 0}} to={{opacity: 1}}>
  {props => <animated.div style={props}>hello</animated.div>}
</Spring>
```

_attributes_,

```jsx
<Spring native from={{x: 100}} to={{x: 0}}>
  {props => (
    <animated.svg strokeDashoffset={props.x}>
      <path d="..." />
    </animated.svg>
  )}
</Spring>
```

_innerText_,

```jsx
<Spring native from={{number: 0}} to={{number: 1}}>
  {props => <animated.div>{props.number}</animated.div>}
</Spring>
```

_scrollTop/Left_.

```jsx
<Spring native from={{scroll: 0}} to={{scroll: 250}}>
  {props => <animated.div scrollTop={props.scroll} />}
</Spring>
```

It works for all the other primitives as well of course (<code>Trail</code> and <code>Transition</code>).

## Interpolation

In cases where you need to clamp or extrapolate, each animated value can `interpolate`, which is a powerful tool to have. The interpolate function either takes a function or a an object which forms a range. Interpolations can also form chains which allows you to route one calculation into another or reuse them.

```jsx
<Spring
  native
  from={{ o: 0, xyz: [0, 0, 0], color: 'red' }}
  to={{ o: 1, xyz: [10, 20, 5], color: 'green' }}>
  {({ o, xyz, color }) => (
    <animated.div
      style={{
        // If you can, use plain animated values like always, ...
        // You would do that in all cases where values "just fit"
        color,
        // Unless you need to interpolate them
        background: o.interpolate(o => `rgba(210, 57, 77, ${o})`),
        // Which works with arrays as well
        transform: xyz.interpolate((x, y, z) => `translate3d(${x}px, ${y}px, ${z}px)`),
        // If you want to combine multiple values use the "interpolate" helper
        border: interpolate([o, color], (o, c) => `${o * 10}px solid ${c}`)
        // You can also form ranges, even chain multiple interpolations
        padding:
          o.interpolate({ range: [0, 0.5, 1], output: [0, 0, 10] })
           .interpolate(o => `${o}%`),
        // There's also a shortcut for plain, optionless ranges ...
        opacity: o.interpolate([0.1, 0.2, 0.6, 1], [1, 0.1, 0.5, 1]),
      }}>
      {
        // Finally, this is how you interpolate innerText
        r.interpolate(n => n.toFixed(2))
      }
    </animated.div>
  )}
</Spring>
```

## Emulating css-keyframes

Interplations are also a good way in order to emulate css-keyframes since you can form a range that interpolates a number of stops, mapping it to a specific output.

```jsx
/*
0 % { transform: scale(1); }
25 % { transform: scale(.97); }
35 % { transform: scale(.9); }
45 % { transform: scale(1.1); }
55 % { transform: scale(.9); }
65 % { transform: scale(1.1); }
75 % { transform: scale(1.03); }
100 % { transform: scale(1); }
`*/

<Spring native to={{x: state ? 1 : 0}}>
  {props => (
    <animated.div
      style={{
        transform: props.x
          .interpolate({
            range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
            output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
          })
          .interpolate(x => `scale(${x})`)
      }}
    />
  )}
</Spring>
```

## animatedValue.interpolate()

`interpolate` either takes an object of the following shape:

| Value            | default   | Description                                      |
| ---------------- | --------- | ------------------------------------------------ |
| extrapolateLeft  | extend    | Left extrapolate. Can be: identity/clamp/extend  |
| extrapolateRight | extend    | Right extrapolate. Can be: identity/clamp/extend |
| extrapolate      | extend    | Shortcut to set left and right-extrapolate       |
| range            | [0,1]     | Array of input ranges                            |
| output           | undefined | Array of mapped output ranges                    |
| map              | undefined | Value filter applied to input value              |

A range shortcut: `val.interpolate([...inputRange], [...outputRange])`

Or a function: `val.interpolate(v => ...)`
