---
layout: default
title:  "Option - Dragone Editor Document"
text:  "Option"
lang: "ko"
const: "1.x"
---

# [옵션](#옵션)

## [articleIdx](#articleIdx)

`default : 0`

게시글의 인덱스를 설정합니다.<br>
미디어를 업로드할때 정보가 같이 전송됩니다.

## [articleTempIdx](#articleTempIdx)

`default : 0`

임시 게시글의 인덱스를 설정합니다.<br>
미디어를 업로드할때 정보가 같이 전송됩니다.

## [multiLang](#multiLang)

`default : true`

다국어를 사용할 지 결정합니다.

## [defaultColor](#defaultColor)

`default : #333`

기본 색상을 설정합니다.

## [defaultFontSize](#defaultFontSize)

`default : 16`

기본 폰트 사이즈를 설정합니다.

## [changePoint](#changePoint)

`default : 800`

모바일로가는 분기점을 설정합니다.

## [maxImageWidth](#maxImageWidth)

`default : 700`

이미지의 최대 가로 사이즈를 설정합니다.

## [maxCodepenHeight](#maxCodepenHeight)

`default : 800`

코드펜 프레임의 최대 높이를 설정합니다.

## [useWebp](#useWebp)

`default : true`

이미지 포멧중 webp 포멧을 사용할지 설정합니다.

## [codepenTheme](#codepenTheme)

`default : dark`

코드팬의 기본 테마를 설정합니다.

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

메뉴의 이름을 지정합니다.

## [removeMenu](#removeMenu)

```js
["textBlock","imageBlock","ulBlock","olBlock","quotaionBlock","tableBlock","linkboxBlock","emoticonBlock","youtubeBlock","codepenBlock","codeBlock"]
```

사용하지 않을 메뉴를 삭제합니다.

## [frontSize](#frontSize)

`em` 단위를 사용합니다.

```js
[0.75, 0.9, 1, 1.15, 1.25, 1.5, 1.75, 1.9, 2, 2.15, 2.25] // default
```

에디터에서 사용할 폰트 사이즈 리슽트입니다.


## [codeTheme](#codeTheme)

```js
["default", "vs2015", "androidstudio", "monokai"] // default
```

코드블럭에서 사용할 테마 리스트입니다.

## [codeLang](#codeLang)

```js
["text", "css", "html", "xml", "json", "java", "javascript", "markdown", "objective-c", "php", "python", "sql", "shell", "kotlin", "swift"] // default
```

코드블럭에서 사용할 언어 리스트입니다.

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

에디터에서 사용하는 컬러 리스트입니다.

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

새로운 메뉴를 추가합니다.

## [addLang](#addLang)

```js
["es"]
```

에디터에 사용할 다국어를 추가합니다.

## [triggerLangChange](#triggerLangChange)

`Function`

에디터에서 언어가 변경될때 실행되는 함수를 설정합니다.<br>
인자값으로 `lang`을 반환합니다.

## [multiUpload](#multiUpload)

`default : false`

다중업로드 지원 유무를 설정합니다.

## [defaultLinkBoxImage](#defaultLinkBoxImage)

`default : "https://via.placeholder.com/600x300.png"`

링크박스의 기본 이미지를 설정합니다.

## [linkBoxApi](#linkBoxApi)

`default : "https://api.allorigins.win/get"`

링크박스 정보를 가져올 url을 설정합니다.<br>
FormData 형식으로 보내며 Method는 POST로 url 을 전송합니다.<br>
반환 해야할 데이터는 다음과 같습니다.

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

## [csrfData](#csrfData)

업로드 되는 이미지,파일 을 위해 검증된 토큰 정보를 부여합니다.

```js
{
    name : "", // key
    value: "", // value
}
```

## [uploadURL](#uploadURL)

`String(URL)`

미디어를 업로드 할 URL을 지정합니다.<br>
method로 post, delete, put 을 사용하며 기본적으로 formData 형식으로 넘어갑니다.

> NOTE : 이 속성이 없을 경우 media 항목이 전부 비활성화 됩니다.

### POST : upload

미디어를 업로드 할때 사용하는 메서드 이며 다음과 같은 정보를 전송합니다.

```js
{
    type : String["image"]
    articleIdx : Number
    articleTempIdx : Number
    file : Fiels
}
```

서버에서 전송해야할 데이터 :

```js
{
    response : Boolean,
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

업로드된 미디어의 정보를 수정할때 발생합니다.

```js
{
    imageName : String
    imageIdx : Number
}
```

서버에서 전송해야할 데이터 :

```js
{
    respon : Boolean
}
```

### DELETE : delete

업로드된 미디어를 삭제 할때 발생합니다.
delete 메서드로 설정한 URL 뒤에 "/imageIdx" 가 붙습니다.


## [lang](#lang)

`String`

기본 언어를 지정합니다.<br>
에디터 내부에 해당 언어가 없을 경우 추가해서 반영합니다.
