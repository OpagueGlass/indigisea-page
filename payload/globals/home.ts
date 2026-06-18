import type { GlobalConfig } from "payload";
import { array, stringList, text, textarea } from "../fields";

export const Home: GlobalConfig = {
  slug: "home",
  label: "Home Page",
  admin: { group: "Pages" },
  access: { read: () => true },
  fields: [
    text("heroTitle", "Hero Title"),
    textarea("heroSubtitle", "Hero Subtitle"),
    text("heroPrimaryCta", "Hero Primary CTA"),
    text("heroSecondaryCta", "Hero Secondary CTA"),
    textarea("missionQuote", "Mission Quote"),
    text("approachTitle", "Approach Title"),
    text("approachSubtitle", "Approach Subtitle"),
    array(
      "highlights",
      [text("title", "Title"), textarea("description", "Description")],
      "Highlights",
    ),
    text("ctaTitle", "CTA Title"),
    textarea("ctaSubtitle", "CTA Subtitle"),
    text("ctaPrimary", "CTA Primary"),
    text("ctaSecondary", "CTA Secondary"),
    text("communitiesTitle", "Communities Title"),
    text("communitiesSubtitle", "Communities Subtitle"),
    text("communityLabel", "Community Label"),
    stringList("communities", "Communities"),
  ],
};