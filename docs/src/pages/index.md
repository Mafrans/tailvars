---
layout: ../layouts/markdown.astro
---

# Tailvars CSS

This site is still under development, but since tailvars has a lot of variables that aren't immediately obvious to the user I've decided put together a simple markdown copy to get you started. There will not be any interactive examples in this documentation.

## Why?

[TailwindCSS](https://tailwindcss.com) is a great tool for a token-based workflow which limits your selection of sizings, headings, colors and such to a smaller subset of values that work well together. I quite like this approach, but found that it quickly becomes clumsy in the form of classes. It appears that the Tailwind creators had the same realization, as they quickly introduced the `@apply` macro, allowing developers to include Tailwind-tokens into CSS files and thereby group styles together into classes. Tailvars takes a different approach to the same solution, instead of introducing new syntax depending on [PostCSS](https://postcss.org)-plugins and bundlers Tailvars uses [CSS custom-properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/--*) and the `var()` function, which is supported in every major browser. While this isn't quite as extensible as Tailwind, I've found it serves as a decent alternative for those who prefer not working with utility-classes.

## Who is this for?

Tailvars is for frontend developers who are confident in their design skills or are working against an existing design built in Sketch, Figma or Penpot. Tailvars is _NOT_ intended as a "safe default" for inexperienced designers, and it is still quite easy to screw up a website's look using it as it is with regular CSS.

## Getting started

To get started with Tailvars, install the `tailvars` NPM package:

```
npm install tailvars
```

then `@include` tailvars in your global CSS file:

```css
@include "tailvars";

...
```

### Preflight

Tailvars optionally includes a copy of the [TailwindCSS Preflight styles](https://tailwindcss.com/docs/preflight), licensed under MIT. Preflight is a stylesheet built on top of modern-normalize which tries its best to remove as many styles as possible from the default web look and feel, which I find is useful for starting from a blank slate rather than having to fight the browser every step of the way. Include it by adding:

```css
@include "tailvars";
@include "tailvars/preflight";

...
```

to your global CSS file.
