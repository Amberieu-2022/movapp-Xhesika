import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GenresView from '../views/GenresView.vue'
import SearchView from '../views/searchView.vue'
import SeriesView from '../views/SeriesView.vue'
import TvSeriesView from '../views/TvSeriesView.vue'
import InfoView from '../views/InfoView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/search',
    name: 'search',
    component: SearchView
  },
  {
    path: '/series',
    name: 'series',
    component: SeriesView
  },
  {
    path: '/tvSeries',
    name: 'tvSeries',
    component: TvSeriesView
  },

  {
    path: '/info/:id',
    name: 'info',
    component: InfoView
  },
  {
    path: '/genres',
    name: 'genres',
    component: GenresView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
