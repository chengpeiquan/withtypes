# @withtypes/fs-extra

FS-Extra with types.

Merged [fs-extra](https://www.npmjs.com/package/fs-extra) and [@types/fs-extra](https://www.npmjs.com/package/@types/fs-extra) , install this package to get both, no other features.

## Why?

I got tired of having to install an additional `@types/**` package every time in my TypeScript project to support type inference for these utilities.

So I merged them, but in fact, after installing this package, the original package will still be installed implicitly, and all functions are provided by the original package.

## Installation

Install the package from npm (or yarn, or pnpm).

```bash
# Just install this package
npm i @withtypes/fs-extra
```

This replaces the original problem of needing to install twice:

```bash
# No need to install this now
npm i fs-extra
npm i -D @types/fs-extra
```

## Usage

This package does not have its own function implementation, Just replace the package name in the `import` statement.

```diff
-import fs from 'fs-extra'
+import fs from '@withtypes/fs-extra'
```

This package also supports named imports: 

```diff
-import { readFileSync } from 'fs-extra'
+import { readFileSync } from '@withtypes/fs-extra'
```

So it is exactly the same APIs as the original package in use.

```ts
import { resolve } from 'path'
import { readJSONSync } from '@withtypes/fs-extra'

const pkg = resolve('./package.json')
const { version } = readJSONSync(pkg, 'utf-8')
console.log(version)
// 0.1.0
```

## Documentation

See: [Documentation of FS-Extra](https://github.com/jprichardson/node-fs-extra#readme)

## License

MIT License © 2022 [chengpeiquan](https://github.com/chengpeiquan)
