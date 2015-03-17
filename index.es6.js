export default md => {
  const originalRender = md.render

  md.render = function (src, env = {}) {
    const defaultHighlight = this.options.highlight

    this.options.highlight = (...args) => {
      const html = defaultHighlight && defaultHighlight(...args)
      env.highlighted = !!html
      return html
    }

    env.highlighted = false
    const html = originalRender.call(this, src, env)
    this.options.highlight = defaultHighlight
    return html
  }
}
