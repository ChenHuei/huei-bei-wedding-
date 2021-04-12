import { Context } from '@nuxt/types'

const detectWebp = () => {
  const elem = document.createElement('canvas')

  if (elem.getContext && elem.getContext('2d')) {
    // was able or not to get WebP representation
    return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0
  }

  // very old browser like IE 8, canvas not supported
  return false
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (nuxtContext: Context, inject: any) => {
  if (process.server) {
    inject('isWebp', true)
  }
  if (process.client) {
    inject('isWebp', detectWebp())
  }
}
