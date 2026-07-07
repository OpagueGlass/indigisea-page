import { Admins } from "@/payload/collections/admin"
import { About } from "@/payload/globals/about"
import { Blogs } from "@/payload/globals/blogs"
import { Contact } from "@/payload/globals/contact"

import { Home } from "@/payload/globals/home"

import { People } from "@/payload/globals/people"
import { Research } from "@/payload/globals/research"
import { Resources } from "@/payload/globals/resources"
import { postgresAdapter } from "@payloadcms/db-postgres"
import { lexicalEditor } from "@payloadcms/richtext-lexical"

import { Footer } from "@/payload/globals/footer"
import { Nav } from "@/payload/globals/nav"
import path from "path"
import { buildConfig } from "payload"
import { fileURLToPath } from "url"

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  // Use rich text editor
  editor: lexicalEditor(),
  admin: {
    user: Admins.slug,
    livePreview: {
      url: ({ globalConfig }) => {
        const url = process.env.DEPLOYMENT_URL || "http://localhost:3000"
        if (globalConfig?.slug === "home") {
          return `${url}/`
        }
        return `${url}/${globalConfig?.slug}`
      },
      globals: ["home", "about", "research", "resources", "people", "blogs", "contact"],
    },
  },
  localization: {
    locales: [
      { code: "en", label: "English" },
      { code: "ms", label: "Bahasa Melayu" },
    ],
    defaultLocale: "en",
    fallback: true,
  },

  // Define and configure your collections in this array
  collections: [Admins],
  globals: [Nav, Footer, Home, About, Research, Resources, People, Blogs, Contact],
  secret: process.env.PAYLOAD_SECRET!,

  // Use postgres adapter
  db: postgresAdapter({
    pool: { connectionString: process.env.DATABASE_URI! },
  }),

  bin: [
    {
      key: "seed",
      scriptPath: path.resolve(dirname, "scripts/seed.ts"),
    },
  ],
})
