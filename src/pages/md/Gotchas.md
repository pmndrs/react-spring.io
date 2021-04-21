# Gotchas

## Why the focus on spring physics instead of durations?

Cheng Lou explains it best ...

<iframe width="100%" height="400" src="https://www.youtube.com/embed/1tavDv5hXpo?rel=0&t=6m17s" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>

In short, durations and easings are the number one reason UI animation is hard (and usually looks bad). This is why our focus is on physics first and foremost, where duration mathematically doesn't exist since springs are adaptive, or in other words, they work with energetic load and momentum instead of hardcoded values.

Think of it like this, if you cause an animation and abort somewhere near the middle, a spring will fluidly move back according to the energy it spent getting there as if you would actually pull back a physical spring mid-momentum, whereas in a duration-based animation it would stop abruptly and naively move back taking the hard-coded time it would have spent getting to end-state using the same curve.

It can be odd in the beginning thinking of animation not in terms of time, but once you let go things will start to make sense and creating fluid interfaces will be easier than ever.

### "But, ... i **want** to use durations" 😤

You still can.

```jsx
import * as easings from 'd3-ease'

<Spring ... config={{ duration: 3000, easing: easings.easeCubic }}>
```

## Manual API

The `Controller` is react-spring's heart. All primitives use it internally (including hooks). If you dislike render-props, and maybe hooks are too radical for you, then perhaps this is what you are looking for as it gives you full manual control without having to worry about loose-end animation handles. The api is very similar to the `useSpring` hook.

```jsx
import {Controller, animated} from 'react-spring'

class Test extends React.Component {
  state = {show: true}
  animations = new Controller({opacity: 0})
  toggle = () => this.setState(state => ({show: !show}))
  render() {
    const props = this.animations.update({opacity: this.state.show ? 1 : 0})
    return (
      <>
        <button onClick={this.toggle}>click</button>
        <animated.div style={props}>I will fade</animated.div>
      </>
    )
  }
}
```
