import React from 'react'
import remark from 'remark'
import remark2react from 'remark-react'

export default function ParseMD({contents}) {
  return (
    <div className="markdown-body">
      {
        remark()
          .use(remark2react, {sanitize: {attributes: {a: ['href'], '*': ['className']}}})
          .processSync(contents).contents
      }
    </div>
  )
}
