---
layout: default
title:  "Icon - Dragone Editor Document"
text:  "Icon"
lang: "ko"
const: "1.0.3"
---

# [아이콘](#아이콘)

에디터에서 기본 제공하는 아이콘 형식은 `SVG`이며 사이즈는 64*64입니다.<br>
기본 아이콘 팩은 assets에 있는 [svg](https://raw.githubusercontent.com/lovefields/dragonEditor/main/assets/svg/pack.svg) 파일에서 확인하실 수 있습니다.

에디터 내에서는 다음과 같이 svg 아이콘을 불러옵니다.
```html
<svg class="editor-icon" viewbox="0 0 64 64">
    <use class="path" xlink:href="#icon-name" href="#icon-name"></use>
</svg>
```

## [수정](#수정)

아이콘을 수정하고 싶다면 `[code]`부분을 수정해주시면 됩니다.
```html
<svg class="icon-pack">
    <defs>
        <g id="icon-name">
            [code]
        </g>
    </defs>
</g>
```