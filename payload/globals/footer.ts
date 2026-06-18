import type { GlobalConfig } from "payload";
import { text, textarea } from "../fields";

export const Footer: GlobalConfig = {
  slug: "footer",
  label: "Footer",
  admin: { group: "Site" },
  access: { read: () => true },
  fields: [
    textarea("tagline", "Tagline"),
    text("projectTitle", "Project Title"),
    text("connectTitle", "Connect Title"),
    text("rights", "Rights"),
  ],
};
