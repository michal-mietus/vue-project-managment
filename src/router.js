import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/authentication/LoginView.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/authentication/RegisterView.vue'),
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('./views/projects/ProjectsView.vue'),
      meta: { 
        requiresAuth: true
      },
    }
  ],
});

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login') 
  } else {
    next() 
  }
})

export default router;