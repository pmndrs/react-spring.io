import React, { useEffect } from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import {
  a,
  useSpring,
  useSprings,
  useTransition,
  useTrail,
  useChain,
} from 'react-spring'

function guard(name, effect) {
  try {
    return effect()
  } catch (e) {
    console.warn(name + ' threw an error: ' + e.stack)
  }
}

export const scope = {
  useSpring,
  useSprings,
  useTransition,
  useTrail,
  useChain,
  useEffect(effect, deps) {
    useEffect(() => guard('useEffect', effect), deps)
  },

  // Create and render a component that uses the example code.
  __r: useExample => {
    const Example = ({ visible }) => {
      const wasVisible = usePrev(visible)
      const style = guard('Example', () =>
        useExample({
          reset: !wasVisible && visible,
          cancel: !visible,
        })
      )

      return (
        <a.div
          style={{
            width: 80,
            height: 80,
            backgroundColor: 'purple',
            borderRadius: 16,
            ...style,
          }}
        />
      )
    }
    return (
      <VisibilitySensor>
        {props => <Example visible={props.isVisible} />}
      </VisibilitySensor>
    )
  },
}

/** Use a value from the previous render */
function usePrev(value) {
  const prevRef = React.useRef()
  React.useEffect(() => {
    prevRef.current = value
  })
  return prevRef.current
}
