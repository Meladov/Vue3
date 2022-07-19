import { createRouter,createWebHistory } from "vue-router";
const routerHistory = createWebHistory();

import mainHome from '@/pages/mainHome';
import mainAbout from '@/pages/mainAbout';
import notFound from '@/pages/notFound';
const routers = createRouter({
    history: routerHistory,
    routes: [
        {
            path : '/',
            name : 'home',
            component: mainHome
        },
        {
            path : '/about',
            name : 'about',
            component: mainAbout
        },
        {
            path : '/:CatchAll(.*)',
            name : '404',
            component: notFound
        }
    ]
})

export default routers 