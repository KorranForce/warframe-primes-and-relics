<template>
	<div>
		<label>Relics:</label>
		<relic
			v-for="relic in possibleRelics"
			v-bind:key="relic.id"
			v-bind:relic="relic"></relic>
	</div>
</template>

<script>
	import Relic from './Relic.vue'

	export default {
		computed: {
			possibleRelics(){
				return this.$store.getters.possibleRelics
			}
		},
		components: {Relic}
	}
</script>
