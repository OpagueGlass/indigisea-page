"use client"

import { Button } from "@/components/ui/button"
import ViewPage from "@/components/view-page"
import { LocaleContent } from "@/payload/content-types"
import { Mail, MapPin, Phone, Send } from "lucide-react"

const contactIcons = [Mail, MapPin, Phone]

export default function ContactPage() {
  return ViewPage({
    page: "contact",
    View: ContactView,
  })
}

function ContactView({ data }: { data: LocaleContent["contact"] | null | undefined }) {
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

      {/* Contact Info & Form */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-foreground">{data?.infoTitle}</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">{data?.infoIntro}</p>

              <div className="mt-10 space-y-8">
                {data?.contactInfo.map((item, index) => {
                  const Icon = contactIcons[index] ?? Mail
                  return (
                    <div key={item.title} className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{item.title}</h3>
                        {item.details.map((detail, i) => (
                          <p key={i} className="text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-2xl border border-border bg-card p-8">
              <h2 className="text-xl font-semibold text-card-foreground">{data?.formTitle}</h2>
              <form className="mt-6 space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-foreground">
                      {data?.formFirstName}
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-foreground">
                      {data?.formLastName}
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground">
                    {data?.formEmail}
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground">
                    {data?.formSubject}
                  </label>
                  <select
                    id="subject"
                    className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:ring-2 focus:ring-ring focus:outline-none"
                  >
                    <option value="">{data?.formSubjectPlaceholder}</option>
                    {data?.formSubjectOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground">
                    {data?.formMessage}
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="mt-2 w-full resize-none rounded-lg border border-input bg-background px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:outline-none"
                    placeholder={data?.formMessagePlaceholder}
                  />
                </div>

                <Button type="submit" className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  {data?.formButton}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Team Locations */}
      <section className="border-t border-border bg-muted/30 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground">{data?.teamTitle}</h2>
          <p className="mt-2 text-muted-foreground">{data?.teamSubtitle}</p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {data?.teamLocations.map((member) => (
              <div key={member.name} className="rounded-xl bg-card p-6 shadow-sm">
                <h3 className="font-semibold text-card-foreground">{member.name}</h3>
                <p className="text-sm text-primary">{member.role}</p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-start gap-2">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">{member.location}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <a href={`mailto:${member.email}`} className="text-sm text-muted-foreground hover:text-primary">
                      {member.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground">{data?.mapTitle}</h2>
          <p className="mt-2 text-muted-foreground">{data?.mapSubtitle}</p>
          <div className="mt-8 rounded-2xl border border-border bg-muted/30 p-12">
            <div className="flex flex-col items-center justify-center text-center">
              <MapPin className="h-16 w-16 text-primary/30" />
              <p className="mt-4 text-lg font-medium text-foreground">{data?.mapPlaceholderTitle}</p>
              <p className="mt-2 text-sm text-muted-foreground">{data?.mapPlaceholderSubtitle}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
