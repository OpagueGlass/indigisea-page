"use client"

import { Button } from "@/components/ui/button"
import ViewPage from "@/components/view-page"
import { LocaleContent } from "@/payload/content-types"
import { Book, Database, ExternalLink, FileText, Lock, Wrench } from "lucide-react"
import Link from "next/link"

export default function ResourcesPage() {
  return ViewPage({
    page: "resources",
    View: ResourcesView,
  })
}

function ResourcesView({ data }: { data: LocaleContent["resources"] | null | undefined }) {
  return (
    <div>
      {/* Header */}
      <section className="border-b border-border bg-muted/30 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">{data?.headerTitle}</h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{data?.headerSubtitle}</p>
          </div>
        </div>
      </section>

      {/* Digital Dictionaries */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <Book className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">{data?.dictionariesTitle}</h2>
              <p className="text-muted-foreground">{data?.dictionariesSubtitle}</p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {data?.dictionaries.map((dict) => (
              <div
                key={dict?.language}
                className="rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-card-foreground">{dict?.language}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{data?.dictionaryCardLabel}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">{dict?.words}</span>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      dict?.status === data?.statusActive
                        ? "bg-primary/10 text-primary"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {dict?.status}
                  </span>
                </div>
                <Button className="mt-4 w-full" variant="outline" size="sm">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  {data?.dictionaryButton}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Language Corpora */}
      <section className="border-y border-border bg-muted/30 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <Database className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">{data?.corporaTitle}</h2>
              <p className="text-muted-foreground">{data?.corporaSubtitle}</p>
            </div>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {data?.corpora.map((corpus, index) => (
              <div key={index} className="rounded-2xl border border-border bg-card p-8">
                <h3 className="text-xl font-semibold text-card-foreground">{corpus.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{corpus.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {corpus.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-muted px-3 py-1 text-sm text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
                  <Lock className="h-4 w-4" />
                  <span>{data?.corporaRestricted}</span>
                </div>
                <Button className="mt-4" variant="outline">
                  {data?.corporaButton}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications & Reports */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">{data?.publicationsTitle}</h2>
              <p className="text-muted-foreground">{data?.publicationsSubtitle}</p>
            </div>
          </div>

          <div className="mt-10 space-y-4">
            {data?.publications.map((pub, index) => (
              <div
                key={index}
                className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <h3 className="font-semibold text-card-foreground">{pub.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {pub.type} &middot; {pub.venue}
                  </p>
                </div>
                <span className="shrink-0 rounded-full bg-muted px-3 py-1 text-sm text-muted-foreground">
                  {pub.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="border-t border-border bg-muted/30 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <Wrench className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">{data?.toolsTitle}</h2>
              <p className="text-muted-foreground">{data?.toolsSubtitle}</p>
            </div>
          </div>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {data?.tools.map((tool, index) => (
              <div key={index} className="rounded-2xl border border-border bg-card p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                  <span className="text-2xl font-bold">{tool.initial}</span>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-card-foreground">{tool.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{tool.description}</p>
                <Button className="mt-6" variant="outline" asChild>
                  <Link href="#">
                    {data?.toolsButton}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
