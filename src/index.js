import Button from './components/button'
import Modal from './components/modal'
import ButtonGroup from './components/button-group'
import Input from './components/input'
import Progress from './components/progress'
import Select from './components/select'

const components = [Button, Modal, ButtonGroup, Input, Select, Progress]

const install = function(Vue) {
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
