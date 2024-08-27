<template>
    <header class="header">
        <NuxtLink class="logo" to="/">Dragon Editor</NuxtLink>

        <div class="right-area">
            <NuxtLink class="link" to="https://www.npmjs.com/package/dragon-editor" target="_blank">NPM</NuxtLink>
            <NuxtLink class="link" to="https://github.com/lovefields/dragonEditor" target="_blank">Git Hub</NuxtLink>
        </div>
    </header>
</template>

<style lang="scss">
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--color-border);

    .logo {
        display: flex;
        justify-content: center;
        align-items: center;
        width: var(--size-asdie);
        height: 40px;
        color: #5451ac;
        border-right: 1px solid var(--color-border);
        font-size: 20px;
        font-weight: 900;
        box-sizing: border-box;
    }

    .right-area {
        display: flex;
        column-gap: 20px;
        padding-right: 20px;

        .link {
            color: var(--color-text-default);
            font-size: 14px;
            font-weight: 500;
        }
    }
}
</style>
