<template>
    <div class="section intro-page">
        <h1>Intro</h1>

        <p>
            Dragon Editor made it just because I needed the WYSIWYG Editor to write on my <NuxtLink to="https://dico.me" target="_blank">blog</NuxtLink>.<br />
            This module support only Nuxt3.
        </p>

        <h2>Font</h2>

        <p>If you use Codeblock. I recommented use `Inconsolata` font. (<NuxtLink to="https://fonts.google.com/specimen/Inconsolata?query=Inconsolata" target="_blank">link</NuxtLink>)</p>

        <h2>Installation</h2>

        <p>Install using the package manager you use.</p>

        <pre><code>// npm
npm install dragon-editor

// yarn
yarn add dragon-editor

// bun
bun add dragon-editor</code></pre>

        <p>If you complate install then set <code>nuxt.config.ts</code></p>

        <pre><code><span class="keyword">export</span> <span class="keyword">default</span> <span class="title function_">defineNuxtConfig</span>({
    <span class="attr">modules</span>: [<span class="string">"dragon-editor"</span>],
});</code></pre>

        <h2>How to use?</h2>

        <h3>Edite Page</h3>

        <pre><code><span class="tag">&lt;<span class="name">template</span>&gt;</span>
    <span class="tag">&lt;<span class="name">div</span> <span class="attr">class</span>=<span class="string">"editor-area"</span>&gt;</span>
        <span class="tag">&lt;<span class="keyword">DragonEditor</span> <span class="attr">v-model</span>=<span class="string">"contentData"</span> /&gt;</span>
    <span class="tag">&lt;/<span class="name">div</span>&gt;</span>
<span class="tag">&lt;/<span class="name">template</span>&gt;</span>

<span class="tag">&lt;<span class="name">script</span> <span class="attr">setup</span> <span class="attr">lang</span>=<span class="string">"ts"</span>&gt;</span><span class="language-javascript">
    <span class="keyword">const</span> contentData = <span class="symbol">ref</span>&lt;<span class="keyword">DEContentData</span>&gt;([]); <span class="comment">// Do not modify the value after binding under any circumstances.</span>
</span><span class="tag">&lt;/<span class="name">script</span>&gt;</span></code></pre>

        <h3>View Page</h3>

        <pre><code><span class="tag">&lt;<span class="name">template</span>&gt;</span>
    <span class="tag">&lt;<span class="name">div</span> <span class="attr">class</span>=<span class="string">"view-area"</span>&gt;</span>
        <span class="tag">&lt;<span class="keyword">DragonEditorViewer</span> <span class="attr">:content</span>=<span class="string">"data"</span> &#47;&gt;</span>
    <span class="tag">&lt;&#47;<span class="name">div</span>&gt;</span>
<span class="tag">&lt;&#47;<span class="name">template</span>&gt;</span>

<span class="tag">&lt;<span class="name">script</span> <span class="attr">setup</span> <span class="attr">lang</span>=<span class="string">"ts"</span>&gt;</span><span class="language-javascript">
    <span class="keyword">const</span> data = <span class="symbol">ref</span>&lt;<span class="keyword">DEContentData</span>&gt;([]);
</span><span class="tag">&lt;&#47;<span class="name">script</span>&gt;</span></code></pre>
    </div>
</template>
