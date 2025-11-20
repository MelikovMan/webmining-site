import { getBlogPosts } from 'app/(ru)/blog/utils'

export const baseUrl = 'https://melikovman.github.io/webmining-site'

export const baseUri = '/webmining-site'

export default async function sitemap() {
  let blogs = (await getBlogPosts()).map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  let routes = ['', '/ref', '/search', '/links', '/library', '/blog','/en','en/ref'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogs]
}
export const dynamic = "force-static"