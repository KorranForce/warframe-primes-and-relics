import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//const RelicsOpener = ()=>import('./views/RelicsOpener.vue')
import RelicsOpener from './views/RelicsOpener.vue'
import WhatElse from './views/WhatElse.vue'

const routes = [
	{path: '/relics-opener', component: RelicsOpener},
	{path: '/what-else', component: WhatElse}
]

export default new VueRouter({
	routes
})