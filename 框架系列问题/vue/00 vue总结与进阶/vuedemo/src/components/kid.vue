<template>
    <div>
        <h2>子组件部分</h2>
        <p>{{log}}</p>
        <button @click="increase">{{total}}</button>
    </div>
</template>
<script>
    export default {
        props:['log'],
        data () {
            return {
                total:0,
                all:0
            }
        },
        // computed: {
        //     normalizedLog() {
        //         return this.log.trim().toLowerCase()
        //     }
        // }
        methods:{
            increase() {
                this.total += 1,
                this.$emit('increase')
            }
        }

    }
</script>
<style>

</style>
