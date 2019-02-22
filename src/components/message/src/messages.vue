<template>
    <div>   
        <Message
            v-for="message in messages"
            :key="message.a"
        ></Message>
    </div>
</template>

<script>
import Message from './message.vue';

export default {
    name: 'Messages',
    components: { Message },
    data() {
        return {
            messages: []
        }
    },
    methods: {
        add() {
            this.messages.push({a: 'class1'});
        },
        destory() {
            
        }
    },
}
</script>

<style>

</style>
