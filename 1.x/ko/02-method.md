---
layout: default
title: "Method - Dragone Editor Document"
text: "Method"
lang: "ko"
const: "1.x"
---

# [메서드](#메서드)

dragonEditor에서 제공하는 메서드입니다.<br>
기본적으로 다음과 같은 선언이 되어있음을 가정합니다.

```js
const editor = new dragonEditor();
```

## [setEmoticon](#setEmoticon)

에디터에서 사용할 이모티콘을 삽입합니다.<br>
배열을 기본으로 다음과 같이 정보를 입력해야 합니다.

```js
editor.setEmoticon([
    {
        type: "image",
        value: String(URL),
        caption: String,
    },
    {
        type: "svg",
        value: String(HTML),
        caption: String,
    },
]);
```

## [setMedia](#setMedia)

에디터에서 사용할 미디어를 삽입합니다.<br>
배열을 기본으로 다음과 같이 정보를 입력해야 합니다.

```js
editor.setMedia([
    {
        type: "image",
        src: String(URL),
        webp: Boolean,
        width: Number,
        height: Number,
        defaultFormat: String,
        alt: String,
        idx: Number,
    },
]);
```

## [getContentData](#getContentData)

에디터의 현재 데이터를 반환합니다.<br>
데이터 형태는 [dataSample.json](https://github.com/lovefields/dragonEditor/blob/main/work-area/dataSample.json)을 참조 바랍니다.

## [setContentData](#setContentData)

에디터의 데이터를부여합니다.<br>
데이터 형태는 [dataSample.json](https://github.com/lovefields/dragonEditor/blob/main/work-area/dataSample.json)을 참조 바랍니다.

## [addItem](#addItem)

에디터 내에서 현재 선택된 블럭 다음에 블럭을 추가합니다.

```js
editor.addItem(String(HTML));
```

## [getStatus](#getStatus)

에디터의 상태를 반환합니다.<br>
항목은 [옵션](/dragonEditor-doc/1.0.1/ko/option)을 참고하세요.
