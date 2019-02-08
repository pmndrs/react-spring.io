import React from 'react'
import NavPage from '../../common/nav-page'
import {FencedCode} from '../../common/components'

export default function OtherPlatformsPage({path}) {
  return (
    <NavPage currentPath={path}>
      <section>
        <h1>Other Platforms</h1>

        <p>React-spring is a cross-platform library by default, you could take it and animate on all react-platforms.</p>

        <FencedCode>{`// The default export is valid for react-native as well
import { Spring } from 'react-spring/renderprops'

// react-konva
import { Spring } from 'react-spring/renderprops-konva'

// Any other target or platform
import { Spring } from 'react-spring/renderprops-universal'`}</FencedCode>

        <p>
          The default export points to react-dom when running in web and to react-native when running in react-native. If you want to animate any other target refer to /universal.
          Each target defines platform specific constants (colors, units, etc.). The universal target is the least specific.
        </p>
        <p>In react-native you can still use the native keyword for more performance, create your own animated-components by calling into the animated function.</p>
        <FencedCode>{`import { Spring } from 'react-spring/renderprops-native'
import { View } from 'react-native'

const AnimatedView = animated(View)

<Spring native from={{ opacity: 0 }} to={{ opacity: 1 }}>
  {styles => <AnimatedView style={styles} />}
</Spring>`}</FencedCode>
      </section>
    </NavPage>
  )
}
