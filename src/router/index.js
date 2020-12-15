import Vue from 'vue'
import VueRouter from 'vue-router'
import bookshelf from '../views/indexPage/bookshelf.vue'
import bookCity from '../views/indexPage/bookCity.vue'
import ranking from '../views/indexPage/ranking.vue'
import crosstalk from '../views/indexPage/crosstalk.vue'
import mine from '../views/indexPage/mine.vue'
import searchPage from '../views/searchPage/searchPage.vue'
import index from '../views/index'
import bookDetail from '../views/bookDetail/bookDetail.vue'
import bookMulu from '../views/bookDetail/bookMulu.vue'
import bookContent from '../views/bookDetail/bookContent.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: "/bookCity",
    name: 'index',
    component: index,
    children: [
      { path: 'bookshelf', component: bookshelf },
      { path: 'bookCity', component: bookCity },
      { path: 'ranking', component: ranking },
      { path: 'crosstalk', component: crosstalk },
      { path: 'mine', component: mine }
    ]
  },
  {
    path: '/searchpage',
    name: 'searchPage',
    component: searchPage
  },
  {
    path: '/bookDetail/:id',
    name: 'bookDetail',
    component: bookDetail
  },
  {
    path: '/bookMulu/:id',
    name: 'bookMulu',
    component: bookMulu
  },
  {
    path: '/bookContent/:bookId/:id',
    name: 'bookContent',
    component: bookContent
  }
]

const router = new VueRouter({
  routes
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router
