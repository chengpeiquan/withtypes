# @withtypes/markdown-it

Markdown-It with types.

Merged [markdown-it](https://www.npmjs.com/package/markdown-it) and [@types/markdown-it](https://www.npmjs.com/package/@types/markdown-it) , install this package to get both, no other features.

## Why?

I got tired of having to install an additional `@types/**` package every time in my TypeScript project to support type inference for these utilities.

So I merged them, but in fact, after installing this package, the original package will still be installed implicitly, and all functions are provided by the original package.

## Installation

Install the package from npm (or yarn, or pnpm).

```bash
# Just install this package
npm i @withtypes/markdown-it
```

This replaces the original problem of needing to install twice:

```bash
# No need to install this now
npm i markdown-it
npm i -D @types/markdown-it
```

## Usage

This package does not have its own function implementation, Just replace the package name in the `import` statement.

```diff
-import MarkdownIt from 'markdown-it'
+import MarkdownIt from '@withtypes/markdown-it'
```

So it is exactly the same APIs as the original package in use.

```ts
import MarkdownIt from '@withtypes/markdown-it'

const md = new MarkdownIt()
const html = md.render('# Hello World')
console.log(html)
// <h1>Hello World</h1>
```

## Documentation

See: [Documentation of Markdown-It](https://github.com/markdown-it/markdown-it#readme)

## License

MIT License © 2022 [chengpeiquan](https://github.com/chengpeiquan)
