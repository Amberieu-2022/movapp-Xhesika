import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')

const menu = document.getElementById('menu')
const burger = document.getElementById('menu-burger')
burger.addEventListener('click', function () {
  menu.classList.toggle('show')
})
