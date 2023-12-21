# gen-svg-placeholder

svg 占位图直接生成供 img src 使用。

## Install

```bash
$ npm i gen-svg-placeholder --save
```

## Usage

```js
import genSvgUrl from "gen-svg-placeholder";

      <img src={genSvgUrl(200, 100)} />
      <img src={genSvgUrl(200, 100, "#fff", "#000")} />
      <br />
      <img src={genSvgUrl(400, 100, "#abcdef", "#fedcba")} />
```

![image](https://github.com/lecepin/gen-svg-placeholder/assets/11046969/93ba18f2-719f-479f-a491-6ede6989f6bb)


[Doc](https://lecepin.github.io/gen-svg-placeholder/build/)
