import { createRouter, createWebHashHistory } from 'vue-router'
import Mbti from '@/views/apps/mbti/mbti.vue'

const routes = [
    {
        path: '/',
        name: 'mbti',
        component: Mbti
    }
];

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL), 
    routes
});

export default router