/**
 * Seeds the Payload Globals from the bundled `content/site-content.json`.
 *
 * Run AFTER you have connected your database and set DATABASE_URI:
 *   pnpm seed
 *
 * Safe to re-run; it overwrites each Global with the seed values.
 */
import payload from "payload"
import { promises as fs } from "fs"
import path from "path"
import type { Locale, SiteContent } from "@/payload/content-types"
import { LOCALES } from "@/payload/content-types"
import type { SanitizedConfig } from "payload"

const GLOBAL_SLUGS = ["nav", "footer", "home", "about", "research", "resources", "people", "blogs", "contact"] as const

export const script = async (config: SanitizedConfig) => {
  const raw = await fs.readFile(path.join(process.cwd(), "content", "site-content.json"), "utf-8")
  const seed = JSON.parse(raw) as SiteContent

  await payload.init({ config })

  for (const { code } of LOCALES) {
    const locale = code as Locale
    const localeData = seed[locale]
    if (!localeData) continue

    for (const slug of GLOBAL_SLUGS) {
      const data = prepareSection(slug, localeData[slug])
      await payload.updateGlobal({ slug, locale, data })
    }
  }

  payload.logger.info("Successfully seeded!")
  process.exit(0)
}

/** Remap front-end shapes to the Payload field names where they differ. */
function prepareSection(slug: string, section: Record<string, any>) {
  if (!section) return section
  if (slug === "blogs" && Array.isArray(section.posts)) {
    return {
      ...section,
      posts: section.posts.map((post: Record<string, any>) => ({
        postId: post.id,
        title: post.title,
        category: post.category,
        date: post.date,
        excerpt: post.excerpt,
      })),
    }
  }
  return section
}
