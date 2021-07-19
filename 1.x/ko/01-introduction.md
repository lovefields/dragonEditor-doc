---
layout: default
title:  "Intro - Dragone Editor Document"
text:  "Intro"
lang: "ko"
const: "1.x"
---

# [인트로](#인트로)

dragonEditor는 제가 필요해서 만든 WYSIWYG 에디터 입니다.<br>
팀블로그인 [Dico](https://dico.me) 에 에디터가 필요했고 그렇기에 만들었습니다.<br>
다양한 디자인을 수용할 수 있어야 했고, 커스텀이 가능해야 했기에 그에 응하는 기능을 넣었습니다.

## [사용법](#사용법)

dragonEditor는 다음과 같이 사용이 가능합니다.


### [에디터 페이지](#에디터-페이지)

우선 로드해야할 리소스들입니다.

```html
<!-- 
* 코드블럭을 사용한다면 구글 폰트(Inconsolata)를 불러오세요.
* dragonEditor CSS
-->
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;700&amp;display=swap">
<link rel="stylesheet" href="[yourdir]/dragonEditor.css">

<!-- 
* 에디터에서 제공하는 기본아이콘 팩을 기제해주어야 합니다.
* 기본 아이콘 팩은 assets에 있습니다.
-->
<svg class="icon-pack">
    <defs>
        <g id="icon-id">...</g>
        ...
    </defs>
</svg>

<!--
* 기본적으로 전체화면 모드입니다.
* 레이아웃 변경은 옵션을 확인하세요.
-->
<div class="editor-dragon"></div>

<!-- 
* 코드블럭을 사용한다면 highlight 플러그인을 불러와 주세요.
-->
<script src="[yourdir]/highlight.pack.js"></script>
<script src="[yourdir]/dragonEditor.js"></script>
```

위와같이 HTML에서 구성을 하였다면 준비는 완료되었습니다.<br>
이제 스크립트에서 아래와 같이 입력해 주세요.

```js
const editor = new DragonEditor();
```

### [뷰 페이지](#뷰-페이지)

뷰어는 css파일을 불러온 후 `editor-dragon-viewer` 클레스 안에 코드를 삽입하세요.<br>
josn을 html로 변환 하는 코드는 [view-convertor](https://github.com/lovefields/dragonEditor/tree/main/assets/view-convertor) 를 확인해주세요.

```html
<!-- 
* 코드블럭을 사용한다면 구글 폰트(Inconsolata)를 불러오세요.
* dragonEditorViewer CSS
* [code] 는 'view-convertor'를 실행해 얻은 코드입니다.
-->
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;700&amp;display=swap">
<link rel="stylesheet" href="[yourdir]/dragonEditorViewer.css">

<div class="editor-dragon-viewer">[code]</div>
```