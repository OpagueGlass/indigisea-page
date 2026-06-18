import type { GlobalConfig } from "payload";
import { array, text } from "../fields";

export const Nav: GlobalConfig = {
  slug: "nav",
  label: "Navigation",
  admin: { group: "Site" },
  access: { read: () => true },
  fields: [
    text("brand", "Brand"),
    array(
      "items",
      [text("key", "Key"), text("label", "Label")],
      "Nav Items",
    ),
  ],
};
