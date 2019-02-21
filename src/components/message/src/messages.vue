<template>
    <div>   
        <Message
            v-for="message in messages"
            :class="message.a"
        ></Message>
    </div>
</template>

<script>
import Message from './message.vue';

export default {
    components: { Message },
    data() {
        return {
            messages: []
        }
    },
    methods: {
        add() {
            this.messages.push({});
        }
    },
}
</script>

<style>

</style>
