<template>
    <div>
        <p style="color:orange">
            v-model会忽略表单元素的value、checked、selected特性的初始值。
            因为它会选择vue实例数据来作为具体的值，所以可以通过js在组件data选项中声明初始值</p>
        <input v-model="message">
        <p>啥？ {{message}}</p>

        
        <textarea v-model="areamsg"></textarea></br>
        <span>Multiline message is:</span>
        <p style="white-space:pre-line">{{areamsg}}</p>


        <input id="checkbox" type="checkbox" v-model="checked">
        <label for="checkbox">{{checked}}</label></br>


        <select v-model="selected">
            <option disabled value="">请选择</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
        </select>
        <label>Selected:{{selected}}</label><br>

        <!--<label>选择列表设置</label>
        <select v-model="selected">
            <option v-bind:value="{number:123}">123</option>
        </select>-->
        <p>
            修饰符：
            .lazy,在change事件中同步<input v-model.lazy="fa">
            .number,自动将用户输入的值转换为Number类型 <input v-model.number="fa">
            .trim,自动过滤用户输入的首尾空格 <input v-model.trim="fa">
        </p>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                message:'你说啥？',
                areamsg:'啊哈',
                checked:false,
                selected:''
            }
        },
        methods:{
            fa() {
             console.log(11);
            }
        }
    }
</script>
<style>

</style>

