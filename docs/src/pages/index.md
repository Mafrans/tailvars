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

_Note: Some early builds of Tailvars use `--color-opacity` properties for opacity, this was removed in 1.4.0 for performance reasons._

### Typography

Tailvars defines two separate typographic scales using the same set of 6 sizes, this system is intended to apply a clear separation between heading text (larger, usually a more complex font) and body text (must be readable at small sizes).

#### Headings

| Property           | Preview                                                  |
| ------------------ | -------------------------------------------------------- |
| --font-heading-xs  | <p style="font: var(--font-heading-xs)">Heading XS</p>   |
| --font-heading-sm  | <p style="font: var(--font-heading-sm)">Heading SM</p>   |
| --font-heading-md  | <p style="font: var(--font-heading-md)">Heading MD</p>   |
| --font-heading-lg  | <p style="font: var(--font-heading-lg)">Heading LG</p>   |
| --font-heading-xl  | <p style="font: var(--font-heading-xl)">Heading XL</p>   |
| --font-heading-2xl | <p style="font: var(--font-heading-2xl)">Heading 2XL</p> |

#### Body

| Property        | Preview                                            |
| --------------- | -------------------------------------------------- |
| --font-body-xs  | <p style="font: var(--font-body-xs)">Body XS</p>   |
| --font-body-sm  | <p style="font: var(--font-body-sm)">Body SM</p>   |
| --font-body-md  | <p style="font: var(--font-body-md)">Body MD</p>   |
| --font-body-lg  | <p style="font: var(--font-body-lg)">Body LG</p>   |
| --font-body-xl  | <p style="font: var(--font-body-xl)">Body XL</p>   |
| --font-body-2xl | <p style="font: var(--font-body-2xl)">Body 2XL</p> |

#### Fluid typography

There are also typographic variants which scale based on your display width, these are available as `--font-heading-fluid-*` and `--font-body-fluid-*`.

#### Switching fonts

The fonts used by Tailvars' typography presets can be switched out by setting the `--font-heading` or `--font-body` property in the CSS `:root`. Note that because presets are defined on the document's `body`-tag, these overrides will only be respected when applied to the `:root` psuedo-class. Tailvars also provides fallback font properties in the form of `--font-sans`, `--font-serif` and `--font-mono`; it is recommended to include these in your font overrides.

```css
:root {
  --font-heading: "IBM Plex Serif", var(--font-serif);
}
```

#### Size overrides

While not recommended, it is possible to override the sizes of each typography preset by setting the `--font-size-*` and `--font-size-fluid-*` group of properties.

| Property              | Size                                         | Used by                                        |
| --------------------- | -------------------------------------------- | ---------------------------------------------- |
| --font-size-xs        | 0.75rem                                      | --font-body-xs                                 |
| --font-size-sm        | 0.875rem                                     | --font-body-sm                                 |
| --font-size-md        | 1rem                                         | --font-body-md, --font-heading-xs              |
| --font-size-lg        | 1.25rem                                      | --font-body-lg, --font-heading-sm              |
| --font-size-xl        | 1.5rem                                       | --font-body-xl, --font-heading-md              |
| --font-size-2xl       | 2rem                                         | --font-body-2xl, --font-heading-lg             |
| --font-size-3xl       | 3rem                                         | --font-heading-xl                              |
| --font-size-4xl       | 5rem                                         | --font-heading-2xl                             |
| --font-size-fluid-xs  | clamp(0.625rem, 0.582rem + 0.217vw, 0.75rem) | --font-body-fluid-xs                           |
| --font-size-fluid-sm  | clamp(0.75rem, 0.707rem + 0.217vw, 0.875rem) | --font-body-fluid-sm                           |
| --font-size-fluid-md  | clamp(0.875rem, 0.832rem + 0.217vw, 1rem)    | --font-body-fluid-md, --font-heading-fluid-xs  |
| --font-size-fluid-lg  | clamp(1rem, 0.957rem + 0.217vw, 1.125rem)    | --font-body-fluid-lg, --font-heading-fluid-sm  |
| --font-size-fluid-xl  | clamp(1.125rem, 0.995rem + 0.652vw, 1.5rem)  | --font-body-fluid-xl, --font-heading-fluid-md  |
| --font-size-fluid-2xl | clamp(1.25rem, 0.989rem + 1.304vw, 2rem)     | --font-body-fluid-2xl, --font-heading-fluid-lg |
| --font-size-fluid-3xl | clamp(1.5rem, 0.978rem + 2.609vw, 3rem)      | --font-heading-fluid-xl                        |
| --font-size-fluid-4xl | clamp(2rem, 0.957rem + 5.217vw, 5rem)        | --font-heading-fluid-2xl                       |

