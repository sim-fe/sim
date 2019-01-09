import Button from './components/button'
import Modal from './components/modal'
import ButtonGroup from './components/button-group'
import Input from './components/input'
import Progress from './components/progress'
import Option from './components/option'
import Select from './components/select'

import locale from './locale'

const components = [Button, Modal, ButtonGroup, Input, Select, Progress, Option]

const install = function(Vue, opts = {}) {
    if (install.installed) return
    locale.use(opts.locale)
    locale.i18n(opts.i18n)
    components.map(component => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    install,
    ...components
}
