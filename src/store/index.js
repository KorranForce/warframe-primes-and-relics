import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const eras = ['Lith', 'Meso', 'Neo', 'Axi']
import relics from '../Relics.json'
import primeParts from '../PrimeParts.json'

export default new Vuex.Store({
	state: {
		eras,
		relics,
		primeParts,
		selectedEra: '',
		selectedRelicsIds: [],
		selectedPartsIds: []
	},
	mutations: {
		setEra(state, era){
			state.selectedEra = era
		},
		selectRelic(state, relicId){
			state.selectedRelicsIds.push(relicId)
		},
		deselectRelic(state, relicId){
			state.selectedRelicsIds.splice(state.selectedRelicsIds.findIndex(el=>el === relicId), 1)
		},
		selectPart(state, partId){
			state.selectedPartsIds.push(partId)
		},
		deselectPart(state, partId){
			state.selectedPartsIds.splice(state.selectedPartsIds.findIndex(el=>el === partId), 1)
		}
	},
	getters: {
		possibleRelics: (state)=>{
			return state.selectedEra === '' ?
				state.relics :
				state.relics.filter(relic=>relic.name.toLowerCase().startsWith(state.selectedEra.toLowerCase()))
		},
		possibleRelicsIds: (state, getters)=>{
			return getters.possibleRelics.map(relic=>relic.id)
		},
		isSelectedRelic: (state)=>(relicId)=>{
			return state.selectedRelicsIds.includes(relicId)
		},
		possiblePrimeParts: (state, getters)=>{
			if(state.selectedRelicsIds.length === 0){
				return state.primeParts.filter(primePart=>{
					return primePart.drops.some(drop=>getters.possibleRelicsIds.includes(drop.relicId))
				})
			}else{
				return state.primeParts.filter(primePart=>{
					return primePart.drops.some(drop=>getters.isSelectedRelic(drop.relicId))
				})
			}
		},
		isSelectedPart: (state)=>(partId)=>{
			return state.selectedPartsIds.includes(partId)
		}
	},
	actions: {
		changeEra({state, commit}, era){
			if(era !== ''){
				state.selectedRelicsIds.filter(relicId=>
					!state.relics.find(relic=>relic.id === relicId).name.toLowerCase().startsWith(era.toLowerCase())
				).forEach(relicId=>
					commit('deselectRelic', relicId)
				)
			}
			commit('setEra', era)
		},
		toggleRelic({state, getters, commit}, relicId){
			if(getters.isSelectedRelic(relicId)){
				commit('deselectRelic', relicId)
			}else{
				commit('selectRelic', relicId)
			}
		},
		togglePart({getters, commit}, partId){
			if(getters.isSelectedPart(partId))
				commit('deselectPart', partId)
			else
				commit('selectPart', partId)
		}
	}
})