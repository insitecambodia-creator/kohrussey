// The blog: one Markdown file per post in src/content/blog, edited in Git or with the editor at /admin.
// The file name is the post's web address: best-time-to-visit.md becomes /blog/best-time-to-visit/.
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: ({ image }) =>
    z
      .object({
        /** The headline (H1). Also the title shown in search results unless `seoTitle` is set. */
        title: z.string().min(1),
        /** The exact title for search results and browser tabs, when it should differ from the headline. */
        seoTitle: z.string().optional(),
        /** The meta description shown under the title in search results. About 120 to 160 characters. */
        description: z.string().min(50).max(200),
        date: z.coerce.date(),
        /** Set when the post is changed in a meaningful way; shown on the post and in the sitemap. */
        updated: z.coerce.date().optional(),
        cover: image().optional(),
        coverAlt: z.string().optional(),
        tags: z.array(z.string()).default([]),
        /** A draft is left out of the site completely (pages, feed and sitemap). */
        draft: z.boolean().default(false),
        /** Keep this post out of search results (it is still on the site and in the feed). */
        noindex: z.boolean().default(false),
        /** The address of the original, for a post first published elsewhere. */
        canonical: z.url().optional(),
      })
      .refine((post) => !post.cover || post.coverAlt, {
        message: "coverAlt (a description of the cover photo) is required when there is a cover photo",
        path: ["coverAlt"],
      }),
});

export const collections = { blog };