#### Weight overrides

It is possible to override the weight of heading and body text separately using the `--font-heading-weight` and `--font-body-weight`, but not currently for individual sizes.

### Sizes

Tailvars follows the same 4px sizing grid that TailwindCSS uses, with the caveat that it does not include any fractional sizes. While we suggest that you avoid sizes smaller than 4px, you can always extend the system by writing your own sizing variables, like `--size-0_5: 2px;` or `--size-1_5: 6px`

The available sizes are:

<div class="sizes">
    <div class="items">
        <div data-size="0" data-px="0" style="--size:var(--size-0);"></div>
        <div data-size="1" data-px="4" style="--size:var(--size-1);"></div>
        <div data-size="2" data-px="8" style="--size:var(--size-2);"></div>
        <div data-size="3" data-px="12" style="--size:var(--size-3);"></div>
        <div data-size="4" data-px="16" style="--size:var(--size-4);"></div>
        <div data-size="5" data-px="20" style="--size:var(--size-5);"></div>
        <div data-size="6" data-px="24" style="--size:var(--size-6);"></div>
        <div data-size="7" data-px="28" style="--size:var(--size-7);"></div>
        <div data-size="8" data-px="32" style="--size:var(--size-8);"></div>
        <div data-size="9" data-px="36" style="--size:var(--size-9);"></div>
        <div data-size="10" data-px="40" style="--size:var(--size-10);"></div>
        <div data-size="11" data-px="44" style="--size:var(--size-11);"></div>
        <div data-size="12" data-px="48" style="--size:var(--size-12);"></div>
        <div data-size="14" data-px="56" style="--size:var(--size-14);"></div>
        <div data-size="16" data-px="64" style="--size:var(--size-16);"></div>
        <div data-size="18" data-px="72" style="--size:var(--size-18);"></div>
        <div data-size="20" data-px="80" style="--size:var(--size-20);"></div>
        <div data-size="22" data-px="88" style="--size:var(--size-22);"></div>
        <div data-size="24" data-px="96" style="--size:var(--size-24);"></div>
        <div data-size="28" data-px="112" style="--size:var(--size-28);"></div>
        <div data-size="32" data-px="128" style="--size:var(--size-32);"></div>
        <div data-size="36" data-px="144" style="--size:var(--size-36);"></div>
        <div data-size="40" data-px="160" style="--size:var(--size-40);"></div>
        <div data-size="44" data-px="176" style="--size:var(--size-44);"></div>
        <div data-size="48" data-px="192" style="--size:var(--size-48);"></div>
        <div data-size="52" data-px="208" style="--size:var(--size-52);"></div>
        <div data-size="56" data-px="224" style="--size:var(--size-56);"></div>
        <div data-size="60" data-px="240" style="--size:var(--size-60);"></div>
        <div data-size="64" data-px="256" style="--size:var(--size-64);"></div>
        <div data-size="68" data-px="272" style="--size:var(--size-68);"></div>
        <div data-size="72" data-px="288" style="--size:var(--size-72);"></div>
        <div data-size="76" data-px="304" style="--size:var(--size-76);"></div>
        <div data-size="80" data-px="320" style="--size:var(--size-80);"></div>
        <div data-size="84" data-px="336" style="--size:var(--size-84);"></div>
        <div data-size="88" data-px="352" style="--size:var(--size-88);"></div>
        <div data-size="92" data-px="368" style="--size:var(--size-92);"></div>
        <div data-size="96" data-px="384" style="--size:var(--size-96);"></div>
        <div data-size="100" data-px="400" style="--size:var(--size-100);"></div>
        <div data-size="104" data-px="416" style="--size:var(--size-104);"></div>
        <div data-size="108" data-px="432" style="--size:var(--size-108);"></div>
        <div data-size="112" data-px="448" style="--size:var(--size-112);"></div>
        <div data-size="116" data-px="464" style="--size:var(--size-116);"></div>
        <div data-size="120" data-px="480" style="--size:var(--size-120);"></div>
        <div data-size="124" data-px="496" style="--size:var(--size-124);"></div>
        <div data-size="128" data-px="512" style="--size:var(--size-128);"></div>
    </div>
</div>
