<template>
  <footer
    class="el-footer"
    :style="{ 'height': height, 'width': width }"
  >
    <slot />		
  </footer>
</template>

<script lang="ts">
export default {
	name: 'ElFooter'
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


@include classModule(footer) {
}

</style>