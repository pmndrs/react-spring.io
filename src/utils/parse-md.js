import React from 'react'
import unified from 'unified'
import markdown from 'remark-parse'
import remark2rehype from 'remark-rehype'
import raw from 'rehype-raw'
import rehype2react from 'rehype-react'
import slug from 'rehype-slug'

export default function ParseMD({contents}) {
  return unified()
    .use(markdown)
    .use(remark2rehype, {allowDangerousHTML: true})
    .use(slug)
    .use(raw)
    .use(rehype2react, {
      createElement: React.createElement
    })
    .processSync(contents).contents
}
