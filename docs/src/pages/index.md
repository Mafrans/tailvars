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

This adds all Tailvars modules to your stylesheet, if you wish to add specific modules, you can import them individually by targeting the appropriate .css files.

### Preflight

Tailvars optionally includes a copy of the [TailwindCSS Preflight styles](https://tailwindcss.com/docs/preflight), licensed under MIT. Preflight is a stylesheet built on top of modern-normalize which tries its best to remove as many styles as possible from the default web look and feel, which I find is useful for starting from a blank slate rather than having to fight the browser every step of the way. Include it by adding:

```css
@include "tailvars";
@include "tailvars/preflight";

...
```

to your global CSS file.

## Modules

### Colors

Tailvars includes the 28 TailwindCSS colors, described in OKLCH format. Each color exists in 12 shades: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900 and 950.

| **Color**                                                                      | **Name** | **Property**        |
| ------------------------------------------------------------------------------ | -------- | ------------------- |
|                                                                                |          |
| Black & White                                                                  |          |                     |
| <div class="swatch white"></div>                                               | White    | `--color-white`     |
| <div class="swatch black"></div>                                               | Black    | `--color-black`     |
|                                                                                |          |
| Rainbow                                                                        |          |
| <div class="swatch red"><hr><hr><hr><hr><hr><hr><hr><hr><hr><hr><hr></div>     | Red      | `--color-red-*`     |
| <div class="swatch orange"><hr><hr><hr><hr><hr><hr><hr><hr><hr><hr><hr></div>  | Orange   | `--color-orange-*`  |
| <div class="swatch amber"><hr><hr><hr><hr><hr><hr><hr><hr><hr><hr><hr></div>   | Amber    | `--color-amber-*`   |
| <div class="swatch yellow"><hr><hr><hr><hr><hr><hr><hr><hr><hr><hr><hr></div>  | Yellow   | `--color-yellow-*`  |
| <div class="swatch lime"><hr><hr><hr><hr><hr><hr><hr><hr><hr><hr><hr></div>    | Lime     | `--color-lime-*`    |
| <div class="swatch green"><hr><hr><hr><hr><hr><hr><hr><hr><hr><hr><hr></div>   | Green    | `--color-green-*`   |
| <div class="swatch emerald"><hr><hr><hr><hr><hr><hr><hr><hr><hr><hr><hr></div> | Emerald  | `--color-emerald-*` |
| <div class="swatch teal"><hr><hr><hr><hr><hr><hr><hr><hr><hr><hr><hr></div>    | Teal     | `--color-teal-*`    |
| <div class="swatch cyan"><hr><hr><hr><hr><hr><hr><hr><hr><hr><hr><hr></div>    | Cyan     | `--color-cyan-*`    |
| <div class="swatch sky"><hr><hr><hr><hr><hr><hr><hr><hr><hr><hr><hr></div>     | Sky      | `--color-sky-*`     |
| <div class="swatch blue"><hr><hr><hr><hr><hr><hr><hr><hr><hr><hr><hr></div>    | Blue     | `--color-blue-*`    |
| <div class="swatch indigo"><hr><hr><hr><hr><hr><hr><hr><hr><hr><hr><hr></div>  | Indigo   | `--color-indigo-*`  |
| <div class="swatch violet"><hr><hr><hr><hr><hr><hr><hr><hr><hr><hr><hr></div>  | Violet   | `--color-violet-*`  |
| <div class="swatch purple"><hr><hr><hr><hr><hr><hr><hr><hr><hr><hr><hr></div>  | Purple   | `--color-purple-*`  |
| <div class="swatch fuchsia"><hr><hr><hr><hr><hr><hr><hr><hr><hr><hr><hr></div> | Fuchsia  | `--color-fuchsia-*` |
| <div class="swatch pink"><hr><hr><hr><hr><hr><hr><hr><hr><hr><hr><hr></div>    | Pink     | `--color-pink-*`    |
| <div class="swatch rose"><hr><hr><hr><hr><hr><hr><hr><hr><hr><hr><hr></div>    | Rose     | `--color-rose-*`    |
|                                                                                |          |
| Grays                                                                          |          |
| <div class="swatch olive"><hr><hr><hr><hr><hr><hr><hr><hr><hr><hr><hr></div>   | Olive    | `--color-olive-*`   |
| <div class="swatch taupe"><hr><hr><hr><hr><hr><hr><hr><hr><hr><hr><hr></div>   | Taupe    | `--color-taupe-*`   |
| <div class="swatch stone"><hr><hr><hr><hr><hr><hr><hr><hr><hr><hr><hr></div>   | Stone    | `--color-stone-*`   |
| <div class="swatch neutral"><hr><hr><hr><hr><hr><hr><hr><hr><hr><hr><hr></div> | Neutral  | `--color-neutral-*` |
| <div class="swatch zinc"><hr><hr><hr><hr><hr><hr><hr><hr><hr><hr><hr></div>    | Zinc     | `--color-zinc-*`    |
| <div class="swatch gray"><hr><hr><hr><hr><hr><hr><hr><hr><hr><hr><hr></div>    | Gray     | `--color-gray-*`    |
| <div class="swatch slate"><hr><hr><hr><hr><hr><hr><hr><hr><hr><hr><hr></div>   | Slate    | `--color-slate-*`   |
| <div class="swatch mist"><hr><hr><hr><hr><hr><hr><hr><hr><hr><hr><hr></div>    | Mist     | `--color-mist-*`    |
| <div class="swatch mauve"><hr><hr><hr><hr><hr><hr><hr><hr><hr><hr><hr></div>   | Mauve    | `--color-mauve-*`   |

#### Opacity

Applying opacity to colors can be performed efficiently using the css `color-mix` function, and mixing your preferred color with transparent as such:

```css
.my-element {
  background-color: color-mix(
    var(--color-red-500) 20%,
    transparent
  ); /* Red 500 with 20% opacity */
}
```

_Note: Some previous builds of Tailvars use `--color-opacity` properties for opacity, this was removed in 1.4.0 for performance reasons._

###
