import React, {useEffect} from 'react'

export default function NavPage({currentPath, children}) {
  useEffect(() => {
    if (window.Prism) window.Prism.highlightAll()
  }, [])
  return children
}