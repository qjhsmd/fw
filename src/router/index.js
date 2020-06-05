import vueRouter from 'vue-router'
import Vue from 'vue'
import home from '@/page/Home'
import HelloWorld from '@/components/HelloWorld'
import demo from '@/components/demo'
import chickenSoup from '@/page/chicken/chickenSoup'
import login from '@/page/login/login'
import unfound from '@/components/unfound'

Vue.use(vueRouter)

export default new vueRouter({
    baseUrl: '/',
    mode: 'history',
    routes: [
        {
            path: '/home',
            component: home,
            name: 'home',
            children: [
                {
                    path: '/hello',
                    component: HelloWorld,
                    name: 'hello'
                },
                {
                    path: '/demo',
                    component: demo,
                    name: 'demo'
                },
                {
                    path: '/chickenSoup',
                    component: chickenSoup,
                    name: 'chickenSoup'
                },
            ]
        },

        {
            path: '/login',
            component: login,
            name: 'login'
        },
        {
            path: '*',
            component: unfound,
            name: 'unfound'
        },
    ]
}
)