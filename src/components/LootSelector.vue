<template>
	<div>
		<div>
			<label>Relic:</label>
			<input v-bind:list="'relics'+id" v-model="selectedRelicName" placeholder="optional">
			<datalist v-bind:id="'relics'+id">
				<option v-for="relic in relics" v-bind:key="relic.id" v-bind:value="relic.name" />
			</datalist>
		</div>
		<div>
			<label>Prime part:</label>
			<input v-bind:list="'parts'+id" v-model="selectedPartName">
			<datalist v-bind:id="'parts'+id">
				<option v-for="part in parts" v-bind:key="part.id" v-bind:value="part.name" />
			</datalist>
		</div>
		<p>{{selectedPartInfo}}</p>
	</div>
</template>

<script>

export default {
	props: ['id'],
	created(){
		this.$watch(
			()=>{return this.selectedEra},
			(newVal, oldVal)=>{
				if(newVal !== '' && this.selectedRelicName !== '' && !this.selectedRelicName.startsWith(newVal)){
					this.selectedRelicName = ''
				}
			}
		)
		// this.$watch(
		// 	()=>{return this.selectedRelicName},
		// 	(newVal, oldVal)=>{
		// 		if(newVal !== '' && !this.selectedRelicName.startsWith(newVal)){
		// 			this.selectedPartName = ''
		// 		}
		// 	}
		// )
	},
	data(){
		return {
			selectedRelicName: '',
			selectedPartName: ''
		}
	},
	computed: {
		selectedEra(){
			return this.$store.state.selectedEra
		},
		relics(){
			return this.selectedEra === '' ? this.$store.state.relics : this.$store.state.relics.filter(relic=>relic.name.startsWith(this.selectedEra))
		},
		parts(){
			let filteredParts
			if(this.selectedRelicName === ''){
				if(this.selectedEra === ''){
					filteredParts = this.$store.state.primeParts
				}else{
					filteredParts = this.$store.state.primeParts.filter(primePart=>primePart.drops.some(drop=>drop.location.startsWith(this.selectedEra)))
				}
			}else{
				const foundRelic = this.relics.find(relic=>relic.name === this.selectedRelicName)
				filteredParts = foundRelic ? this.$store.getters.relicPrimeParts(foundRelic.id) : []
			}
			// console.log(filteredParts.map(p=>p.name))
			return filteredParts
		},
		selectedPartInfo(){
			const selectedPart = this.parts.find(part=>part.name === this.selectedPartName)
			return selectedPart ? `ducats: ${selectedPart.ducats}` : "part not found"
		}
	}
}
</script>
