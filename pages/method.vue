<template>
    <div class="section method-page">
        <h1>Method</h1>

        <h2>
            changeEditorData <code>Function(value: <NuxtLink to="/type#DEContentData" :use-hash="true">DEContentData</NuxtLink>)</code>
        </h2>

        <p>This method work change Editor Data and also v-model data.</p>

        <p>ps) This method need 250ms when change v-model data.</p>

        <pre><code><span class="tag">&lt;<span class="name">template</span>&gt;</span>
    <span class="tag">&lt;<span class="name">div</span> <span class="attr">class</span>=<span class="string">"editor-area"</span>&gt;</span>
        <span class="tag">&lt;<span class="name">DragonEditor</span> <span class="attr">v-model</span>=<span class="string">"contentData"</span> <span class="attr">ref</span>=<span class="string">"$editor"</span>/&gt;</span>
        <span class="tag">&lt;<span class="name">button</span> @<span class="attr">click</span>=<span class="string">"setData"</span>&gt;</span>set Data<span class="tag">&lt;/<span class="name">button</span>&gt;</span>
    <span class="tag">&lt;/<span class="name">div</span>&gt;</span>
<span class="tag">&lt;/<span class="name">template</span>&gt;</span>

<span class="tag">&lt;<span class="name">script</span> <span class="attr">setup</span> <span class="attr">lang</span>=<span class="string">"ts"</span>&gt;</span><span class="language-javascript">
    <span class="keyword">const</span> contentData = ref&lt;<span class="title class_">DEContentData</span>&gt;([]);
    <span class="keyword">const</span> $editor = ref&lt;<span class="title class_">DragonEditor</span>&gt;();

    <span class="keyword">function</span> <span class="title function_">setData</span>(<span class="params"></span>){
        $editor.<span class="property">value</span>.<span class="title function_">changeEditorData</span>([]); <span class="comment">// use DEContentData</span>
    }
</span><span class="tag">&lt;/<span class="name">script</span>&gt;</span></code></pre>

        <h2>
            addBlock <code>Function(value: <NuxtLink to="/type#DEBlockData" :use-hash="true">DEBlockData</NuxtLink>)</code>
        </h2>

        <p>This method adds blocks supported by the editor to the editor.</p>

        <pre><code><span class="tag">&lt;<span class="name">template</span>&gt;</span>
    <span class="tag">&lt;<span class="name">div</span> <span class="attr">class</span>=<span class="string">"editor-area"</span>&gt;</span>
        <span class="tag">&lt;<span class="name">DragonEditor</span> <span class="attr">v-model</span>=<span class="string">"contentData"</span> <span class="attr">ref</span>=<span class="string">"$editor"</span>/&gt;</span>
        <span class="tag">&lt;<span class="name">button</span> @<span class="attr">click</span>=<span class="string">"addBlock"</span>&gt;</span>add block<span class="tag">&lt;/<span class="name">button</span>&gt;</span>
    <span class="tag">&lt;/<span class="name">div</span>&gt;</span>
<span class="tag">&lt;/<span class="name">template</span>&gt;</span>

<span class="tag">&lt;<span class="name">script</span> <span class="attr">setup</span> <span class="attr">lang</span>=<span class="string">"ts"</span>&gt;</span><span class="language-javascript">
    <span class="keyword">const</span> contentData = ref&lt;<span class="title class_">DEContentData</span>&gt;([]);
    <span class="keyword">const</span> $editor = ref&lt;<span class="title class_">DragonEditor</span>&gt;();

    <span class="keyword">function</span> <span class="title function_">addBlock</span>(<span class="params"></span>){
        $editor.<span class="property">value</span>.<span class="title function_">addBlock</span>({
                <span class="attr">type</span>: <span class="string">"text"</span>,
                <span class="attr">classList</span>: [],
                <span class="attr">textContent</span>: <span class="string">""</span>
        });
    }
</span><span class="tag">&lt;/<span class="name">script</span>&gt;</span></code></pre>

        <h2>
            setDecoration <code>Function(value: <NuxtLink to="/type#DEDecoration" :use-hash="true">DEDecoration</NuxtLink>)</code>
        </h2>

        <p>This method set text node style.</p>

        <pre><code><span class="tag">&lt;<span class="name">template</span>&gt;</span>
    <span class="tag">&lt;<span class="name">div</span> <span class="attr">class</span>=<span class="string">"editor-area"</span>&gt;</span>
        <span class="tag">&lt;<span class="name">DragonEditor</span> <span class="attr">v-model</span>=<span class="string">"contentData"</span> <span class="attr">ref</span>=<span class="string">"$editor"</span>/&gt;</span>
        <span class="tag">&lt;<span class="name">button</span> @<span class="attr">click</span>=<span class="string">"setStyle"</span>&gt;</span>set style<span class="tag">&lt;/<span class="name">button</span>&gt;</span>
    <span class="tag">&lt;/<span class="name">div</span>&gt;</span>
<span class="tag">&lt;/<span class="name">template</span>&gt;</span>

