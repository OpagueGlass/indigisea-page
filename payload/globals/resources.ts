import type { GlobalConfig } from "payload";
import { array, stringList, text, textarea } from "../fields";

export const Resources: GlobalConfig = {
  slug: "resources",
  label: "Resources Page",
  admin: { group: "Pages" },
  access: { read: () => true },
  fields: [
    text("headerTitle", "Header Title"),
    textarea("headerSubtitle", "Header Subtitle"),
    text("dictionariesTitle", "Dictionaries Title"),
    text("dictionariesSubtitle", "Dictionaries Subtitle"),
    text("dictionaryCardLabel", "Dictionary Card Label"),
    text("dictionaryButton", "Dictionary Button"),
    text("statusActive", "Status Active"),
    text("statusInProgress", "Status In Progress"),
    array(
      "dictionaries",
      [
        text("language", "Language"),
        text("words", "Words"),
        text("status", "Status"),
      ],
      "Dictionaries",
    ),
    text("corporaTitle", "Corpora Title"),
    text("corporaSubtitle", "Corpora Subtitle"),
    text("corporaRestricted", "Corpora Restricted"),
    text("corporaButton", "Corpora Button"),
    array(
      "corpora",
      [
        text("title", "Title"),
        textarea("description", "Description"),
        stringList("tags", "Tags"),
      ],
      "Corpora",
    ),
    text("publicationsTitle", "Publications Title"),
    text("publicationsSubtitle", "Publications Subtitle"),
    array(
      "publications",
      [
        text("title", "Title"),
        text("type", "Type"),
        text("venue", "Venue"),
        text("status", "Status"),
      ],
      "Publications",
    ),
    text("toolsTitle", "Tools Title"),
    text("toolsSubtitle", "Tools Subtitle"),
    text("toolsButton", "Tools Button"),
    array(
      "tools",
      [
        text("initial", "Initial"),
        text("title", "Title"),
        textarea("description", "Description"),
      ],
      "Tools",
    ),
  ],
};
