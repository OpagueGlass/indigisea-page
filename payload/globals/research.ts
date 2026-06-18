import type { GlobalConfig } from "payload";
import { array, text, textarea } from "../fields";

export const Research: GlobalConfig = {
  slug: "research",
  label: "Research Page",
  admin: { group: "Pages" },
  access: { read: () => true },
  fields: [
    text("headerTitle", "Header Title"),
    textarea("headerSubtitle", "Header Subtitle"),
    text("area1Badge", "Area 1 Badge"),
    text("area1Title", "Area 1 Title"),
    textarea("area1Intro", "Area 1 Intro"),
    array(
      "area1Cards",
      [text("title", "Title"), textarea("description", "Description")],
      "Area 1 Cards",
    ),
    text("area2Badge", "Area 2 Badge"),
    text("area2Title", "Area 2 Title"),
    textarea("area2Intro", "Area 2 Intro"),
    textarea("area2Body", "Area 2 Body"),
    array(
      "area2Stats",
      [
        text("stat", "Stat"),
        text("label", "Label"),
        textarea("description", "Description"),
      ],
      "Area 2 Stats",
    ),
    text("area3Badge", "Area 3 Badge"),
    text("area3Title", "Area 3 Title"),
    textarea("area3Intro", "Area 3 Intro"),
    text("area3PrinciplesTitle", "Area 3 Principles Title"),
    array(
      "area3Principles",
      [text("title", "Title"), textarea("description", "Description")],
      "Area 3 Principles",
    ),
  ],
};
