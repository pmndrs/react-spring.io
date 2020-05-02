export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This tutorial has been updated. ` + `Reload to display the latest version?`
  )
  if (answer === true) {
    window.location.reload()
  }
}

export const onInitialClientRender = () => {
  // TODO: sync with `config.gatsby.trailingSlash` value
  if (!location.pathname.endsWith('/')) {
    location.pathname += '/'
  }
}
