<template>
    <div class="section option-page">
        <h1>Option</h1>

        <h2>useMenuBar <code>Boolean</code></h2>

        <p>
            If you didn't want use default menu bar. You can set <code>useMenuBar</code> option.<br />
            Default : <code>true</code>
        </p>

        <pre><code><span class="tag">&lt;<span class="keyword">DragonEditor</span> <span class="attr">:useMenuBar</span>="<span class="string">false</span>" &#47;&gt;</span></code></pre>

        <h2>mediaHostURL <code>String</code></h2>

        <p>If you want set Image Host Server URL. Use this option.</p>

        <pre><code><span class="tag">&lt;<span class="keyword">DragonEditor</span> <span class="attr">:mediaHostURL</span>="<span class="string">your media url</span>" &#47;&gt;</span></code></pre>

        <h2>isMobile <code>Boolean</code></h2>

        <p>
            This value determines whether editor is mobile or not.<br />
            Default : <code>false</code>
        </p>

        <pre><code><span class="tag">&lt;<span class="keyword">DragonEditor</span> <span class="attr">:isMobile</span>="<span class="string">false</span>" &#47;&gt;</span></code></pre>

        <h2>theme <code>"dark" | "white"</code></h2>

        <p>
            This value determines editor UI theme.<br />
            Default : <code>"white"</code>
        </p>

        <pre><code><span class="tag">&lt;<span class="keyword">DragonEditor</span> <span class="attr">:theme</span>="<span class="string">"dark"</span>" &#47;&gt;</span></code></pre>

        <h2>codeBlockSpaces <code>Number</code></h2>

        <p>
            This value determines space size of codeblock.<br />
            Default : <code>4</code>
        </p>

        <pre><code><span class="tag">&lt;<span class="keyword">DragonEditor</span> <span class="attr">:codeBlockSpaces</span>="<span class="string">4</span>" &#47;&gt;</span></code></pre>

        <h2>acceptImageFormat <code>String</code></h2>

        <p>
            This value determines Image Format when user Upload Image.<br />
            Default : <code>".jpg,.jpeg,.png,.webp,.gif"</code>
        </p>

        <pre><code><span class="tag">&lt;<span class="keyword">DragonEditor</span> <span class="attr">:acceptImageFormat</span>="<span class="string">.jpg,.jpeg,.png,.webp,.gif</span>" &#47;&gt;</span></code></pre>

        <h2>anchorTagTarget <code>String</code></h2>

        <p>
            This value determines anchor tag target attribute.<br />
            Default : <code>"_blank"</code>
        </p>

        <pre><code><span class="tag">&lt;<span class="keyword">DragonEditor</span> <span class="attr">:anchorTagTarget</span>="<span class="string">_blank</span>" &#47;&gt;</span></code></pre>
    </div>
</template>
