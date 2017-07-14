//需要解决的问题：
//1.子类嵌套的问题
export default [
    {
        path: '/mz/about/',
        component: require('./pages/meizi/about.vue')
    },
    {
        path: '/mz/form/',
        component: require('./pages/meizi/form.vue')
    },
    {
        path: '/mz/dynamic-route/blog/:blogId/post/:postId/',
        component: require('./pages/meizi/dynamic-route.vue')
    },
    {
        path: '/mz/meizi/',
        component: require('./pages/meizi/meizi.vue')
    },
    {
        path: '/mz/me/',
        component: require('./pages/meizi/me.vue')
    }

]