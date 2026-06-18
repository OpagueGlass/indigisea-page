"use client"

import { Button } from "@/components/ui/button"
import ViewPage from "@/components/view-page"
import { LocaleContent } from "@/payload/content-types"
import { ArrowRight, BookOpen, Cpu, Users } from "lucide-react"
import Link from "next/link"

const highlightIcons = [Users, BookOpen, Cpu]

export default function HomePage() {
  return ViewPage({
    page: "home",
    View: HomeView,
  })
}

function HomeView({ data }: { data: LocaleContent["home"] | null | undefined }) {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-foreground py-24 sm:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-balance text-background sm:text-5xl lg:text-6xl">
              {data?.heroTitle}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-pretty text-background/80">{data?.heroSubtitle}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/about">
                  {data?.heroPrimaryCta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-background/30 hover:bg-background/80">
                <Link href="/resources">{data?.heroSecondaryCta}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="border-b border-border py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xl leading-relaxed font-medium text-foreground sm:text-2xl">
              &ldquo;{data?.missionQuote}&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{data?.approachTitle}</h2>
            <p className="mt-4 text-lg text-muted-foreground">{data?.approachSubtitle}</p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {data?.highlights?.map((highlight, index) => {
              const Icon = highlightIcons[index] ?? Users
              return (
                <div
                  key={index}
                  className="group rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/50 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-card-foreground">{highlight?.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{highlight?.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-muted/50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{data?.ctaTitle}</h2>
            <p className="mt-4 text-lg text-muted-foreground">{data?.ctaSubtitle}</p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/resources">
                  {data?.ctaPrimary}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/research">{data?.ctaSecondary}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Communities Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{data?.communitiesTitle}</h2>
            <p className="mt-4 text-lg text-muted-foreground">{data?.communitiesSubtitle}</p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {data?.communities?.map((community) => (
              <div
                key={community}
                className="rounded-xl border border-border bg-card p-6 text-center transition-all hover:border-primary/50 hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-card-foreground">{community}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{data?.communityLabel}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
