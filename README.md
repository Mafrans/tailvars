# The tailvars property library

Tailvars is a CSS custom-property library inspired by the style system created for [tailwindcss](https://tailwindcss.com). It includes properties for most common use cases.

## Breaking changes as of 1.4.0

`--color-opacity` options have been removed in 1.4.0 to address performance limitations. Please use `color-mix` as a native CSS alternative. For example:

```css
.my-component {
  background-color: color-mix(
    var(--color-red-500) 5%,
    transparent
  ); /* Red color at 5% transparency */
}
```

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

Documentation is available at [https://mafrans.github.io/tailvars](https://mafrans.github.io/tailvars).
