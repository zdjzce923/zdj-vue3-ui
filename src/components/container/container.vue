<template>
	<section class="el-container"
			:class="{ 'is-vertical': isVertical }"
	>
		<slot />
	</section>
</template>

<script lang=ts>
export default {
	name: 'ElContainer'
}
</script>

<script setup lang="ts">
import { computed, VNode, Component, useSlots } from 'vue'

interface Props {
	direction?: string
}

const slots = useSlots()
const prop = defineProps<Props>()
const isVertical = computed(() => {
	if( slots && slots.default ) {
		return slots.default().some((vn: VNode) => {
			const tag = (vn.type as Component).name
			return tag === 'ElHeader' || tag === 'ElFooter'
		})
	} else {
		return prop.direction === 'vertical'
	}
})

</script>

<style scoped lang="scss">
@import '../../styles/mixin.scss';

@include classModule(container) {
	display: flex;
	flex-direction: row;
	flex: 1;
	flex-basis: auto;
	box-sizing: border-box;
	min-width: 0;

	@include when(vertical) {
		flex-direction: column;
	}

}


</style>