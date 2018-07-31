<template>
	<div id="app">
		<router-link to="/relics-opener">Relics Opener</router-link>
		<router-link to="/what-else">What Else</router-link>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	created(){
		if(this.$router.currentRoute.path === '/')
			this.$router.push('relics-opener')
	}
}
</script>