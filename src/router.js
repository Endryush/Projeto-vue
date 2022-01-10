import Vue from 'vue';
import Router from 'vue-router';
import loginPage from './components/login/loginPage.vue'
import bookListPage from './components/book/bookListPage.vue'

Vue.use(Router);

const routes = [
    { path: '/', name:'login', component: loginPage },
    { path: '/book', name:'bookList', component: bookListPage },

];

export default new Router ({
    routes,
})