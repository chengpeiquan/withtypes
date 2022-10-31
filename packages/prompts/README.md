# @withtypes/prompts

Prompts with types.

Merged [prompts](https://www.npmjs.com/package/prompts) and [@types/prompts](https://www.npmjs.com/package/@types/prompts) , install this package to get both, no other features.

## Why?

I got tired of having to install an additional `@types/**` package every time in my TypeScript project to support type inference for these utilities.

So I merged them, but in fact, after installing this package, the original package will still be installed implicitly, and all functions are provided by the original package.

## Installation

Install the package from npm (or yarn, or pnpm).

```bash
# Just install this package
npm i @withtypes/prompts
```

This replaces the original problem of needing to install twice:

```bash
# No need to install this now
npm i prompts
npm i -D @types/prompts
```

## Usage

This package does not have its own function implementation, Just replace the package name in the `import` statement.

```diff
-import prompts from 'prompts'
+import prompts from '@withtypes/prompts'
```

So it is exactly the same APIs as the original package in use.

```ts
import prompts from '@withtypes/prompts'

;(async () => {
  const res = await prompts({
    type: 'text',
    name: 'slogan',
    message: 'Enter you slogan:',
    initial: 'Hello World',
    onState: (state) => state.value.trim(),
  })

  console.log(res.slogan)
  // Hello World
})()
```

## Documentation

See: [Documentation of Prompts](https://github.com/terkelg/prompts#readme)

## License

MIT License © 2022 [chengpeiquan](https://github.com/chengpeiquan)
