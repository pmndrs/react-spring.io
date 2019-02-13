## Interpolation

*Springs interpolate pretty much everything*, they don't just handle numbers.

* colors (names, rgb, rgba, hsl, hsla, gradients)
* absolute lengths (cm, mm, in, px, pt, pc)
* relative lengths (em, ex, ch, rem, vw, vh, vmin, vmax, %)
* angles (deg, rad, grad, turn)
* flex and grid units (fr, etc)
* all HTML attributes
* SVG paths (as long as the number of points matches, otherwise use [custom interpolation](https://codesandbox.io/embed/lwpkp46om))
* arrays
* string patterns (transform, border, boxShadow, etc)
* auto is valid
* non-animatable string values (visibility, pointerEvents, etc)
* scrollTop/scrollLeft ([native only](/perf), since these aren't actual dom properties)

```jsx
<Spring
  from={{
    width: 100,
    padding: 0,
    background:
      'linear-gradient(to right, #30e8bf, #ff8235)',
    transform:
      'translate3d(400px,0,0) scale(2) rotateX(90deg)',
    boxShadow: '0px 100px 150px -10px #2D3747',
    borderBottom: '0px solid white',
    shape: 'M20,380 L380,380 L380,380 L200,20 L20,380 Z',
    textShadow: '0px 5px 0px white'
  }}
  to={{ 
    width: 'auto', 
    padding: 20, 
    background:
      'linear-gradient(to right, #009fff, #ec2f4b)', 
    transform: 
      'translate3d(0px,0,0) scale(1) rotateX(0deg)', 
    boxShadow: '0px 10px 20px 0px rgba(0,0,0,0.4)', 
    borderBottom: '10px solid #2D3747', 
    shape: 'M20,20 L20,380 L380,380 L380,20 L20,20 Z', 
    textShadow: '0px 5px 15px rgba(255,255,255,0.5)' 
  }}>
  {props => ...}
</Spring>
```

Of course the only properties that the browser can animate relatively cheaply are [composite properties](https://www.html5rocks.com/en/tutorials/speed/high-performance-animations/) (opacity, transform), so you might want to watch out for that.

## Config

*Spring are configurable*, delays, tension, friction, resets, everything can be tuned. There are also a couple of generic presets that will cover some common ground.

```jsx
import { Spring, config } from 'react-spring/renderprops'

<Spring config={config.default} />
```

| Property                  | Value |
| ------------------------- | ------- |
| config.default             | { tension: 170, friction: 26 }
| config.gentle              | { tension: 120, friction: 14 }
| config.wobbly              | { tension: 180, friction: 12 }
| config.stiff               | { tension: 210, friction: 20 }
| config.slow                | { tension: 280, friction: 60 }
| config.molasses            | { tension: 280, friction: 120 }

You can of course set configs for yourself. 

```jsx
<Spring config={{ tension: 0, friction: 2, precision: 0.1 }} />
```

| Property                  | Default | Description       |
| ------------------------- | ----------- | ------------- |
| mass                      | 1           | spring mass
| tension                   | 170         | spring energetic load
| friction                  | 26          | spring resistence
| clamp                     | false       | when true, stops the spring once it overshoots its boundaries
| precision                 | 0.01        | precision
| velocity                  | 0           | initial velocity
| delay                     | 0           | delay
| duration                  | undefined    | Duration in seconds. If > than 0 will switch to a duration-based animation instead of spring physics
| easing                    | t => t      | linear by default, you can use any easing you want, for instance d3-ease

It is also possible to set configs key by key.

```jsx
<Spring
  to={{ width: 10, color: 'red' }}
  config={key => key === 'width' ? config.slow : config.wobbly} />
```

## Props

| Property | Type | Description |
| -------- | ---- | -------- |
| from     | obj | Base values, optional |
| to       | obj | Animates to ... |
| delay     | number/fn | Delay in ms before the animation starts. Also valid as a function for individual keys: key => delay |
| immediate     | bool/fn | Prevents animation if true. Also valid as a function for individual keys: key => immediate |
| config     | obj/fn | Spring config (contains mass, tension, friction, etc). Also valid as a function for individual keys: key => config |
| reset     | bool | The spring starts to animate from scratch (from -> to) if set true |
| reverse     | bool | "from" and "to" are switched if set true, this will only make sense in combination with the "reset" flag |
| onStart     | fn | Callback when the animation starts to animate |
| onRest     | fn | Callback when the animation comes to a still-stand |
| onFrame     | fn | Frame by frame callback, first argument passed is the animated value |

## Demos
