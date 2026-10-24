// Helpers shared by the blog pages, the feed and the footer.
import { getCollection, type CollectionEntry } from "astro:content";

export type Post = CollectionEntry<"blog">;

/** The published posts (drafts left out), newest first. */
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export const postUrl = (post: Post) => `/blog/${post.id}/`;

/** "24 Oct 2026". */
export const formatDate = (date: Date) =>
  date.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });

/** Minutes to read, at about 200 words a minute. */
export const readingMinutes = (post: Post) =>
  Math.max(1, Math.round((post.body ?? "").split(/\s+/).filter(Boolean).length / 200));
