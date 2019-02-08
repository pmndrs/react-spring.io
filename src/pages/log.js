import React from 'react'

import NavPage from '../common/nav-page'
import {FencedCode} from '../common/components'
import {Link} from '@reach/router'

export default function LogPage({path}) {
  return (
    <NavPage currentPath={path}>
      <section>
        <h1>Change Log</h1>

        <h2>react-spring 8.1</h2>
        <p>
          <a href="https://twitter.com/0xca0a/status/1093146801467781120">https://twitter.com/0xca0a/status/1093146801467781120</a>
        </p>

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
        <FencedCode>{`web (web/hooks, default for react-dom)
native (react-native/hooks, default for react-native)
renderprops-web (previously "web")
renderprops-native (previously "native")
renderprops-addons (previously "addons")
renderprops-konva (previously "konva")
renderprops-universal (previously "universal")`}</FencedCode>
        <p>For commonjs, add ".cjs"</p>
        <p>Both render-props and hooks will be kept and maintained for the forseeable future.</p>

        <p>
          <h4>useTransition</h4>
        </p>
        <FencedCode>{`useTransition(items, keys, config)`}</FencedCode>
        <p>
          See: <Link to="/docs/props/transition">useTransition</Link>
        </p>
      </section>

      <section>
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
      </section>

      <section>
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
      </section>

      <section>
        <h2>Upgrading from 5.0 to 6.0</h2>
        <p>
          The changes made are mostly features, the api changes are slight and looking at the front page here will tell you immediately what to do. You will probably have to adapt
          your Transitions and Trail, Keyframes are backwards compatible. If you have used timings off <code>dist/addons</code> before, duration is now inbuilt (see above). A
          noticeable change also concerns spring config props, where before we would be closer to how the animated library interprets tension and friction we are now 1:1 compatible
          with react-motion.
        </p>
      </section>
    </NavPage>
  )
}
