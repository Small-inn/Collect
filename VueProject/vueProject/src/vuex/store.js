import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

// 全局状态
const state = {
    counts: 10
}

// 定义需要的 mutations
const mutations = {
    INCREMENT(state){
        state.counts++
    },
    DECREMENT(state){
        state.counts--
    }
}

// 创建store实例
export default new Vuex.Store({
    actions,
    getters,
    state,
    mutations
})