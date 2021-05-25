import { requireModule } from '@dovca/nuxt-utils'

export const importModule = (id) => {
  try {
    return Promise.resolve(requireModule(id))
  } catch (err) {
    if (err.code === 'MODULE_NOT_FOUND') {
      err.message = `Cannot import module '${id}'`
    }
    return Promise.reject(err)
  }
}

export const builder = () => importModule('@dovca/nuxt-builder')
export const webpack = () => importModule('@dovca/nuxt-webpack')
export const generator = () => importModule('@dovca/nuxt-generator')
export const core = () => importModule('@dovca/nuxt-core')
export const server = () => importModule('@dovca/nuxt-server')
