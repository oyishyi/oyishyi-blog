# 实验 mark-down 代码块效果

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
