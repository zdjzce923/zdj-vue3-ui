<template>
	<main class="el-main" :style="{ 'height': height, 'width': width }">
		<slot />		
	</main>
</template>

<script lang="ts">
export default {
	name: 'ElMain'
}
</script>


<script setup lang="ts">
import { withDefaults } from 'vue'

interface Props {
	height?: string,
	width?: string
}

const props = withDefaults(defineProps<Props>(), {
	width: '100%'
})

</script>


<style scoped lang="scss">
@import '../../styles/mixin.scss';


@include classModule(main) {
}

</style>