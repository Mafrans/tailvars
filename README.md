# The tailvars property library

Tailvars is a CSS custom-property library inspired by the style system created for [tailwindcss](https://tailwindcss.com). It includes properties for most common use cases.

## Getting started

As the project consists simply of a `index.css` file, it can be installed and used from javascript or from a css file.

```js|main.ts
import "tailvars";

...
```

```css|globals.css
@import "tailvars";

...
```

The package is ~13kb gzipped, which is a relatively small size, but if you need to reduce the size further you can make use of the [postcss-jit-props](https://www.npmjs.com/package/postcss-jit-props/) postcss plugin to only import the props you need for your project.

## Documentation

To be continued...

## Known bugs

`--color-opacity` does not work as expected, and always falls back to 100%.
