import Vue from 'vue'
import App from './App.vue'
export const ChildToChilEvent = new Vue({
    methods: {
        changeAge(age) {
            this.$emit('agewasChangedbychild', age)
        }
    }
});
new Vue({
    el: '#app',
    render: h => h(App)
})