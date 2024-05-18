# native-popover
Basic js enhancement for browser popover API


# usage example
```html
<body>
    <button popovertarget="mypopover">OPEN POPOVER</button>
    <div id="mypopover" popover>
        POPOVER BODY
    </div>
</body>
```

```js
    import init as nativePopoverInit from "native-popover";
    window.addEventListener("DOMContentLoaded", nativePopoverInit);
```
