# native-popover
No dependencies, basic vanilla js enhancement for [browser popover API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API). 


- [Installation](#installation)
- [Configuration](#configuration)
- [Example](#example)

## Installation
```
npm install native-popover --save
```

## Configuration
Library provides additional features such as:
- reacting to window resize
- selecting popover placement
- calculating position of popover in relation to trigger element placement

Except standard attributes from native API (such us [popover](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/popover)), trigger element can accept `data-position` attribute.
Available values: 
`bottom, bottom-right, bottom-left, top, top-left, top-right, left, right`.


## Example
```html
<body>
    <button popovertarget="mypopover" data-position="bottom-right">OPEN POPOVER</button>
    <div id="mypopover" popover>
        POPOVER BODY
    </div>
</body>
```

```js
import init as nativePopoverInit from "native-popover";
window.addEventListener("DOMContentLoaded", nativePopoverInit);
```
