import { createRouter, createWebHistory } from 'vue-router'
import Mbti from '@/views/apps/mbti/mbti.vue'

const routes = [
    {
        path: '/',
        name: 'mbti',
        component: Mbti
    }
];


const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router