import Messages from './src/messages.vue'
import Vue from 'vue'

let messageInstance // messages实例
const defaults = {
    top: 15,
    duration: 1.5
}
const prefixId = 'sim-message'
let name = 1

let newInstance = properties => {
    const _props = properties || {}
    const ins = new Vue({
        render(h) {
            return h(Messages, {
                props: _props
            })
        }
    })

    // 手动将实例挂载到body
    const component = ins.$mount() // 返回实例本身
    document.body.appendChild(component.$el)

    const child = ins.$children[0]

    return child
}

function getMessageInstance() {
    // 保证实例唯一
    messageInstance =
        messageInstance ||
        newInstance({
            styles: {
                top: `${defaults.top}px`
            }
        })
    return messageInstance
}

export default {
    name: 'Message',

    info(options = {}) {
        return this.message('info', options)
    },
    message(type, options) {
        let ins = getMessageInstance()
        ins.add(
            Object.assign(options, {
                name: `${prefixId}${name}`,
                type: type
            })
        )
        name++
    }
}

/* Message.install = function (Vue) {
    Vue.component(Message.name, Modal);
};

export default Message; */
