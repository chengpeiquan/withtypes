import { resolve } from 'path'
import { buildLibrary } from './lib'
import { buildTypes } from './dts'
import { specialPackages, rewriteEntryFile } from './sync'

async function run() {
  const argv = process.argv
  if (argv.length !== 3) {
    throw new Error(
      `Missing package name to generate declaration files.\ne.g. pnpm build:types md5\n\n`
    )
  }
  const [, , name] = argv

  const rootPath = resolve(__dirname, `../../`)
  const options = { name, rootPath }

  if (specialPackages.includes(name)) {
    await rewriteEntryFile(options)
  }
  await buildLibrary(options)
  await buildTypes(options)
}
run().catch((e) => {
  console.log(e)
})
