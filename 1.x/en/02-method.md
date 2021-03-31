---
layout: default
title: "Method - Dragone Editor Document"
text: "Method"
lang: "en"
const: "1.x"
---

# [Method](#method)

This method is provided by dragonEditor.<br>
By default, assume the following declaration:

```js
const editor = new dragonEditor();
```

## [setEmoticon](#setEmoticon)

Add emoticon in editor.<br>
By default, you must enter the following information:

```js
editor.setEmoticon({
        groupName01: {
            icon : String<HTML>,
            list: [
                {
                    type: "svg",
                    code: String<HTML>,
                }
            ]
        },
        groupName02: {
            icon: String<HTML>,
            list: [
                {
                    type: "image",
                    src: String<URL>,
                    width: Number,
                    height: Number,
                    caption: String,
                }
            ]
        }
});
```

## [setMedia](#setMedia)

Add media in editor.<br>
By default, you must enter the following information:

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
        fileIdx: Number,
    },
]);
```

## [getContentData](#getContentData)

Return editor data.<br>
You can check data structure in [dataSample.json](https://github.com/lovefields/dragonEditor/blob/main/src/dataSample.json).

## [setContentData](#setContentData)

Set editor data.<br>
You can check data structure in [dataSample.json](https://github.com/lovefields/dragonEditor/blob/main/src/dataSample.json).

## [addItem](#addItem)

Add block after in selected block.

```js
editor.addItem(String(HTML));
```

## [getStatus](#getStatus)

Return editor status.<br>
You can check list in [Option](/dragonEditor-doc/1.0.1/en/option).
