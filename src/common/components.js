import React, {useContext, useState} from 'react'
import styled from 'styled-components'
import {useSpring, config} from 'react-spring/hooks'

const Context = React.createContext()

export const Grid = styled.div`
  display: grid;
  grid-gap: ${props => props.gap || '20px'};
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: minmax(200px, auto);
  width: 100%;
`

export const Image = styled('a')`
  background-image: url(${props => props.url});
  background-size: ${props => props.size || 'contain'};
  background-repeat: no-repeat;
  background-position: center center;
`

export const FencedCode = function({language = 'javascript', children}) {
  return (
    <pre>
      <code className={`language-${language}`}>{children}</code>
    </pre>
  )
}

export const RewindSpringProvider = function({children}) {
  const [flip, set] = useState(false)
  const animatedProps = useSpring({
    reset: true,
    reverse: flip,
    from: {x: 0},
    x: 1,
    delay: 200,
    config: config.molasses,
    onRest: () => set(!flip)
  })

  return <Context.Provider value={animatedProps} children={children} />
}

export const RewindSpring = function({children, style}) {
  const {x} = useContext(Context)
  return (
    <div
      style={{
        color: 'rgb(45, 55, 71)',
        ...style
      }}
    >
      {children(x)}
    </div>
  )
}
