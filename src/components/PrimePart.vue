<template>
	<p
		v-on:click="togglePart"
		v-bind:class="{selected: isSelected}">{{part.name}}{{isSelected ? ' - ' + part.ducats : ''}}</p>
</template>

<script>
	export default {
		props: ['part'],
		computed: {
			isSelected(){
				return this.$store.getters.isSelectedPart(this.part.id)
			}
		},
		methods: {
			togglePart(){
				this.$store.dispatch('togglePart', this.part.id)
			}
		}
	}
</script>
