<template>
	<div>
		<era-selector></era-selector>
		<div class="flex-container">
			<loot-selector v-for="n in 4" v-bind:key="n" v-bind:id="n"></loot-selector>
		</div>
	</div>
</template>

<script>
import LootSelector from './../components/LootSelector.vue'
import EraSelector from './../components/EraSelector.vue'

export default {
	components: {
		LootSelector,
		EraSelector
	}
}
</script>

<style scoped>
.flex-container {
	display: flex;
}
.flex-container div {
	margin: 10px;
}
</style>
