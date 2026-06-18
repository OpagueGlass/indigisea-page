import type { LocaleContent, Page } from "./content-types"

export async function getContent<T extends Page>(page: T, locale: string): Promise<LocaleContent[T] | null> {
  try {
    const req = await fetch(`/api/globals/${page}?locale=${locale}`, {})
    const data = await req.json()
    return cleanData(page, data) as LocaleContent[T]
  } catch (error) {
    console.error("Error fetching content:", error)
    return null
  }
}

function cleanData<T extends Page>(page: T, data: Record<string, any>) {
  // Remove Payload metadata from front-end
  const { id, globalType, createdAt, updatedAt, ...rest } = data ?? {}

  if (page === "blogs") {
    rest.posts = rest.posts.map((post: Record<string, any>) => ({
      ...post,
      id: post.postId ?? post.id,
    }))
  }

  return rest
}
