import {addHash} from './add_hash'
import {getSlug} from './get_slug'

const url =
  'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/_data/simple-icons.json'
let cache:
  | Record<string, {title: string; hex: string; slug: string}>
  | undefined
const fallback = '#000'

interface Icon {
  hex?: string
  title: string
  source: string
}

const primeCache = async () => {
  if (!cache) {
    try {
      const res = await fetch(url, {cache: 'force-cache'})
      const json = await res.json()
      cache = {}
      json.icons.forEach((icon: Icon) => {
        const iconSlug = getSlug({title: icon.title})
        cache![iconSlug] = {
          hex: addHash(icon.hex ?? fallback),
          title: icon.title,
          slug: iconSlug,
        }
      })
    } catch (e) {}
  }
}

export const getSlugHexs = async (slugs: string[]) => {
  await primeCache()
  return {
    hexs: slugs.map(slug => ({
      slug,
      hex: cache ? cache[slug]?.hex ?? fallback : fallback,
      title: cache ? cache[slug]?.title ?? 'icon' : 'icon',
    })),
    cache,
  }
}
