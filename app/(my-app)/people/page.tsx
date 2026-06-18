"use client"

import ViewPage from "@/components/view-page"
import { LocaleContent } from "@/payload/content-types"
import { Handshake, Heart, Users } from "lucide-react"

function initials(name: string, max = 3) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, max)
    .join("")
}

export default function PeoplePage() {
  return ViewPage({
    page: "people",
    View: PeopleView,
  })
}

function PeopleView({ data }: { data: LocaleContent["people"] | null | undefined }) {
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

      {/* Principal Investigators */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">{data?.piTitle}</h2>
              <p className="text-muted-foreground">{data?.piSubtitle}</p>
            </div>
          </div>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {data?.principalInvestigators?.map((person) => (
              <div key={person.name} className="rounded-2xl border border-border bg-card p-8">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-2xl font-bold text-primary">{initials(person.name)}</span>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-card-foreground">{person.name}</h3>
                <p className="text-sm font-medium text-primary">{person.role}</p>
                <p className="mt-1 text-sm text-muted-foreground">{person.affiliation}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{person.bio}</p>
              </div>
            ))}
          </div>

          {/* Research Team */}
          <div className="mt-16">
            <h3 className="text-xl font-semibold text-foreground">{data?.researchTeamTitle}</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {data?.researchers?.map((person) => (
                <div key={person.name} className="rounded-xl border border-border bg-card p-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                    <span className="text-sm font-semibold text-muted-foreground">{initials(person.name, 2)}</span>
                  </div>
                  <h4 className="mt-4 font-semibold text-card-foreground">{person.name}</h4>
                  <p className="text-sm text-primary">{person.role}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{person.focus}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Community Partners */}
      <section className="border-y border-border bg-muted/30 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <Heart className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">{data?.partnersTitle}</h2>
              <p className="text-muted-foreground">{data?.partnersSubtitle}</p>
            </div>
          </div>

          <p className="mt-6 max-w-3xl leading-relaxed text-muted-foreground">{data?.partnersIntro}</p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {data?.communityPartners?.map((partner) => (
              <div key={partner.name} className="rounded-xl bg-card p-6 shadow-sm">
                <div className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {partner.community}
                </div>
                <h4 className="mt-4 font-semibold text-card-foreground">{partner.name}</h4>
                <p className="mt-1 text-sm text-muted-foreground">{partner.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaborating Institutions */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <Handshake className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">{data?.collaboratorsTitle}</h2>
              <p className="text-muted-foreground">{data?.collaboratorsSubtitle}</p>
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data?.collaborators?.map((collab) => (
              <div key={collab.name} className="flex items-center gap-4 rounded-xl border border-border bg-card p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-muted font-bold text-muted-foreground">
                  {initials(collab.name, 2)}
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground">{collab.name}</h4>
                  {collab.fullName && <p className="text-sm text-muted-foreground">{collab.fullName}</p>}
                  <span className="mt-1 inline-block rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                    {collab.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
