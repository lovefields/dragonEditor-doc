<template>
    <div class="section bind-page">
        <h1>Event</h1>

        <h2>uploadImageEvent <code>Function(data:File)</code></h2>

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

    <span class="keyword">function</span> <span class="title function_">uploadImageEvent</span>(<span class="params">file:File</span>) {
        <span class="comment">// Do upload Image</span>
        <span class="comment">// Then add Image</span>
        $editor.<span class="property">value</span>.<span class="title function_">addBlock</span>({
            <span class="attr">type</span>: <span class="string">"image"</span>;
            <span class="attr">maxWidth</span>: number;
            <span class="attr">src</span>: string;
            <span class="attr">width</span>: number;
            <span class="attr">height</span>: number;
            <span class="attr">caption</span>: string;
            <span class="attr">classList</span>: string[];
        });
    }
</span><span class="tag">&lt;/<span class="name">script</span>&gt;</span></code></pre>
    </div>
</template>
