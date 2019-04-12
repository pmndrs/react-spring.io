import React from 'react'

import NavPage from '../common/nav-page'
import {FencedCode} from '../common/components'
import {Link} from '@reach/router'
import styled from 'styled-components'

const Section = styled.section`
  border-bottom: 1px solid hsl(0, 0%, 90%);
  padding-bottom: 50px;
  margin-bottom: 50px;
`

export default function LogPage({path}) {
  return (
    <NavPage currentPath={path}>
      <h1>Changelog</h1>

      <Section>
        <p>
          <h2>react-spring 9.0 (not yet released)</h2>
          This version includes tons of improvements to the <code>Controller</code> class, which is used by every primitive (eg: <code>useSpring</code> or <code>{'<Spring>'}</code>
          ). These improvements have caused a few breaking changes, so make sure your animations are working as expected when you try upgrading!
        </p>
        <p>
          <h3>Unified API</h3>
          <p>
            In the past two major versions, the "Render Props API" and "Hooks API" were provided by separate modules. In fact, each API had its own implementation of the internal{' '}
            <code>Controller</code> class, which was bad for maintenance.
          </p>
          <FencedCode>
            {`import { useSpring } from 'react-spring'
              import { Spring } from 'react-spring/renderprops'`}
          </FencedCode>
          <p>The new version unifies these APIs into a single module!</p>
          <FencedCode>
            {`import { Spring, useSpring } from 'react-spring'

              // The legacy module is still available:
              import { Spring } from 'react-spring/renderprops'`}
          </FencedCode>
        </p>
        <p>
          <h3>
            Improved <code>useTransition</code>
          </h3>
          You might know that the <code>enter</code>, <code>update</code>, and <code>leave</code> props of <code>useTransition</code> accept function values so you can customize
          the animations on an item-by-item basis.
          <FencedCode>
            {`useTransition(items, {
                from: { width: 0 },
                enter: item => ({ width: item.width }),
              })`}
          </FencedCode>
          <p>
            In the past, the object returned by <code>enter</code> wasn't able to configure the animation, except for its <code>to</code> values. Now, you're free to include any
            props that can be passed to <code>useSpring</code>!
          </p>
          <FencedCode>
            {`useTransition(items, {
                from: {width: 0},
                enter: item => ({
                  width: item.width,
                  delay: item.delay, // Per-item delay
                  config: { duration: item.duration }, // Per-item spring config
                  onFrame: frame => { // Per-item event listeners
                    console.log('onFrame:', frame)
                  },
                }),
              })`}
          </FencedCode>
        </p>
        <p>
          <h3>Improved async animations</h3>
          Async animations are created when an array or async function is passed to <code>useSpring</code> as the <code>to</code> prop. Pass an array to create a chain of
          animations. Pass an async function to create animations on-the-fly by repeatedly calling the given <code>next</code> function.
          <FencedCode>
            {`// Chaining with an array
              useSpring({
                to: [{ opacity: 1 }, { color: 'red' }],
                from: { opacity: 0, color: 'black' },
              })

              // Chaining with an async function
              useSpring({
                to: async (next) => {
                  await next({ opacity: 1 })
                  await next({ color: 'red' })
                },
                from: { opacity: 0, color: 'black' },
              })`}
          </FencedCode>
          In the new version, the objects of your arrays and <code>next</code> calls are allowed to include any props that can be passed to <code>useSpring</code>.
          <FencedCode>
            {`// Chaining with an array
              useSpring({
                to: [{ opacity: 1, config: { duration: 1000 } }, { color: 'red', delay: 1000 }],
                from: { opacity: 0, color: 'black' },
              })

              // Chaining with an async function
              useSpring({
                to: async (next) => {
                  await next({ opacity: 1, config: { duration: 1000 } })
                  await next({ color: 'red', delay: 1000 })
                },
                from: { opacity: 0, color: 'black' },
              })`}
          </FencedCode>
          <p>
            ⚠️ Additionally, async animations are no longer cancelled when the props are updated. Async chains (eg: <code>{`to: [{}, {}]`}</code>) are never cancelled, even if
            another chain begins. Async scripts (eg: <code>{`to: async () => {}`}</code>) are only interrupted when another script or chain begins.
          </p>
        </p>
        <p>
          <h3>
            Repurposed <code>onStart</code> prop
          </h3>
          The <code>onStart</code> prop is now called whenever an animated key is about to start animating to a new value. Previously, it was called every time the props were
          updated (even when no animations were actually started), which proved to be unreliable.
          <FencedCode>
            {`useSpring({
                opacity: 1,
                from: { opacity: 0 },
                onStart(animation) {
                  console.log(\`Animating "\${animation.key}":\`, animation);
                }
              })`}
          </FencedCode>
        </p>
        <p>
          <h3>
            Improved <code>stop</code> function
          </h3>
          The <code>useSpring</code> function returns two functions (one for updating, one for cancellation) when you pass a function as the first argument.
          <FencedCode>{`const [props, update, stop] = useSpring(() => ({ opacity: 1 }))`}</FencedCode>
          <p>
            Previously, the <code>stop</code> function wouldn't actually stop any animations, which made it seem broken.
          </p>
          <p>
            In this version, it will stop <i>all</i> animations (and prevent any delayed animations!) when called with no arguments. Additionally, you can pass an animated key (eg:{' '}
            <code>"opacity"</code>) if you only want to stop one property from animating.
          </p>
          <FencedCode>
            {`stop()          // Stop all animations
              stop('opacity') // Stop only the "opacity" animation
              stop('opacity', 'width') // Stop "opacity" and "width"

              stop(true)          // Stop all animations and pretend like they finished
              stop(true, 'width') // Stop "width" and pretend like it finished`}
          </FencedCode>
        </p>
        <p>
          <h3>Time-based diffing</h3>
          <p>"Time-based diffing" is a new strategy used when updating the props. It uses timestamps to know when props have been overridden.</p>
          <p>
            In practice, this means that delayed animations can be selectively overridden without needing to call <code>stop</code> first.
          </p>
          <FencedCode>
            {`useSpring({
                from: { width: 10, height: 10 },
                to: async (next) => {
                  // Create a delayed animation
                  next({ width: 100, height: 100, delay: 2000 }) // 2 seconds

                  // Immediately override the width animation
                  next({ width: 50 }) // This creates a new animation which starts immediately,
                                      // and it prevents the delayed animation from changing
                                      // the width. The height will still animate in 2 seconds.
                }
              })`}
          </FencedCode>
          <p>
            This behavior comes in handy with <code>useTransition</code> when an <code>enter</code> animation only partially conflicts with an <code>update</code> or{' '}
            <code>leave</code> animation.
          </p>
          <FencedCode>
            {`useTransition(items, {
                from: { size: 0, color: 'green' },
                enter: { size: 100, color: 'black' },
                leave: { size: 0 }, // Once the "leave" animation begins, the "color" will continue
              })                    // animating from "green" to "black" since it never changed.
              `}
          </FencedCode>
          <p>
            Lastly, for anyone interested in the imperative API, here's an example that uses the <code>Controller</code> API to demonstrate time-based diffing:
          </p>
          <FencedCode language="jsx">
            {`import { Controller, animated } from 'react-spring'

              // Create a controller (aka: the manual API)
              const spring = new Controller({
                opacity: 1, // The initial props
                width: '100%',
                height: '100%',
                backgroundColor: 'red',
              })

              // Inspect when each prop was last updated
              console.log(spring.timestamps) // => { "to.opacity": now,
                                             //      "to.width": now,
                                             //      "to.height": now,
                                             //      "to.backgroundColor": now }

              // Use the animated values
              <animated.div style={spring.getValues()} />

              // Create a delayed animation
              spring.update({
                opacity: 0,
                width: '50%',
                delay: 2000,
              }).start(values => {
                console.log('Final values:', values)
              })

              // Notice the props have not changed yet
              assert(spring.props.opacity === 1)
              assert(spring.props.width === '100%')

              // You can override any prop (except the "delay" prop)
              spring.update({
                opacity: 0.5, // This prevents the delayed animation from changing the opacity.
              }).start()      // NOTE: The width will still animate to "50%" two seconds from now.

              // Other methods
              spring.stop('opacity', 'width')
              spring.destroy()`}
          </FencedCode>
        </p>
      </Section>

      <Section>
        <h2>react-spring 8.0</h2>
        <a href="https://twitter.com/0xca0a/status/1093146801467781120">https://twitter.com/0xca0a/status/1093146801467781120</a>

        <h3>Breaking changes</h3>

        <p>Migrating from 7.x to 8.0 is painless. The only breaking change is the default export. If you have previously done something like this:</p>
        <FencedCode>{`import { Spring, animated, ... } from 'react-spring'`}</FencedCode>
        <p>Then you will now do:</p>
        <FencedCode>{`import { Spring, animated, ... } from 'react-spring/renderprops'`}</FencedCode>
        <p>And if you have previously used hooks like so:</p>
        <FencedCode>{`import { useSpring, animated, ... } from 'react-spring/hooks'`}</FencedCode>
        <p>You will now do:</p>
        <FencedCode>{`import { useSpring, animated, ... } from 'react-spring'`}</FencedCode>
        <p>The lib comes with the following exports:</p>
        <FencedCode>
          {`web (web/hooks, default for react-dom)
            native (react-native/hooks, default for react-native)
            renderprops-web (previously "web")
            renderprops-native (previously "native")
            renderprops-addons (previously "addons")
            renderprops-konva (previously "konva")
            renderprops-universal (previously "universal")`}
        </FencedCode>
        <p>For commonjs, add ".cjs"</p>
        <p>Both render-props and hooks will be kept and maintained for the forseeable future.</p>

        <p>
          <h4>useTransition</h4>
        </p>
        <FencedCode>{`useTransition(items, keys, config)`}</FencedCode>
        <p>
          See: <Link to="/docs/props/transition">useTransition</Link>
        </p>
      </Section>

      <Section>
        <h2>react-spring 7.0</h2>
        <p>
          <a href="https://medium.com/@johnadetutu90/react-spring-just-got-hooked-32bd672e3bb7">https://medium.com/@johnadetutu90/react-spring-just-got-hooked-32bd672e3bb7</a>
        </p>

        <ul>
          <li>
            ☂️ Hooks! useSpring, useTransition, useTrail & useKeyframes available under <code>react-spring/hooks</code>
          </li>
          <li>
            ✨ addons, native, konva and universal are available directly without <code>/dist/</code>
          </li>
          <li>🐞 Bugfixes ...</li>
        </ul>

        <h3>Breaking changes</h3>

        <p>
          Nothing, except the removal of <code>/dist/</code>, and the experimental useSpring export moved to <code>/hooks</code>. Should be good to go! 😊
        </p>
      </Section>

      <Section>
        <h2>react-spring 6.0</h2>
        <p>
          <a href="https://medium.com/@drcmda/react-spring-6-0-is-out-of-beta-533ad6c8b4a">https://medium.com/@drcmda/react-spring-6-0-is-out-of-beta-533ad6c8b4a</a>
        </p>

        <ul>
          <li>⚡️ React strict-mode compliant and ready for async rendering</li>
          <li>🚀 New spring engine (from RK4 to SEE), lots of internal changes making it faster and leaner</li>
          <li>✨ Simpler and more intuitive api</li>
        </ul>

        <h3>Configs</h3>
        <ul>
          <li>
            ⏰ Duration is built in and as easy as going <code>{`config={{ duration: 1000, easing: ... }}`}</code>
          </li>
          <li>
            ⌛️ Delays can be driven per config <code>{`config={{ delay: 1000, ... }}`}</code>
          </li>
          <li>✨ Simpler property names (mass, tension, friction, delay, precision, clamp, velocity, duration, easing)</li>
          <li>🎩 Spring config props are 1:1 compatible with react-motions and the presets finally do what they say</li>
        </ul>

        <h3>Springs</h3>
        <ul>
          <li>
            ⏮ Springs can run <code>reverse</code>, which switches <code>from</code> and <code>to</code>
          </li>
          <li>
            🚬 The <code>after</code> prop makes it easier to apply static values at the end of an animation
          </li>
          <li>🐉 Springs can animate scrollTop/Left</li>
        </ul>

        <h3>Transitions</h3>
        <ul>
          <li>
            🎉 Multistage transitions are finally possible. <code>Transition</code> inherits from <code>Keyframes</code> now, which allows it to receive the same values that you
            can use in slots, meaning you can chain or even script transitions
          </li>
          <li>
            ⭐️ The <code>unique</code> prop prevents two children with the same key to co-exist, which was an often asked for suggestion. If it is true, a fading-out item will
            vanish when an item with the same key comes in again, as opposed to forming a stack (which is still the default)
          </li>
          <li>
            ✖️ The <code>reset</code> prop, in combination with <code>unique</code> forces an incoming item to always start from scratch instead of adapting the fading-out item to
            take start-position
          </li>
          <li>
            🐌 Transitions can trail using the <code>trail</code> prop which takes a duration in ms
          </li>
          <li>
            ✨ Simpler api. Previously you could optionally pass <code>items</code> and you would have to map over children yourself. <code>items</code> and <code>keys</code> are
            Transitions sole source of truth now. You give a single function child instead of mapping
          </li>
          <li>
            🎮 Transition behaves more like Reacts TransitionGroup in that it can give you way more contextual information than before, you even have access to the state your
            output component is in (enter/leave/update)
          </li>
        </ul>

        <h3>Trails</h3>

        <ul>
          <li>✨ Simpler api. Same as Transitions</li>
          <li>⏮ The `reverse` prop can move a trail bottom-up instead of the default top-down which is more natural for items swinging in and out</li>
        </ul>

        <h3>Keyframes</h3>
        <ul>
          <li>
            ✨ Simpler api. You don't have to write <code>{`to: {...}`}</code> any longer since everything is interpolated to it
          </li>
        </ul>

        <h3>Parallax</h3>
        <ul>
          <li>
            🤷‍ Parallax always felt off since it's not as generic as the others. It has been moved to <code>react-spring/dist/addons</code> and could mark the start of convenience
            components or effects that don't belong anywhere else
          </li>
        </ul>

        <h3>Upgrading to 6.0</h3>
        <p>
          The changes made are mostly features, the api changes are slight and looking at the front page here will tell you immediately what to do. You will probably have to adapt
          your Transitions and Trail, Keyframes are backwards compatible. If you have used timings off <code>dist/addons</code> before, duration is now inbuilt (see above). A
          noticeable change also concerns spring config props, where before we would be closer to how the animated library interprets tension and friction we are now 1:1 compatible
          with react-motion.
        </p>
      </Section>
    </NavPage>
  )
}
