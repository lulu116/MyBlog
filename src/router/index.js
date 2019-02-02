import Vue from 'vue'
import Router from 'vue-router'
import NotFound from '@/views/404'
import Layout from '@/components/Layout/Layout'
import DashBoard from '@/views/dashboard'
import skill from '@/views/skill/skill'
import project from '@/views/project/project'
Vue.use(Router)
const Routers = [
  {
    path: '/dashboard',
    name: 'dashboard', // 唯一标识，监听路由时可用
    component: Layout,
    props: true, // 当有可变参数时,this.$route.params获取参数 可用props获取
    children: [
      {
        path: '',
        name: 'dashboardIndex',
        component: DashBoard
      }
    ]
  },
  {
    path: '/skill',
    name: 'skill', // 唯一标识，监听路由时可用
    component: Layout,
    props: true, // 当有可变参数时,this.$route.params获取参数 可用props获取
    children: [
      {
        path: '',
        name: 'skillList',
        component: skill
      }
    ]
  },
  {
    path: '/project',
    name: 'project', // 唯一标识，监听路由时可用
    component: Layout,
    props: true, // 当有可变参数时,this.$route.params获取参数 可用props获取
    children: [
      {
        path: '',
        name: 'projectList',
        component: project
      }
    ]
  },
  {
    path: '/404', // '/404/:id'动态路由，通过 this.$route.params获取
    name: 'NotFound',
    alias: '/notfound', // 别名，当访问notfound时，却是访问到/404
    props: true,
    component: NotFound
  },
  {
    path: '*', // *匹配所有路由 带有通配符的路由放最后
    name: 'DashBoard',
    redirect: '/dashboard', // 重定向 当访问任意路径时，却是访问到/dashboard
    component: DashBoard
  }
]
export default new Router({
  // mode: 'history', // 支持两种模式 hash(default) / history, 后端支持可开 主要针对线上版本
  scrollBehavior: () => ({
    y: 0 // 当切换到新路由时，想要页面滚到顶部，或者保持在原来的位置
  }),
  routes: Routers
})
