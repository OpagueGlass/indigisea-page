"use client"

import ViewPage from "@/components/view-page"
import { LocaleContent } from "@/payload/content-types"
import { Database, FileText, Mic, Shield, Smartphone, Waves } from "lucide-react"

const area1Icons = [Mic, Smartphone, Waves]

export default function ResearchPage() {
  return ViewPage({
    page: "research",
    View: ResearchView,
  })
}

function ResearchView({ data }: { data: LocaleContent["research"] | null | undefined }) {
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

      {/* Research Area 1: Linguistic Documentation */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <FileText className="h-4 w-4" />
                {data?.area1Badge}
              </div>
              <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground">{data?.area1Title}</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{data?.area1Intro}</p>
            </div>
            <div className="space-y-6">
              {data?.area1Cards.map((card, index) => {
                const Icon = area1Icons[index] ?? Mic
                return (
                  <div key={index} className="rounded-xl border border-border bg-card p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-card-foreground">{card.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Research Area 2: Digital Infrastructure & AI */}
      <section className="border-y border-border bg-muted/30 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 lg:order-1">
              <div className="grid gap-6 sm:grid-cols-2">
                {data?.area2Stats.map((item, index) => (
                  <div key={index} className={`rounded-xl bg-card p-6 shadow-sm ${index === 2 ? "sm:col-span-2" : ""}`}>
                    <div className="text-4xl font-bold text-primary">{item.stat}</div>
                    <div className="mt-1 text-sm font-medium text-card-foreground">{item.label}</div>
                    <p className="mt-3 text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <Database className="h-4 w-4" />
                {data?.area2Badge}
              </div>
              <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground">{data?.area2Title}</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{data?.area2Intro}</p>
              <p className="mt-4 leading-relaxed text-muted-foreground">{data?.area2Body}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Area 3: Indigenous Data Ethics */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <Shield className="h-4 w-4" />
                {data?.area3Badge}
              </div>
              <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground">{data?.area3Title}</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{data?.area3Intro}</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-8">
              <h3 className="text-xl font-semibold text-card-foreground">{data?.area3PrinciplesTitle}</h3>
              <ul className="mt-6 space-y-4">
                {data?.area3Principles.map((principle, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <div>
                      <span className="font-medium text-card-foreground">{principle.title}</span>
                      <p className="mt-1 text-sm text-muted-foreground">{principle.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
