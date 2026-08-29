import DefaultTheme from 'vitepress/theme'
import FPBadge from './components/FPBadge.vue'
import LatestRelease from './components/LatestRelease.vue'
import SectionLinks from './components/SectionLinks.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('FPBadge', FPBadge)
    app.component('LatestRelease', LatestRelease)
    app.component('SectionLinks', SectionLinks)
  }
}
