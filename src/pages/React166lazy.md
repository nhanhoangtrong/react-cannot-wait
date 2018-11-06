React.lazy will help us build code-splitting in client side by automatically load the imported bundle when it needs to be rendered.

```js
const LazySyntaxHighlighter = require('../components/LazySyntaxHighlighter').default;

<div>
    <LazySyntaxHighlighter />
</div>
```
