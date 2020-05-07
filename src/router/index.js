import Vue from 'vue'
import VueRouter from 'vue-router'
import content from './../views/content.vue'
import About from './../views/About.vue'
import gallery from './../views/gallery.vue'
import project from './../views/project.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'content',
    component: content,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: gallery
  },
  {
    path: '/project/:id',
    name: 'project',
    component: project
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
