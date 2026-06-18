import type { GlobalConfig } from "payload";
import { array, stringList, text, textarea } from "../fields";

export const About: GlobalConfig = {
  slug: "about",
  label: "About Page",
  admin: { group: "Pages" },
  access: { read: () => true },
  fields: [
    text("headerTitle", "Header Title"),
    textarea("headerSubtitle", "Header Subtitle"),
    text("problemTitle", "Problem Title"),
    stringList("problemParagraphs", "Problem Paragraphs"),
    text("statBigNumber", "Stat Big Number"),
    text("statBigLabel", "Stat Big Label"),
    text("statBigSub", "Stat Big Sub"),
    text("statSmallNumber", "Stat Small Number"),
    text("statSmallLabel", "Stat Small Label"),
    text("statSmallSub", "Stat Small Sub"),
    text("approachTitle", "Approach Title"),
    text("approachSubtitle", "Approach Subtitle"),
    array(
      "approachItems",
      [text("title", "Title"), textarea("description", "Description")],
      "Approach Items",
    ),
    text("communitiesTitle", "Communities Title"),
    text("communitiesSubtitle", "Communities Subtitle"),
    array(
      "communities",
      [
        text("name", "Name"),
        text("subtitle", "Subtitle"),
        textarea("description", "Description"),
      ],
      "Communities",
    ),
  ],
};
