# h1
## h2
### h3
#### h4
##### h5
###### h6



```jsx
// mark-down 代码高亮
SyntaxHighlighter.registerLanguage("javascript", javascript);
SyntaxHighlighter.registerLanguage("css", css);
SyntaxHighlighter.registerLanguage("jsx", jsx);
SyntaxHighlighter.registerLanguage("python", python);
SyntaxHighlighter.registerLanguage("java", java);
const renderers = {
  code: ({ language, value }) => {
    return (
      <SyntaxHighlighter
        style={codeStyle}
        language={language}
        children={value}
        showLineNumbers={true}
        wrapLongLines={true}
      />
    );
  },
};
```
