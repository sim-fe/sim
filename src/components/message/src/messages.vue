<template>
    <div :class="['sim-message__wrap']" :style="wrapStyles">   
        <Message
            v-for="message in messages"
            :key="message.name"
            :name="message.name"
            :content="message.content"
            :duration="message.duration"
        ></Message>
    </div>
</template>

<script>
import Message from './message.vue';

export default {
    name: 'Messages',
    components: { Message },
    props: {
        styles: {
            type: Object,
            default: function () {
                return {};
            }
        }
    },
    data() {
        return {
            messages: []
        }
    },
    methods: {
        add(options) {
            this.messages.push(options);
        },
        close(name) {
            const messages = this.messages;
            for (let i = 0; i < messages.length; i++) {
                if (messages[i].name === name) {
                    this.messages.splice(i, 1);
                    break;
                }
            }
        },
        destory() {
            
        }
    },
    computed: {
        wrapStyles() {
            let styles = Object.assign({}, this.styles);
            /* styles['z-index'] = 1010 + this.tIndex;
 */
            return styles;
        }
    }
}
</script>

<style>

</style>
