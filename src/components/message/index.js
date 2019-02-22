import Messages from './src/messages.vue'
import Vue from 'vue'

let newInstance = properties => {
    const _props = properties || {xxx: 'xxx'}
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

    // 提供接口：添加/删除组件
    return {
        notice() {
            child.add()
        }
    }
}

let messageInstance
function getMessageInstance() {
    // 保证实例唯一
    messageInstance = messageInstance || newInstance()
    return messageInstance
}

export default {
    name: 'Message',

    info() {
        return this.message()
    },
    message() {
        let ins = getMessageInstance()
        ins.notice()
    }
}

/* Message.install = function (Vue) {
    Vue.component(Message.name, Modal);
};

export default Message; */
