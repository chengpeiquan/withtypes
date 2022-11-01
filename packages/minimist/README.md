# @withtypes/minimist

Minimist with types.

Merged [minimist](https://www.npmjs.com/package/minimist) and [@types/minimist](https://www.npmjs.com/package/@types/minimist) , install this package to get both, no other features.

## Why?

I got tired of having to install an additional `@types/**` package every time in my TypeScript project to support type inference for these utilities.

So I merged them, but in fact, after installing this package, the original package will still be installed implicitly, and all functions are provided by the original package.

## Installation

Install the package from npm (or yarn, or pnpm).

```bash
# Just install this package
npm i @withtypes/minimist
```

This replaces the original problem of needing to install twice:

```bash
# No need to install this now
npm i minimist
npm i -D @types/minimist
```

## Usage

This package does not have its own function implementation, Just replace the package name in the `import` statement.

```diff
-import minimist from 'minimist'
+import minimist from '@withtypes/minimist'
```

So it is exactly the same APIs as the original package in use.

```ts
import minimist from '@withtypes/minimist'

const argv = minimist(process.argv.slice(2), { string: ['_'] })
console.log(argv)
// { _: [] }

// If you run the script on the command line with arguments:
// e.g. `npx tsx ./scripts/argv.ts Hello World`
// { _: [ 'Hello', 'World' ] }
```

## Documentation

See: [Documentation of Minimist](https://github.com/minimistjs/minimist#readme)

## License

MIT License © 2022 [chengpeiquan](https://github.com/chengpeiquan)
