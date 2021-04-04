import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import { LiveProvider, LivePreview } from 'react-live'
import LazyLoad from 'react-lazyload'

export const CodeBlock = ({ children, className, live, render, url }) => {
  const language = className.replace(/language-/, '')

  if (live && url) {
    return (
      <LazyLoad height={600} once>
        <iframe
          src={url}
          style={{
            width: '100%',
            height: 600,
          }}
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        />
      </LazyLoad>
    )
  }

  if (render) {
    return (
      <div style={{ marginTop: '40px' }}>
        <LiveProvider code={children}>
          <LivePreview />
        </LiveProvider>
      </div>
    )
  }

  return (
    <Highlight {...defaultProps} code={children.trim()} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: '20px' }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}
