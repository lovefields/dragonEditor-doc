<template>
    <aside class="aside">
        <NuxtLink class="link" to="/">Intro</NuxtLink>
        <NuxtLink class="link" to="/option">Option</NuxtLink>
        <NuxtLink class="link" to="/event">Event</NuxtLink>
        <NuxtLink class="link" to="/method">Method</NuxtLink>
        <NuxtLink class="link" to="/type">Type</NuxtLink>
        <NuxtLink class="link" to="/demo">Demo</NuxtLink>
    </aside>
</template>

<style lang="scss">
.aside {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    width: var(--size-asdie);
    padding: 20px;
    background: var(--color-bg);
    border-right: 1px solid var(--color-border);
    box-sizing: border-box;

    .link {
        color: var(--color-text-default);
        font-size: 14px;
        font-weight: 500;
    }
}
</style>
