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

const props = useSpring({ x: state ? 1 : 0 })
return (
  <animated.div
    style={{
      transform: props.x
        .interpolate(
          [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
          [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
        )
        .interpolate(x => `scale(${x})`)
    }} />
)
```