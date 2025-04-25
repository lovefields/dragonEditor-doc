<template>
    <div class="section type-page">
        <h1>Type</h1>

        <h2 id="DragonEditor"><NuxtLink to="#DragonEditor" :use-hash="true">DragonEditor</NuxtLink></h2>

        <pre><code><span class="keyword">interface</span> <span class="title class_">DragonEditor</span> {
    <span class="attr">addBlock</span>: <span class="function">(<span class="params"><span class="attr">type</span>: <span class="title class_">DEBlockData</span></span>) =&gt;</span> <span class="built_in">void</span>;
    <span class="attr">setDecoration</span>: <span class="function">(<span class="params"><span class="attr">data</span>: <span class="title class_">DEDecoration</span></span>) =&gt;</span> <span class="built_in">void</span>;
    <span class="attr">setTextAlign</span>: <span class="function">(<span class="params"><span class="attr">type</span>: <span class="title class_">DETextalign</span></span>) =&gt;</span> <span class="built_in">void</span>;
}</code></pre>

        <h2 id="DEContentData"><NuxtLink to="#DEContentData" :use-hash="true">DEContentData</NuxtLink></h2>

        <pre><code><span class="keyword">type</span> <span class="title class_">DEContentData</span> = <span class="title class_">DEBlockData</span>[];</code></pre>

        <h2 id="DEBlockData"><NuxtLink to="#DEBlockData" :use-hash="true">DEBlockData</NuxtLink></h2>

        <pre><code><span class="keyword">type</span> <span class="title class_">DEBlockData</span> = <span class="title class_">DETextBlock</span> | <span class="title class_">DEHeadingBlock</span> | <span class="title class_">DEListBlock</span> | <span class="title class_">DEImageBlock</span> | <span class="title class_">DECodeBlock</span> | <span class="title class_">DECustomBlock</span>;

<span class="keyword">interface</span> <span class="title class_">DETextBlock</span> {
    <span class="attr">type</span>: <span class="string">"text"</span>;
    <span class="attr">classList</span>: <span class="built_in">string</span>[];
    depth?: <span class="built_in">number</span>;
    <span class="attr">textContent</span>: <span class="built_in">string</span>;
}

<span class="keyword">interface</span> <span class="title class_">DEHeadingBlock</span> {
    <span class="attr">type</span>: <span class="string">"heading"</span>;
    <span class="attr">level</span>: <span class="built_in">number</span>;
    <span class="attr">id</span>: <span class="built_in">string</span>;
    depth?: <span class="built_in">number</span>;
    <span class="attr">classList</span>: <span class="built_in">string</span>[];
    <span class="attr">textContent</span>: <span class="built_in">string</span>;
}

<span class="keyword">interface</span> <span class="title class_">DEListItem</span> {
    <span class="attr">classList</span>: <span class="built_in">string</span>[];
    <span class="attr">textContent</span>: <span class="built_in">string</span>;
}

<span class="keyword">interface</span> <span class="title class_">DEListBlock</span> {
    <span class="attr">type</span>: <span class="string">"list"</span>;
    <span class="attr">element</span>: <span class="title class_">DEListElementName</span>;
    depth?: <span class="built_in">number</span>;
    <span class="attr">style</span>: <span class="title class_">DEListStyle</span>;
    <span class="attr">child</span>: <span class="title class_">DEListItem</span>[];
}

<span class="keyword">interface</span> <span class="title class_">DEImageBlock</span> {
    <span class="attr">type</span>: <span class="string">"image"</span>;
    <span class="attr">maxWidth</span>: <span class="built_in">number</span>;
    <span class="attr">src</span>: <span class="built_in">string</span>;
    <span class="attr">width</span>: <span class="built_in">number</span>;
    <span class="attr">height</span>: <span class="built_in">number</span>;
    <span class="attr">caption</span>: <span class="built_in">string</span>;
    <span class="attr">classList</span>: <span class="built_in">string</span>[];
}

<span class="keyword">interface</span> <span class="title class_">DECodeBlock</span> {
    <span class="attr">type</span>: <span class="string">"code"</span>;
    <span class="attr">language</span>: <span class="title class_">DECodeblockLang</span>;
    <span class="attr">theme</span>: <span class="title class_">DECodeblockTheme</span>;
    <span class="attr">filename</span>: <span class="built_in">string</span>;
    <span class="attr">textContent</span>: <span class="built_in">string</span>;
}

<span class="keyword">interface</span> <span class="title class_">DECustomBlock</span> {
    <span class="attr">type</span>: <span class="string">"custom"</span>;
    <span class="attr">classList</span>: <span class="built_in">string</span>[];
    <span class="attr">textContent</span>: <span class="built_in">string</span>;
}</code></pre>

        <h2 id="DEDecoration"><NuxtLink to="#DEDecoration" :use-hash="true">DEDecoration</NuxtLink></h2>

        <pre><code><span class="keyword">type</span> <span class="title class_">DEDecoration</span> = <span class="string">"bold"</span> | <span class="string">"italic"</span> | <span class="string">"underline"</span> | <span class="string">"strikethrough"</span> | <span class="string">"code"</span>;</code></pre>

        <h2 id="DETextalign"><NuxtLink to="#DETextalign" :use-hash="true">DETextalign</NuxtLink></h2>

        <pre><code><span class="keyword">type</span> <span class="title class_">DETextalign</span> = <span class="string">"left"</span> | <span class="string">"right"</span> | <span class="string">"center"</span> | <span class="string">"justify"</span>;</code></pre>
    </div>
</template>

<script setup lang="ts">
const route = useRoute();

onMounted(() => {
    if (route.hash) {
        const el = document.querySelector(route.hash);

        if (el !== null) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    }
});
</script>