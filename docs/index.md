---
sidebar_label: 首页
sidebar_position: 0
---

import Readme from '../README.md';

<Readme />

```jsx preview
import * as React from "react";
import genSvgUrl from "gen-svg-placeholder";

const svgUrl = genSvgUrl(200, 100);

export default () => {
  return (
    <>
      <img src={svgUrl} />
      <img src={genSvgUrl(200, 100, "#fff", "#000")} />
      <br />
      <img src={genSvgUrl(400, 100, "#abcdef", "#fedcba")} />
    </>
  );
};
```
