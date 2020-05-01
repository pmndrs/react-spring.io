import * as React from 'react'

const AnchorTag = props =>
  props.children ? (
    <a target="_blank" rel="noopener noreferrer" {...props} />
  ) : null

export default AnchorTag
