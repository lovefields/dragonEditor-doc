<template>
    <div class="section method-page">
        <h1>Method</h1>

        <h2>getContentData</h2>

        <p>This method return Editor content data.</p>

        <pre><code><span class="tag">&lt;<span class="name">template</span>&gt;</span>
    <span class="tag">&lt;<span class="name">div</span> <span class="attr">class</span>=<span class="string">"editor-area"</span>&gt;</span>
        <span class="tag">&lt;<span class="keyword">ClientOnly</span>&gt;</span>
            <span class="tag">&lt;<span class="keyword">DragonEditor</span> <span class="attr">ref</span>=<span class="string">"$editor"</span> &#47;&gt;</span>
        <span class="tag">&lt;&#47;<span class="keyword">ClientOnly</span>&gt;</span>
        <span class="tag">&lt;<span class="name">button</span> @<span class="attr">click</span>=<span class="string">"<span class="symbol">getData</span>()"</span>&gt;</span>Get Data<span class="tag">&lt;&#47;<span class="name">button</span>&gt;</span>
    <span class="tag">&lt;&#47;<span class="name">div</span>&gt;</span>
<span class="tag">&lt;&#47;<span class="name">template</span>&gt;</span>

<span class="tag">&lt;<span class="name">script</span> <span class="attr">setup</span> <span class="attr">lang</span>=<span class="string">"ts"</span>&gt;</span><span class="language-javascript">
    <span class="keyword">const</span> $editor = <span class="symbol">ref</span>&lt;<span class="keyword">DragonEditor</span>&gt;();

    <span class="keyword">function</span> <span class="title --function">getData</span>(<span class="params"></span>) {
        <span class="variable --language">console</span>.<span class="title --function">log</span>($editor.<span class="property">value</span>.<span class="title --function">getContentData</span>()); <span class="comment">&#47;&#47; return content data (DEContentData type)</span>
    }
</span><span class="tag">&lt;&#47;<span class="name">script</span>&gt;</span></code></pre>

        <h2>setContentData</h2>

        <p>This method change Editor content data.</p>

        <pre><code><span class="tag">&lt;<span class="name">template</span>&gt;</span>
    <span class="tag">&lt;<span class="name">div</span> <span class="attr">class</span>=<span class="string">"editor-area"</span>&gt;</span>
        <span class="tag">&lt;<span class="keyword">ClientOnly</span>&gt;</span>
            <span class="tag">&lt;<span class="keyword">DragonEditor</span> <span class="attr">ref</span>=<span class="string">"$editor"</span> &#47;&gt;</span>
        <span class="tag">&lt;&#47;<span class="keyword">ClientOnly</span>&gt;</span>
        <span class="tag">&lt;<span class="name">button</span> @<span class="attr">click</span>=<span class="string">"<span class="symbol">setData</span>()"</span>&gt;</span>Get Data<span class="tag">&lt;&#47;<span class="name">button</span>&gt;</span>
    <span class="tag">&lt;&#47;<span class="name">div</span>&gt;</span>
<span class="tag">&lt;&#47;<span class="name">template</span>&gt;</span>

<span class="tag">&lt;<span class="name">script</span> <span class="attr">setup</span> <span class="attr">lang</span>=<span class="string">"ts"</span>&gt;</span><span class="language-javascript">
    <span class="keyword">const</span> $editor = <span class="symbol">ref</span>&lt;<span class="keyword">DragonEditor</span>&gt;();

    <span class="keyword">function</span> <span class="title --function">setData</span>(<span class="params"></span>) {
        $editor.<span class="property">value</span>.<span class="title --function">setContentData</span>([...]); <span class="comment">&#47;&#47; use DEContentData type value</span>
    }
</span><span class="tag">&lt;&#47;<span class="name">script</span>&gt;</span></code></pre>

        <h2>setDecoration</h2>

        <p>This method set text node style.</p>

        <h2>setTextAlign</h2>

        <p>This method set align style in editable element.</p>

        <h2>addBlock</h2>

        <p>This method adds blocks supported by the editor to the editor.</p>

        <h2>addImageBlock</h2>

        <p>This method add image block to the editor.</p>

        <pre><code>$editor.<span class="property">value</span>.<span class="title --function">addImageBlock</span>({
    <span class="attr">src</span>: <span class="built-in">string</span>;
    <span class="attr">width</span>: <span class="built-in">number</span>;
    <span class="attr">height</span>: <span class="built-in">number</span>;
    <span class="attr">classList</span>?: <span class="built-in">string</span>[];
    <span class="attr">caption</span>?: <span class="built-in">string</span>;
});</code></pre>

        <h2>addCustomBlock</h2>

        <p>This method add custom block to the editor.</p>

        <pre><code>$editor.<span class="property">value</span>.<span class="title --function">addCustomBlock</span>(<span class="attr">HTML</span>: <span class="built-in">string</span>, <span class="attr">classList</span>: <span class="built-in">string</span>[] = []);</code></pre>
    </div>
</template>
