import Button from './components/button'
import Modal from './components/modal'
import ButtonGroup from './components/button-group'
import Input from './components/input'
import Progress from './components/progress'

const components = [
  Button,
  Modal,
  ButtonGroup,
  Input,
  Progress
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
  ...components
}