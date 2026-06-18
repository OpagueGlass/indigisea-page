"use client"

import { ContentQuery } from "@/components/view-page"
import { LocaleContent } from "@/payload/content-types"
import { useLanguage } from "@/provider/language-provider"
import Link from "next/link"

interface FooterViewProps {
  footerData: LocaleContent["footer"] | null | undefined
  navData: LocaleContent["nav"] | null | undefined
}

const navHref: Record<string, string> = {
  home: "/",
  about: "/about",
  research: "/research",
  resources: "/resources",
  people: "/people",
  blogs: "/blogs",
  contact: "/contact",
}

const projectKeys = ["about", "research", "resources"]
const connectKeys = ["people", "blogs", "contact"]

export function Footer() {
  const { locale } = useLanguage()
  const footerPage = "footer"
  const navPage = "nav"
  const footerData = ContentQuery(footerPage, locale)
  const navData = ContentQuery(navPage, locale)

  return <FooterView footerData={footerData} navData={navData} />
}

export function FooterView({ footerData, navData }: FooterViewProps) {
  const { tagline, projectTitle, connectTitle, rights } = footerData ?? {}
  const { brand, items } = navData ?? {}

  const labelFor = (key: string) => items?.find((i) => i.key === key)?.label ?? key

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <span className="text-lg font-bold text-primary-foreground">IS</span>
              </div>
              <span className="text-xl font-bold text-foreground">{brand}</span>
            </Link>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">{tagline}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">{projectTitle}</h3>
            <ul className="mt-4 space-y-3">
              {projectKeys.map((key) => (
                <li key={key}>
                  <Link
                    href={navHref[key]}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {labelFor(key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">{connectTitle}</h3>
            <ul className="mt-4 space-y-3">
              {connectKeys.map((key) => (
                <li key={key}>
                  <Link
                    href={navHref[key]}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {labelFor(key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {brand}. {rights}
          </p>
        </div>
      </div>
    </footer>
  )
}
