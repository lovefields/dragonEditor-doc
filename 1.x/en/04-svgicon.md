---
layout: default
title:  "Icon - Dragone Editor Document"
text:  "Icon"
lang: "en"
const: "1.x"
---

# [Icon](#icon)

dragoneEditor is using `SVG` icon type and 64*64 size.<br>
Default pack is [svg file](https://raw.githubusercontent.com/lovefields/dragonEditor/main/assets/svg/pack.svg) in assets.

In the editor, call up the svg icon as follows:
```html
<svg class="editor-icon" viewbox="0 0 64 64">
    <use class="path" xlink:href="#icon-name" href="#icon-name"></use>
</svg>
```

## [edit/add](#edit/add)

If you want edit icon, you can edit `[code]` area.
`id` is icon name.
```html
<svg class="icon-pack">
    <defs>
        <g id="icon-name">
            [code]
        </g>
    </defs>
</g>
```