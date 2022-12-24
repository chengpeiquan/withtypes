import { resolve } from 'path'
import { buildLibrary } from './lib'
import { buildTypes } from './dts'
import { specialPackages, rewriteEntryFile } from './sync'
import { getArgv, readBuildConfig } from '../utils'

async function run() {
  const { name } = getArgv()
  const rootPath = resolve(__dirname, `../../`)
  const options = { name, rootPath }

  if (specialPackages.includes(name)) {
    await rewriteEntryFile(options)
  }

  const { entryFiles } = readBuildConfig(rootPath, name)

  // Build multiple entry files
  if (Array.isArray(entryFiles)) {
    for (let i = 0; i < entryFiles.length; i++) {
      const entryFile = entryFiles[i]
      await buildLibrary({
        ...options,
        entryFile,
      })
    }
  }
  // Only build the `index` files
  else {
    await buildLibrary(options)
  }

  await buildTypes(options)
}
run().catch((e) => {
  console.log(e)
})
