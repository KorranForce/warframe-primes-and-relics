import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import relics from '../Relics.json'
import primeParts from '../PrimeParts.json'

export default new Vuex.Store({
	state: {
		selectedEra: '',
		eras: ['Lith', 'Meso', 'Neo', 'Axi'],
		relics,
		primeParts
	},
	getters: {
		relicPrimeParts: (state)=>(id)=>{
			const relic = state.relics.find(relic=>{return relic.id === id})
			return state.primeParts.filter(primePart=>{return relic.primePartsIds.includes(primePart.id)})
		},
		primePartRelics: (state)=>(id)=>{
			const primePartRelicsIds = state.primeParts.find(primePart=>{return primePart.id === id}).drops.map(drop=>{return drop.relicId})
			return state.relics.filter(relic=>{return primePartRelicsIds.includes(relic.id)})
		}
	},
	mutations: {
		setEra(state, era){
			state.selectedEra = era
		}
	},
	actions: {
		// selectEra({commit}, era){
		// 	commit('setEra', era)
		// }
	}
})