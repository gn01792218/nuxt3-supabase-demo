# 專案架構: Nuxt 3 + Supabase + pug + TailwindCss

Look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```
# pug 使用注意事項
## Unexpected token "indent"
解決方法就是不要在template中的根元素前面放tab
```html
<!-- 錯誤 -->
<template lang="pug">
    div
        AuthCard/
</template>
<!-- 正確 -->
<template lang="pug">
div
    AuthCard/
</template>
```
