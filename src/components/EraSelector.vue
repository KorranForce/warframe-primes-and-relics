<template>
	<div>
		<label>Era:</label>
		<span v-for="era in eras">
			<input
				type="radio"
				v-bind:key="era"
				v-bind:value="era"
				v-model="selectedEra">
			<label v-bind:for="era">{{era}}</label>
		</span>
	</div>
</template>

<script>

export default {
	computed: {
		eras(){
			return this.$store.state.eras
		},
		selectedEra: {
			get(){
				return this.$store.state.selectedEra
			},
			set(value){
				this.$store.dispatch('changeEra', value)
			}
		}
	}
}
</script>

<style scoped>
	span {
		margin: 5px;
	}
</style>