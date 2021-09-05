<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<script setup lang="ts">
defineProps<{
  url: string
}>();
</script>

<template>
  <a :href="url" v-bind="$attrs" class="shadow-lg hover:shadow-xl transition p-4 text-center uppercase tracking-widest">
    <slot />
  </a>
</template>
