<template>
	<div>
		<era-selector></era-selector>
		<div class="flex-container">
			<relics-selector></relics-selector>
			<parts-selector></parts-selector>
		</div>
	</div>
</template>

<script>
	import EraSelector from './../components/EraSelector.vue'
	import RelicsSelector from './../components/RelicsSelector.vue'
	import PartsSelector from './../components/PartsSelector.vue'

	export default {
		components: {
			EraSelector,
			RelicsSelector,
			PartsSelector
		}
	}
</script>

<style>
	.flex-container {
		display: flex;
	}
	.flex-container div {
		margin: 10px;
	}
	p {
		margin-bottom: 2px;
		margin-top: 2px;
	}

	.selected {
		background-color: #17f617;
	}
</style>
