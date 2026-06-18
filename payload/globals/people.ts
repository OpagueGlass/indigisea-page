import type { GlobalConfig } from "payload";
import { array, text, textarea } from "../fields";

export const People: GlobalConfig = {
  slug: "people",
  label: "People Page",
  admin: { group: "Pages" },
  access: { read: () => true },
  fields: [
    text("headerTitle", "Header Title"),
    textarea("headerSubtitle", "Header Subtitle"),
    text("piTitle", "PI Title"),
    text("piSubtitle", "PI Subtitle"),
    array(
      "principalInvestigators",
      [
        text("name", "Name"),
        text("role", "Role"),
        text("affiliation", "Affiliation"),
        textarea("bio", "Bio"),
      ],
      "Principal Investigators",
    ),
    text("researchTeamTitle", "Research Team Title"),
    array(
      "researchers",
      [text("name", "Name"), text("role", "Role"), text("focus", "Focus")],
      "Researchers",
    ),
    text("partnersTitle", "Partners Title"),
    text("partnersSubtitle", "Partners Subtitle"),
    textarea("partnersIntro", "Partners Intro"),
    array(
      "communityPartners",
      [
        text("name", "Name"),
        text("community", "Community"),
        text("role", "Role"),
      ],
      "Community Partners",
    ),
    text("collaboratorsTitle", "Collaborators Title"),
    text("collaboratorsSubtitle", "Collaborators Subtitle"),
    array(
      "collaborators",
      [
        text("name", "Name"),
        text("type", "Type"),
        text("fullName", "Full Name"),
      ],
      "Collaborators",
    ),
  ],
};
