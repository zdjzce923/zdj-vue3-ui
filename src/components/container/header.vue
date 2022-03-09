<template>
  <header
    class="el-header"
    :style="{ 'height': height, 'width': width }"
  >
    <slot />		
  </header>
</template>

<script lang="ts">
export default {
	name: 'ElHeader'
}
</script>


<script setup lang="ts">
import { withDefaults } from 'vue'

interface Props {
	height?: string,
	width?: string
}

const props = withDefaults(defineProps<Props>(), {
	height: '60px',
	width: '100%'
})

console.log('props:', props)
</script>


<style scoped lang="scss">
@import '../../styles/mixin.scss';
$header-padding: 20px;

@include classModule(header) {
	padding: $header-padding;
}

</style>