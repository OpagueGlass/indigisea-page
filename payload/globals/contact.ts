import type { GlobalConfig } from "payload";
import { array, stringList, text, textarea } from "../fields";

export const Contact: GlobalConfig = {
  slug: "contact",
  label: "Contact Page",
  admin: { group: "Pages" },
  access: { read: () => true },
  fields: [
    text("headerTitle", "Header Title"),
    textarea("headerSubtitle", "Header Subtitle"),
    text("infoTitle", "Info Title"),
    textarea("infoIntro", "Info Intro"),
    array(
      "contactInfo",
      [text("title", "Title"), stringList("details", "Details")],
      "Contact Info",
    ),
    text("formTitle", "Form Title"),
    text("formFirstName", "Form First Name"),
    text("formLastName", "Form Last Name"),
    text("formEmail", "Form Email"),
    text("formSubject", "Form Subject"),
    text("formSubjectPlaceholder", "Form Subject Placeholder"),
    stringList("formSubjectOptions", "Form Subject Options"),
    text("formMessage", "Form Message"),
    text("formMessagePlaceholder", "Form Message Placeholder"),
    text("formButton", "Form Button"),
    text("teamTitle", "Team Title"),
    text("teamSubtitle", "Team Subtitle"),
    array(
      "teamLocations",
      [
        text("name", "Name"),
        text("role", "Role"),
        text("location", "Location"),
        text("email", "Email"),
      ],
      "Team Locations",
    ),
    text("mapTitle", "Map Title"),
    text("mapSubtitle", "Map Subtitle"),
    text("mapPlaceholderTitle", "Map Placeholder Title"),
    text("mapPlaceholderSubtitle", "Map Placeholder Subtitle"),
  ],
};
