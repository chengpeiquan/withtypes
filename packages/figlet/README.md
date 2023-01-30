# @withtypes/figlet

Figlet with types.

Merged [figlet](https://www.npmjs.com/package/figlet) and [@types/figlet](https://www.npmjs.com/package/@types/figlet) , install this package to get both, no other features.

## Why?

I got tired of having to install an additional `@types/**` package every time in my TypeScript project to support type inference for these utilities.

So I merged them, but in fact, after installing this package, the original package will still be installed implicitly, and all functions are provided by the original package.

## Installation

Install the package from npm (or yarn, or pnpm).

```bash
# Just install this package
npm i @withtypes/figlet
```

This replaces the original problem of needing to install twice:

```bash
# No need to install this now
npm i figlet
npm i -D @types/figlet
```

## Usage

This package does not have its own function implementation, Just replace the package name in the `import` statement.

```diff
-import figlet from 'figlet'
+import figlet from '@withtypes/figlet'
```

So it is exactly the same APIs as the original package in use.

```ts
import figlet from '@withtypes/figlet'

figlet('Hello World!!', function (err, data) {
  if (err) {
    console.log('Something went wrong...')
    console.dir(err)
    return
  }
  console.log(data)
})
```

## Documentation

See: [Documentation of Figlet](https://github.com/patorjk/figlet.js#readme)

## License

MIT License © 2022 [chengpeiquan](https://github.com/chengpeiquan)
