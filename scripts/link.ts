 path  'path'
 consola  'consola'
 execa  'execa'
 fs  'fs-extra'
 _glob  'glob'
 pify  'pify'

 glob  pify(_glob) // TODO: use globby

  main () {
   packageDirs  glob('+(packages|distributions)/*')

   packages  packageDirs.map(pkgDir  ({
    dir: pkgDir,
    pkg: fs.readJSONSync(path.join(pkgDir, 'package.json'))
  }))

  packageNames  packages.map(p  p.pkg.name).join(' ')

  consola.info(`Linking ${packages.length} packages...`)

   Promise.all(packages.map(pkg => execa('yarn', ['link'], { cwd: pkg.dir })))

  consola.log(`Link: \nyarn link ${packageNames}\n`)
  consola.log(`Unlink: \nyarn unlink ${packageNames}\n`)
}

main().catch(consola.error)
