import WRow from './components/row'
import WCol from './components/col'

const components = [
  WRow,
  WCol
]

const install = function (Vue) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  WRow,
  WCol
}
