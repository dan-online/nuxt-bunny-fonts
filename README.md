<!--
Get your module up and running quickly.

Find and replace all on all files (CMD+SHIFT+F):
- Name: Nuxt Bunny Fonts
- Package name: nuxt-bunny-fonts
- Description: Bunny Fonts for Nuxt 3
-->

# Nuxt Bunny Fonts

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]

> Bunny Fonts for Nuxt 3

Check out all the fonts you can use at [Bunny Fonts](https://fonts.bunny.net/)

## Features

<!-- Highlight some of the features your module provide here -->
- Easily use Bunny Fonts
- Automatically injects the Bunny Fonts stylesheet
- Allows for infinite fonts


## Quick Setup

1. Add `nuxt-bunny-fonts` dependency to your project

```bash
# Using yarn
yarn add --dev nuxt-bunny-fonts

# Using pnpm
pnpm add -D nuxt-bunny-fonts

# Using npm
npm install --save-dev nuxt-bunny-fonts
```

2. Add `nuxt-bunny-fonts` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    'nuxt-bunny-fonts'
  ],
  bunnyFonts: {
    families: {
      Montserrat: [300, 400, 700],
    }
  }
})
```

That's it! You can now use Nuxt Bunny Fonts in your Nuxt app ✨

## Migrate

Migrating from google-fonts to bunny-fonts is easy:

1. Remove `@nuxtjs/google-fonts` from your `modules` section of `nuxt.config.ts`
2. Add `nuxt-bunny-fonts` to your `modules` section of `nuxt.config.ts`
3. Change the `googleFonts` property to `bunnyFonts` in your `nuxt.config.ts`

```diff
export default defineNuxtConfig({
  modules: [
-  '@nuxtjs/google-fonts',
+  'nuxt-bunny-fonts'
  ],
- googleFonts: {
+ bunnyFonts: {
    families: {
      Montserrat: [300, 400, 700],
    }
  }
})
```

## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-bunny-fonts/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/nuxt-bunny-fonts

[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-bunny-fonts.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/nuxt-bunny-fonts

[license-src]: https://img.shields.io/npm/l/nuxt-bunny-fonts.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/nuxt-bunny-fonts
