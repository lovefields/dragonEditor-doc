<template>
    <div class="section bind-page">
        <h1>Event</h1>

        <h2>uploadImageEvent <code>Function(files:File[])</code></h2>

        <p>
            If you want add image to Editor. (Menu & Method & Paste)<br />
            Set this Event.
        </p>

        <pre><code><span class="tag">&lt;<span class="name">template</span>&gt;</span>
    <span class="tag">&lt;<span class="name">div</span> <span class="attr">class</span>=<span class="string">"editor-area"</span>&gt;</span>
        <span class="tag">&lt;<span class="name">ClientOnly</span>&gt;</span>
            <span class="tag">&lt;<span class="name">DragonEditor</span> @<span class="attr">uploadImageEvent</span>=<span class="string">"uploadImageEvent"</span> <span class="attr">ref</span>=<span class="string">"$editor"</span> /&gt;</span>
        <span class="tag">&lt;/<span class="name">ClientOnly</span>&gt;</span>
    <span class="tag">&lt;/<span class="name">div</span>&gt;</span>
<span class="tag">&lt;/<span class="name">template</span>&gt;</span>

<span class="tag">&lt;<span class="name">script</span> <span class="attr">setup</span> <span class="attr">lang</span>=<span class="string">"ts"</span>&gt;</span><span class="language-javascript">
    <span class="keyword">const</span> $editor = ref&lt;<span class="title class_">DragonEditor</span>&gt;();

    <span class="keyword">function</span> <span class="title function_">uploadImageEvent</span>(<span class="params">files:File[]</span>) {
        <span class="comment">// Do upload Image</span>
        <span class="comment">// Then add Image</span>
        $editor.<span class="property">value</span>.<span class="title function_">addImageBlock</span>(<span class="string">"URL"</span>);
    }
</span><span class="tag">&lt;/<span class="name">script</span>&gt;</span></code></pre>


        <h2>uploadFileEvent <code>Function(files:File[])</code></h2>

        <p>
            If you want add File to Editor.<br />
            Set this Event.
        </p>

        <pre><code><span class="tag">&lt;<span class="name">template</span>&gt;</span>
    <span class="tag">&lt;<span class="name">div</span> <span class="attr">class</span>=<span class="string">"editor-area"</span>&gt;</span>
        <span class="tag">&lt;<span class="name">ClientOnly</span>&gt;</span>
            <span class="tag">&lt;<span class="name">DragonEditor</span> @<span class="attr">uploadFileEvent</span>=<span class="string">"uploadFileEvent"</span> <span class="attr">ref</span>=<span class="string">"$editor"</span> /&gt;</span>
        <span class="tag">&lt;/<span class="name">ClientOnly</span>&gt;</span>
    <span class="tag">&lt;/<span class="name">div</span>&gt;</span>
<span class="tag">&lt;/<span class="name">template</span>&gt;</span>

<span class="tag">&lt;<span class="name">script</span> <span class="attr">setup</span> <span class="attr">lang</span>=<span class="string">"ts"</span>&gt;</span><span class="language-javascript">
    <span class="keyword">const</span> $editor = ref&lt;<span class="title class_">DragonEditor</span>&gt;();

    <span class="keyword">function</span> <span class="title function_">uploadFileEvent</span>(<span class="params">files:File[]</span>) {
        <span class="comment">// Do upload File</span>
        <span class="comment">// Then add File</span>
        $editor.<span class="property">value</span>.<span class="title function_">addFileBlock</span>(<span class="string">"URL"</span>, <span class="string">"fileName"</span>, <span class="number">1024</span>); <span class="comment">// src: string, name: string, size: number</span> 
    }
</span><span class="tag">&lt;/<span class="name">script</span>&gt;</span></code></pre>
    </div>
</template>
