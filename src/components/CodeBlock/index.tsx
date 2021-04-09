import React, { ReactNode } from 'react'
import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/palenight'
import { LiveProvider, LivePreview, LiveError } from 'react-live'
import LazyLoad from 'react-lazyload'
import { useSpring, animated, config } from '@react-spring/web'
import { mdx } from '@mdx-js/react'

interface CodeBlockProps {
  children: string
  className?: string
  live?: boolean | string
  render?: boolean | string
  url: string
  code?: boolean | string
}

export const CodeBlock = ({
  children,
  className = '',
  live,
  render,
  url,
  code = true,
}: CodeBlockProps) => {
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
    const scope = {
      useSpring,
      animated,
      config,
      mdx,
      POINTS:
        '22.5 35.25 8.68704657 42.5118994 11.3250859 27.1309497 0.150171867 16.2381006 15.5935233 13.9940503 22.5 0 29.4064767 13.9940503 44.8498281 16.2381006 33.6749141 27.1309497 36.3129534 42.5118994',
    }

    return (
      <div className="code-table">
        {code !== 'false' && (
          <Highlight
            {...defaultProps}
            theme={theme}
            code={children.trim()}
            language={language as Language}>
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
        )}
        <LiveProvider
          scope={scope}
          code={children.trim()}
          transformCode={code => '/** @jsx mdx */' + code}>
          <LiveError />
          <LivePreview style={{ color: 'rgb(45, 55, 71)' }} />
        </LiveProvider>
      </div>
    )
  }

  return (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={children.trim()}
      language={language as Language}>
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
