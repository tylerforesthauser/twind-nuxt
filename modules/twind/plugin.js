import { create } from 'twind'

export default ({ ssrContext }, inject) => {
  const { preflight, theme, darkMode, mode } = <%= JSON.stringify(options, null, 2) %>
  const sheet = process.server ? ssrContext.$twSheet : undefined
  const { tw } = create({
    preflight,
    theme,
    darkMode,
    mode,
    sheet,
  })
  inject('tw', tw)
}
