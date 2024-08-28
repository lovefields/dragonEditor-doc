<template>
    <div class="section option-page">
        <h1>Option</h1>

        <h2>useMenuBar</h2>

        <p>
            If you didn't want use default menu bar. You can set <code>useMenuBar</code> option.<br />
            Default value is <code>true</code>
        </p>

        <pre><code><span class="tag">&lt;<span class="name">template</span>&gt;</span>
    <span class="tag">&lt;<span class="name">div</span> <span class="attr">class</span>=<span class="string">"editor-area"</span>&gt;</span>
        <span class="tag">&lt;<span class="keyword">ClientOnly</span>&gt;</span>
            <span class="tag">&lt;<span class="keyword">DragonEditor</span> <span class="attr">:useMenuBar</span>="<span class="string">false</span>" <span class="attr">ref</span>=<span class="string">"$editor"</span> &#47;&gt;</span>
        <span class="tag">&lt;&#47;<span class="keyword">ClientOnly</span>&gt;</span>
    <span class="tag">&lt;&#47;<span class="name">div</span>&gt;</span>
<span class="tag">&lt;&#47;<span class="name">template</span>&gt;</span>

<span class="tag">&lt;<span class="name">script</span> <span class="attr">setup</span> <span class="attr">lang</span>=<span class="string">"ts"</span>&gt;</span><span class="language-javascript">
    <span class="keyword">const</span> $editor = <span class="symbol">ref</span>&lt;<span class="keyword">DragonEditor</span>&gt;();
</span><span class="tag">&lt;&#47;<span class="name">script</span>&gt;</span></code></pre>
    </div>
</template>
