import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'kvgojho3',
  dataset: 'production',
  apiVersion: '2023-08-01',
  useCdn: false
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)