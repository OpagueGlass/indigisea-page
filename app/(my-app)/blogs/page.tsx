"use client"

import { Button } from "@/components/ui/button"
import ViewPage from "@/components/view-page"
import { LocaleContent } from "@/payload/content-types"
import { ArrowRight, Award, Calendar, FileText, MapPin } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const categoryIcons = [MapPin, Award, FileText]

export default function BlogsPage() {
  return ViewPage({
    page: "blogs",
    View: BlogsView,
  })
}

function BlogsView({ data }: { data: LocaleContent["blogs"] | null | undefined }) {
  // index 0 of categories is the "All" option
  const [selectedCategory, setSelectedCategory] = useState(0)
  const activeCategoryName = data?.categories[selectedCategory]?.name
  const isAll = selectedCategory === 0
  const visiblePosts = isAll ? data?.posts : data?.posts.filter((post) => post?.category === activeCategoryName)

  const iconForCategory = (category: string) => {
    const index = data?.categories.findIndex((c) => c.name === category)
    if (index !== undefined && index > 0) {
      return categoryIcons[index - 1]
    }
    return FileText
  }
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

      {/* Category Filter */}
      <section className="border-b border-border py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {data?.categories.map((category, index) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(index)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  index === selectedCategory
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {visiblePosts?.map((post) => {
              const Icon = iconForCategory(post?.category)
              return (
                <article
                  key={post?.id}
                  className="group rounded-2xl border border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg"
                >
                  <div className="flex h-48 items-center justify-center rounded-t-2xl bg-muted/50">
                    <Icon className="h-16 w-16 text-primary/30" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        {post?.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {post?.date}
                      </span>
                    </div>
                    <h2 className="mt-4 text-lg font-semibold text-card-foreground transition-colors group-hover:text-primary">
                      {post?.title}
                    </h2>
                    <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{post?.excerpt}</p>
                    <Link
                      href="#"
                      className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline"
                    >
                      {data?.readMore}
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </article>
              )
            })}
          </div>

          {/* Load More */}
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg">
              {data?.loadMore}
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="border-t border-border bg-muted/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-foreground">{data?.newsletterTitle}</h2>
            <p className="mt-3 text-muted-foreground">{data?.newsletterSubtitle}</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <input
                type="email"
                placeholder={data?.newsletterPlaceholder}
                className="rounded-lg border border-input bg-background px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:outline-none"
              />
              <Button>{data?.newsletterButton}</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
