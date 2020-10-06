---
layout: default
title:  "Intro - Dragone Editor Document"
text:  "Intro"
lang: "en"
const: "1.0.3"
---

# [Intro](#intro)

dragonEditor is WYSIWYG editor that I made it because I needed it<br>
I neede an editor for my team blog [Dico](https://dico.me), So i made it.<br>
I want this editor can accommodate a variety of designs. And can custom. So i add it.

## [Using](#using)

dragonEditor is available as follows.


### [Editor page](#editor-page)

First, load resource.

```html
<!-- 
* Load Google font(Inconsolata) if you using code block.
* Load DragonEditor CSS
-->
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;700&amp;display=swap">
<link rel="stylesheet" href="[yourdir]/dragonEditor.css">

<!-- 
* You must set svg icon pack. Default pack is in assets.
-->
<svg class="icon-pack">
    <defs>
        <g id="icon-id">...</g>
        ...
    </defs>
</svg>
<div class="editor-dragon"></div>

<!-- 
* Load highlight plugin if you using code block.
* Load dragonEditor js
-->
<script src="[yourdir]/highlight.pack.js"></script>
<script src="[yourdir]/dragonEditor.js"></script>
```

And next step is using Javascript.

```js
const editor = new dragonEditor();
// OR
const editor = new dragonEditor("selector", {
    key: "value",
});
```

### [View page](#view-page)

Load viewer css and put in the code to class `editor-dragon-viewer`.<br>
Also you can check convertor [view-convertor](https://github.com/lovefields/dragonEditor/tree/main/assets/view-convertor) folder.

```html
<!-- 
* Load Google font(Inconsolata) if you using code block.
* Load DragonEditorViewer CSS
-->
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;700&amp;display=swap">
<link rel="stylesheet" href="[yourdir]/dragonEditorViewer.css">

<div class="editor-dragon-viewer">[code]</div>
```