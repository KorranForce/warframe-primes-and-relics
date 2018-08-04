<template>
	<div>
		<label>Prime parts:</label>
		<prime-part
			v-for="part in possibleParts"
			v-bind:key="part.id"
			v-bind:part="part"></prime-part>
	</div>
</template>

<script>
	import PrimePart from './PrimePart.vue'

	export default {
		computed: {
			possibleParts(){
				return this.$store.getters.possiblePrimeParts
			}
		},
		components: {PrimePart}
	}
</script>
