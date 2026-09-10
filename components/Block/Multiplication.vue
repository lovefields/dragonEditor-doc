<template>
    <div class="block-multiplication">
        This Is A Multiplication Block!!
        <p>A : {{ props.a }}</p>
        <p>B : {{ props.b }}</p>
        <p>Result : {{ props.a * props.b }}</p>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{ a: number; b: number }>();
</script>

<style lang="scss" scoped>
.block-multiplication {
    padding: 10px;
    background: #f5f5f5;
    border: 1px solid #ccc;
}
</style>
