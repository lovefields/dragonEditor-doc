---
layout: default
title:  "Option - Dragone Editor Document"
text:  "Option"
lang: "en"
const: "1.0.3"
---

# [Option](#option)

## [articleIdx](#articleIdx)

`default : 0`

Set article index.<br>
This data is using in media upload.

## [articleTempIdx](#articleTempIdx)

`default : 0`

Set temp article index.<br>
This data is using in media upload.

## [multiLang](#multiLang)

`default : true`

Set use multiple languages.

## [defaultColor](#defaultColor)

`default : #333`

Set default color.

## [defaultFontSize](#defaultFontSize)

`default : 16`

Set default font size.

## [changePoint](#changePoint)

`default : 800`

Set a branch point to Mobile.

## [maxImageWidth](#maxImageWidth)

`default : 700`

Set max in image width.

## [maxCodepenHeight](#maxCodepenHeight)

`default : 800`

Set max in codepen iframe height.

## [useWebp](#useWebp)

`default : true`

Set using webp format.

## [codepenTheme](#codepenTheme)

`default : dark`

Set codepen default theme.

## [blockName](#blockName)

```json
{
    textBlock: "",
    imageBlock: "",
    ulBlock: "",
    olBlock: "",
    quotaionBlock: "",
    tableBlock: "",
    linkboxBlock: "",
    emoticonBlock: "",
    youtubeBlock: "",
    codepenBlock: "",
    codeBlock: "",
}
```

Set menu name.

## [removeMenu](#removeMenu)

```js
["textBlock","imageBlock","ulBlock","olBlock","quotaionBlock","tableBlock","linkboxBlock","emoticonBlock","youtubeBlock","codepenBlock","codeBlock"]
```

Remove menu.

## [frontSize](#frontSize)

```js
[12, 14, 16, 18, 20, 24, 28, 30, 34, 38] // default
```

List of font size in editor.


## [codeTheme](#codeTheme)

```js
["default", "vs2015", "androidstudio", "monokai"] // default
```

List of theme in codeblock.

## [codeLang](#codeLang)

```js
["text", "css", "html", "xml", "json", "java", "javascript", "markdown", "objective-c", "php", "python", "sql", "shell", "kotlin", "swift"] // default
```

List of language in codeblock.

## [colorList](#colorList)

```js
[
    "#fff",
    "#efefef",
    "#ccc",
    "#999",
    "#777",
    "#555",
    "#333",
    "#e6b8af",
    "#dd7e6b",
    "#cc4125",
    "#980000",
    "#a61c00",
    "#85200c",
    "#5b0f00",
    "#f4cccc",
    "#ea9999",
    "#e06666",
    "#ff0000",
    "#cc0000",
    "#990000",
    "#660000",
    "#fce5cd",
    "#f9cb9c",
    "#f6b36b",
    "#ff9900",
    "#e69138",
    "#b45f06",
    "#783f04",
    "#fff2cc",
    "#ffe599",
    "#ffd966",
    "#ffff00",
    "#f1c232",
    "#bf9000",
    "#7f6000",
    "#d9ead3",
    "#b6d7a8",
    "#93c47d",
    "#00ff00",
    "#6aa84f",
    "#38761d",
    "#274e13",
    "#d0e0e3",
    "#a2c4c9",
    "#76a5af",
    "#00ffff",
    "#45818e",
    "#134f5c",
    "#0c343d",
    "#c9daf8",
    "#a4c2f4",
    "#6d9eeb",
    "#4a87e8",
    "#3c78d8",
    "#1156cc",
    "#1c4587",
    "#cfe2f3",
    "#9fc5e8",
    "#6fa8dc",
    "#0000ff",
    "#3d85c6",
    "#0b5394",
    "#073763",
    "#d9d2e9",
    "#b4a7d6",
    "#8e7cc3",
    "#9900ff",
    "#674ea7",
    "#351c75",
    "#20124d",
    "#ead1dc",
    "#d5a6bd",
    "#c27ba0",
    "#ff00ff",
    "#a64d79",
    "#741b47",
    "#4c1130",
]
```

List of color in editor.

## [addMenu](#addMenu)

```js
addMenu: {
    testBlock : {
        text: String,
        icon: "#icon-id",
        fn : Function
    }
}
```

Add new menu.

## [addLang](#addLang)

```js
["es"] // ex
```

Add language.

## [triggerLangChange](#triggerLangChange)

`Function`

Sets the function that runs when the language changes in the editor.<br>
Returns `lang` as augment value.

## [multiUpload](#multiUpload)

`default : false`

Set multi upload.

## [defaultLinkBoxImage](#defaultLinkBoxImage)

`default : "https://via.placeholder.com/600x300.png"`

Set default image in linkbox.

## [linkBoxApi](#linkBoxApi)

`default : "https://api.allorigins.win/get"`

Set link box API.<br>
This request is using FormData and POST Method. And send URL data.<br>
Your server should return the following values.

```js
{
    request : Boolean
    data : {
        url : String
        img : String
        title : String
        description : String
        domain : String
    }
}
```

## [uploadURL](#uploadURL)

`String(URL)`

Set media upload URL.<br>
This requset is using post, delete, put Method, and send FormData.

> NOTE : If you didn't this option, Editor has disabled all media buttons.

### POST : upload

This method is used to upload media.<br>
Request data :

```js
{
    type : String["image"]
    articleIdx : Number
    articleTempIdx : Number
    file : Fiels
}
```

Response data :

```js
{
    respon : Boolean,
    list : [
        {
            hasWebp : Boolean,
            src : String(URL),
            defaultFormat : String,
            width : Number,
            height : Number,
            alt : String,
        }
    ]
}
```

### PUT : edit

Request data :

```js
{
    imageName : String
    imageIdx : Number
}
```

Response data :

```js
{
    respon : Boolean
}
```

### DELETE : delete

The URL you set will be followed by "/imageIdx".


## [lang](#lang)

`String`

Set default langauge.<br>
If there is no language inside the editor, it will be added and reflected.
