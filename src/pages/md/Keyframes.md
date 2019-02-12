# Keyframes

```jsx
import { Keyframes } from 'react-spring/renderprops'
```

Keyframes allow you to chain, compose and orchestrate animations.

*Keyframes is a factory that extends either springs or trails.* You start by defining one or many named-slots in which you place the properties you want to animate. By default all unknown props are interpolate as "to". You can use *all* spring props otherwise: from, config, reset, etc. It creates a component that bears a special "state" prop, which receives the name of one of the slots. It will execute it and run its animations.

A slot can take:

* An object consisting of properties
* An array of objects, which then forms a chained animation
* A function that allows you to script or form loops

TLDR, first, you define a Keyframe-object with named-slots.

```jsx
// You can create keyframes for springs and trails
const Container = Keyframes.Spring({
  // Single props
  show: { opacity: 1 },
  // Chained animations (arrays)
  showAndHide: [{ opacity: 1 }, { opacity: 0 }],
  // Functions with side-effects with access to component props
  wiggle: async (next, cancel, ownProps) => {
    await next({ x: 100, config: config.wobbly })
    await delay(1000)
    await next({ x: 0, config: config.gentle })
  }
})
```

Now use it anywhere you want, set the named-slot of your choice to animate towards.

```jsx
<Container state="showAndHide">
  {styles => <div style={styles}>Hello</div>}
</Container>
```

There is a shortcut for low-level scripting by giving it a function instead of an object consisting of slots (good for loops and such). In this case the state-prop on the resulting primitive can be omitted.

```jsx
// Will fade children in and out in a loop
const Script = Keyframes.Spring(async next =>
  while (true)
    await next({ opacity: 1, from: { opacity: 0 }, reset: true })
)
```

And another shortcut for arrays:

```jsx
const Chain = Keyframes.Spring([{ scale: 1.5 }, { scale: 1 }])
```

## Props

*The resulting component accepts all spring properties*: native, from, immediate, onRest, and so on.

| Property | Type | Required | Default | Description |
| -------- | ---- | -------- | ------- | ----------- |
| state | String | false | __default | Name of the active slot |

## Demos