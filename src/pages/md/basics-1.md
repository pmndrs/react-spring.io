# Basics

There are 5 hooks in react-spring currently:

* `useSpring` a single spring, moves data from a -> b
* `useSprings` multiple springs, for lists, where each spring moves data from a -> b
* `useTrail` multiple springs with a single dataset, one spring follows or trails behind the other
* `useTransition` for mount/unmount transitions (lists where items are added/removed/updated)
* `useChain` to queue or chain multiple animations together

The easiest is [useSpring](/useSpring), but the same concept applies to all animation primitives. Let's have a look ...

```jsx
import { useSpring, animated } from 'react-spring'

function App() {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } })
  return <animated.div style={props}>I will fade in</animated.div>
}
```

### First, you fetch your imports

```jsx
import { useSpring, animated } from 'react-spring'
```

You need the animation-primitive itself, and a special factory called `animated`. This library animates outside React (for performance reasons). Your view has to know how to handle the animated props you pass to it. This is what `animated` is there for, it extends native elements to receive animated values.

### Next, define your spring

```jsx
const props = useSpring({ opacity: 1, from: { opacity: 0 } })
```

A spring simply animates values from one state to another. Updates are accumulative, springs remember all the values you ever pass. You can use arbitrary names. There are a couple of reserved keywords like "from" (for base values). [You can learn about the api here](/api). The received props are not static values! These props are self-updating, you cannot use them in regular divs and such.

### Finally, tie the animated values to your view

```jsx
return <animated.div style={props}>I will fade in</animated.div>
```

In the view part of your component you simply wire these props in. Make sure to extend the native element you want to animate using `animated`. If your target is the web then `animated` contains all valid html elements (divs, spans, svgs, etc). If you want to animate React components, styled-components, or elements on other platforms, then do this:

```jsx
// React components
const AnimatedDonut = animated(Donut)

// React-native
const AnimatedView = animated(View)

// styled-components, emotion, etc.
const AnimatedHeader = styled(animated.h1)`
  ...
`
```

### Do not think of the values you pass as "styles" per se