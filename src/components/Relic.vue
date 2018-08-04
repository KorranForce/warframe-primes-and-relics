<template>
	<p
		v-on:click="toggleRelic"
		v-bind:class="{selected: isSelected}">{{relic.name}}</p>
</template>

<script>
	export default {
		props: ['relic'],
		computed: {
			isSelected(){
				return this.$store.getters.isSelectedRelic(this.relic.id)
			}
		},
		methods: {
			toggleRelic(){
				this.$store.dispatch('toggleRelic', this.relic.id)
			}
		}
	}
</script>
