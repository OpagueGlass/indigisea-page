import type { GlobalConfig } from "payload";
import { array, number, text, textarea } from "../fields";

export const Blogs: GlobalConfig = {
  slug: "blogs",
  label: "Blog Page",
  admin: { group: "Pages" },
  access: { read: () => true },
  fields: [
    text("headerTitle", "Header Title"),
    textarea("headerSubtitle", "Header Subtitle"),
    text("readMore", "Read More"),
    text("loadMore", "Load More"),
    text("newsletterTitle", "Newsletter Title"),
    textarea("newsletterSubtitle", "Newsletter Subtitle"),
    text("newsletterPlaceholder", "Newsletter Placeholder"),
    text("newsletterButton", "Newsletter Button"),
    array(
      "categories",
      [text("name", "Name"), number("count", "Count")],
      "Categories",
    ),
    array(
      "posts",
      [
        number("postId", "Post ID"),
        text("title", "Title"),
        text("category", "Category"),
        text("date", "Date"),
        textarea("excerpt", "Excerpt"),
      ],
      "Posts",
    ),
  ],
};
