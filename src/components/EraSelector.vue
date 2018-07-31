<template>
	<div>
		<label>Era:</label>
		<input list="eras" v-model="selectedEra" placeholder="optional">
		<datalist id="eras">
			<option v-for="era in eras" v-bind:value="era" />
		</datalist>
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
				this.$store.commit('setEra', value)
			}
		}
	}
}
</script>
