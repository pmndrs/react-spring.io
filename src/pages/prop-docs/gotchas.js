import React from 'react'
import NavPage from '../../common/nav-page'
import {FencedCode} from '../../common/components'

export default function GotchasPage({path}) {
  return (
    <NavPage currentPath={path}>
      <section>
        <h1>Gotchas</h1>

        <h2>
          "But, ... i <strong>want</strong> to use durations" 😤
        </h2>
        <p>You still can.</p>
        <FencedCode language="jsx">{`import * as easings from 'd3-ease'

<Spring ... config={{ duration: 3000, easing: easings.easeCubic }}>`}</FencedCode>
      </section>

      <section>
        <h2>Animating "auto"</h2>

        <p>react-spring is one of the few libs that understands and animates auto, so you can use it in your configs, like so:</p>

        <FencedCode language="jsx">{`<Spring from={{ height: 0 }} to={{ height: 'auto' }}>`}</FencedCode>
        <p>
          Keep in mind that in order to do this we have to measure out a snapshot set to height/width: auto before we can start animating it. There are some things you should watch
          out for:
        </p>

        <p>
          {' '}
          1. Wrong width/height. If you notice that the measured bounds are wrong, give your view more context, for instance set the position attribute of the parent container (the
          element that contains your spring) to either absolute or relative so that the view (the element that's inside your spring) retains bounds.
        </p>
        <p>
          2. Contents change but won't animate. If you set your spring to auto and later add or remove contents (children), it doesn't animate since it's essentially going from
          "auto" to "auto". In these rare cases you can use the <code>force</code> prop, which forces the spring to animate regardless of whether props are the same or not.
        </p>
        <FencedCode language="jsx">{`<Spring
  from={{ height: 0 }} to={{ height: 'auto' }} config={{ ...config.default, precision: 1 }}>`}</FencedCode>

        <p>
          3. Nested auto-springs eat into their animations. If you nest springs and click one open and close another, the measurements will conflict for a moment. There is no real
          solution here. Something you can do to help it is make sure springs animate with less precision so that they will complete faster.
        </p>
        <FencedCode language="jsx">{`<Spring force from={{ height: 0 }} to={{ height: 'auto' }}>
  {items.map(id => <Item key={id} />)}`}</FencedCode>
      </section>

      <section>
        <h2>Manual API</h2>

        <p>
          The <code>Controller</code> is react-springs heart, all primitives use it internally (including hooks). If you dislike render-props, and maybe hooks are too radical for
          you, then perhaps this is what you are looking for as it gives you full manual control without having to worry about loose-end animation handles. The api is very similar
          to the useSpring hook.
        </p>

        <FencedCode language="jsx">{`import { Controller, animated } from 'react-spring'

class Test extends React.Component {
  state = { show: true }
  animations = new Controller({ opacity: 0 })
  toggle = () => this.setState(state => ({ show: !show }))
  render() {
    const props = this.animations.update({ opacity: this.state.show ? 1 : 0 })
    return (
      <>
        <button onClick={this.toggle}>click</button>
        <animated.div style={props}>I will fade</animated.div>
      </>
    )
  }
}`}</FencedCode>
      </section>

      <section>
        <h2>Browser Support</h2>
        <p>react-spring requires the following polyfills below for Internet Explorer.</p>
        <FencedCode>{`String.prototype.startsWith
Object.entries
Array.prototype.includes
Array.prototype.findIndex
Set`}</FencedCode>
      </section>
    </NavPage>
  )
}
