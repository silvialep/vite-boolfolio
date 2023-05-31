import { createRouter, createWebHistory } from "vue-router";

import AppHome from './pages/AppHome.vue';
import AppAbout from './pages/AppAbout.vue';
import AppIndex from './pages/AppIndex.vue';
import SingleProject from './pages/SingleProject.vue';

const router = createRouter({

    history: createWebHistory(),

    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome,
            meta: {
                title: 'Home',
            },
        },
        {
            path: '/about',
            name: 'about',
            component: AppAbout,
        },
        {
            path: '/index',
            name: 'index',
            component: AppIndex,
            meta: {
                title: 'I miei progetti',
            },
        },
        {
            path: '/projects/:slug',
            name: 'projects.show',
            component: SingleProject,
        },
    ],
});

router.beforeEach((to) => {
    document.title = to.meta?.title ? 'My Boolfolio - ' + to.meta.title : 'Nome a caso';
});

export { router };