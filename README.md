# kickoff-mpflow

```shell
# 默认，创建小程序项目
pnpx @mpflow/cli create hello-mp --template miniprogram
# 创建小程序插件项目
pnpx @mpflow/cli create hello-plugin --template miniprogram-plugin
# 创建小程序组件库项目
pnpx @mpflow/cli create hello-comps --template miniprogram-components
```

# kickoff-vitepress

```shell
pnpx degit github.com/unjs my-package
cd my-package
pnpm add -D vitepress
pnpm exec vitepress init
# If you intend to perform customization that uses Vue components or APIs, 
# you should also explicitly install vue as a peer dependency.

.
├─ docs
│  ├─ .vitepress
│  │  └─ config.js
│  ├─ api-examples.md
│  ├─ markdown-examples.md
│  └─ index.md
└─ package.json
```

```js
// .vitepress/config.js
export default {
  // site-level options
  title: 'VitePress',
  description: 'Just playing around.',

  themeConfig: {
    // theme-level options
  }
}
```

```json
{
  ...
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:preview": "vitepress preview docs"
  },
  ...
}
```

```shell
pnpm run docs:dev
# or
pnpm exec vitepress dev docs
```