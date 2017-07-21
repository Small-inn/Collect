<template>
  <div>
    <button @click="greet">点击</button></br>
    <h2>事件修饰符</h2>
    <a href="#" @click.stop="doSomething">阻止事件冒泡</a>
    <a href="#" @click.once="doOnce">只触发一次</a>
    <a href="#" @click.capture="doThat">添加事件捕获</a>
    <h2>按键修饰符</h2>
    <input @keyup.enter="submit">

    <p style="color:red">使用修饰符时，顺序很重要，相应的代码会以同样的顺序产生。使用@click.prevent.self会阻止所有的点击，而@click.self.prevent只会阻止元素上的点击</p>
  </div>
</template>
<script>
    export default {
        data() {
            return {
                name:'lx'
            }
        },
        methods:{
            greet(e) {
                console.log('Hello' + this.name + '!')

                if(e){
                    console.log(e.target.tagName)
                }
            },
            doSomething() {
                console.log('阻止事件冒泡')
            },
            doOnce() {
                console.log('只是触发了一次');
            },
            doThat() {
                console.log('使用事件捕获');
            },
            submit() {
                console.log('enter键使用了呀');
            }
        }
    }
</script>
<style>

</style>