<span class="tag">&lt;<span class="name">script</span> <span class="attr">setup</span> <span class="attr">lang</span>=<span class="string">"ts"</span>&gt;</span><span class="language-javascript">
    <span class="keyword">const</span> contentData = ref&lt;<span class="title class_">DEContentData</span>&gt;([]);
    <span class="keyword">const</span> $editor = ref&lt;<span class="title class_">DragonEditor</span>&gt;();

    <span class="keyword">function</span> <span class="title function_">setStyle</span>(<span class="params"></span>){
        $editor.<span class="property">value</span>.<span class="title function_">setDecoration</span>(<span class="string">"bold"</span>);
    }
</span><span class="tag">&lt;/<span class="name">script</span>&gt;</span></code></pre>

        <h2>
            setTextAlign <code>Function(value: <NuxtLink to="/type#DETextalign" :use-hash="true">DETextalign</NuxtLink>)</code>
        </h2>

        <p>This method set align style in editable element.</p>

        <pre><code><span class="tag">&lt;<span class="name">template</span>&gt;</span>
    <span class="tag">&lt;<span class="name">div</span> <span class="attr">class</span>=<span class="string">"editor-area"</span>&gt;</span>
        <span class="tag">&lt;<span class="name">DragonEditor</span> <span class="attr">v-model</span>=<span class="string">"contentData"</span> <span class="attr">ref</span>=<span class="string">"$editor"</span>/&gt;</span>
        <span class="tag">&lt;<span class="name">button</span> @<span class="attr">click</span>=<span class="string">"setAlign"</span>&gt;</span>set align<span class="tag">&lt;/<span class="name">button</span>&gt;</span>
    <span class="tag">&lt;/<span class="name">div</span>&gt;</span>
<span class="tag">&lt;/<span class="name">template</span>&gt;</span>

<span class="tag">&lt;<span class="name">script</span> <span class="attr">setup</span> <span class="attr">lang</span>=<span class="string">"ts"</span>&gt;</span><span class="language-javascript">
    <span class="keyword">const</span> contentData = ref&lt;<span class="title class_">DEContentData</span>&gt;([]);
    <span class="keyword">const</span> $editor = ref&lt;<span class="title class_">DragonEditor</span>&gt;();

    <span class="keyword">function</span> <span class="title function_">setAlign</span>(<span class="params"></span>){
        $editor.<span class="property">value</span>.<span class="title function_">setTextAlign</span>(<span class="string">"right"</span>);
    }
</span><span class="tag">&lt;/<span class="name">script</span>&gt;</span></code></pre>

        <h2>updateLayout <code>Function</code></h2>

        <p>This method update layout information. If you change page layout, use this method.</p>

        <pre><code><span class="tag">&lt;<span class="name">template</span>&gt;</span>
    <span class="tag">&lt;<span class="name">div</span> <span class="attr">class</span>=<span class="string">"editor-area"</span>&gt;</span>
        <span class="tag">&lt;<span class="name">DragonEditor</span> <span class="attr">v-model</span>=<span class="string">"contentData"</span> <span class="attr">ref</span>=<span class="string">"$editor"</span>/&gt;</span>
    <span class="tag">&lt;/<span class="name">div</span>&gt;</span>
<span class="tag">&lt;/<span class="name">template</span>&gt;</span>

<span class="tag">&lt;<span class="name">script</span> <span class="attr">setup</span> <span class="attr">lang</span>=<span class="string">"ts"</span>&gt;</span><span class="language-javascript">
    <span class="keyword">const</span> contentData = ref&lt;<span class="title class_">DEContentData</span>&gt;([]);
    <span class="keyword">const</span> $editor = ref&lt;<span class="title class_">DragonEditor</span>&gt;();

    <span class="keyword">onMounted</span>(()=>{
        $editor.<span class="property">value</span>.<span class="title function_">updateLayout</span>();
    })
</span><span class="tag">&lt;/<span class="name">script</span>&gt;</span></code></pre>

        <h2>checkDataEmpty <code>Function:boolean</code></h2>

        <p>This method is check to Editor data is empty.</p>

        <pre>
            <code><span class="tag">&lt;<span class="name">template</span>&gt;</span>
    <span class="tag">&lt;<span class="name">div</span> <span class="attr">class</span>=<span class="string">"editor-area"</span>&gt;</span>
        <span class="tag">&lt;<span class="name">DragonEditor</span> <span class="attr">v-model</span>=<span class="string">"contentData"</span> <span class="attr">ref</span>=<span class="string">"$editor"</span>/&gt;</span>
    <span class="tag">&lt;/<span class="name">div</span>&gt;</span>
<span class="tag">&lt;/<span class="name">template</span>&gt;</span>

<span class="tag">&lt;<span class="name">script</span> <span class="attr">setup</span> <span class="attr">lang</span>=<span class="string">"ts"</span>&gt;</span><span class="language-javascript">
    <span class="keyword">const</span> contentData = ref&lt;<span class="title class_">DEContentData</span>&gt;([]);
    <span class="keyword">const</span> $editor = ref&lt;<span class="title class_">DragonEditor</span>&gt;();

    <span class="keyword">function</span> <span class="title function_">submit</span>(<span class="params"></span>):<span class="keyword">void</span>{
        <span class="keyword">if</span>($editor.<span class="property">value</span>.<span class="title function_">checkDataEmpty</span>() === <span class="literal">false</span>){
            <span class="comment">// ...</span>
        }
    }
</span><span class="tag">&lt;/<span class="name">script</span>&gt;</span></code>
        </pre>
    </div>
</template>
