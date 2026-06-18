"use client"

import ViewPage from "@/components/view-page"
import { LocaleContent } from "@/payload/content-types"
import { Lightbulb, Target, Users } from "lucide-react"

export default function AboutPage() {
  return ViewPage({
    page: "about",
    View: AboutView,
  })
}

function AboutView({ data }: { data: LocaleContent["about"] | null | undefined }) {
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

      {/* The Problem */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground">{data?.problemTitle}</h2>
              <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
                {data?.problemParagraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="rounded-2xl border border-border bg-card p-8">
                <div className="text-center">
                  <div className="text-6xl font-bold text-primary">{data?.statBigNumber}</div>
                  <p className="mt-2 text-lg font-medium text-card-foreground">{data?.statBigLabel}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{data?.statBigSub}</p>
                </div>
                <div className="mt-8 border-t border-border pt-8 text-center">
                  <div className="text-4xl font-bold text-foreground">{data?.statSmallNumber}</div>
                  <p className="mt-2 text-lg font-medium text-card-foreground">{data?.statSmallLabel}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{data?.statSmallSub}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="border-y border-border bg-muted/30 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <Lightbulb className="h-6 w-6 text-primary" />
            </div>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground">{data?.approachTitle}</h2>
            <p className="mt-4 text-lg text-muted-foreground">{data?.approachSubtitle}</p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {data?.approachItems.map((item, index) => (
              <div key={index} className="rounded-xl bg-card p-6 shadow-sm">
                <div className="text-sm font-semibold text-primary">{String(index + 1).padStart(2, "0")}</div>
                <h3 className="mt-3 text-lg font-semibold text-card-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Communities */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground">{data?.communitiesTitle}</h2>
            <p className="mt-4 text-lg text-muted-foreground">{data?.communitiesSubtitle}</p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2">
            {data?.communities.map((community) => (
              <div key={community.name} className="rounded-2xl border border-border bg-card p-8">
                <h3 className="text-2xl font-bold text-card-foreground">{community.name}</h3>
                <p className="mt-1 text-sm font-medium text-primary">{community.subtitle}</p>
                <p className="mt-4 leading-relaxed text-muted-foreground">{community.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
