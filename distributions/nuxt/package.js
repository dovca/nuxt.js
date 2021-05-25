export default {
  build: true,
  hooks: {
    async 'build:done' (pkg) {
      const mono = pkg.load('../..')

      await pkg.copyFilesFrom(mono, [
        'LICENSE',
        'README.md'
      ])
    }
  },
  ignoreUnused: [
    // used by postinstall
    '@nuxt/opencollective',
    // discovered by config
    '@nuxt/components',
    '@nuxt/loading-screen',
    '@nuxt/telemetry',
    // Distro
    '@dovca/nuxt-babel-preset-app',
    '@dovca/nuxt-config',
    '@dovca/nuxt-server',
    '@dovca/nuxt-utils',
    '@dovca/nuxt-vue-app',
    '@dovca/nuxt-vue-renderer',
    '@dovca/nuxt-webpack'
  ]
}
