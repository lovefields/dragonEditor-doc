<template>
    <div class="block-plus">
        This Is A Plus Block!!
        <p>A : {{ props.a }}</p>
        <p>B : {{ props.b }}</p>
        <p>Result : {{ props.a + props.b }}</p>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{ a: number; b: number }>();
</script>

<style lang="scss" scoped>
.block-plus {
    padding: 10px;
    background: #f5f5f5;
    border: 1px solid #ccc;
}
</style>
