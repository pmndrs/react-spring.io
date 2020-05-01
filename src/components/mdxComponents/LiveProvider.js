import * as React from 'react'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { pageDidLoad } from 'react-update-url-on-scroll'
import prismTheme from '../theme/prism'

import { transform } from '../editor/transform'
import { format } from '../editor/format'
import { scope } from '../editor/scope'

const buble = {
  transforms: {
    arrow: false,
    asyncAwait: false,
  },
}

const ReactLive = props => {
  // HACK: Wait until the first ReactLive component has rendered before letting
  // `react-update-url-on-scroll` scroll to the location hash.
  React.useEffect(() => {
    pageDidLoad()
  }, [])

  return (
    <LiveProvider
      code={format(props.code)}
      scope={scope}
      buble={buble}
      transformCode={transform}>
      <LiveEditor theme={prismTheme} className="react-live-editor" />
      <LiveError />
      <LivePreview
        style={{
          padding: 12,
        }}
      />
    </LiveProvider>
  )
}

export default ReactLive
