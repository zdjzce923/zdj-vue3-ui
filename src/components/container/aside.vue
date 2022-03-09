<template>
  <aside
    class="el-aside"
    :style="{ 'height': height, 'width': width }"
  >
    <slot />		
  </aside>
</template>

<script lang="ts">
export default {
	name: 'ElAside'
}
</script>


<script setup lang="ts">

interface Props {
	height?: string,
	width?: string
}

const props = defineProps<Props>()

</script>


<style scoped lang="scss">
@import '../../styles/mixin.scss';


@include classModule(aside) {
}

</style>