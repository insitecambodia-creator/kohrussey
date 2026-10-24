import rss from "@astrojs/rss";
import type { APIRoute } from "astro";
import { getPosts, postUrl } from "../lib/blog";
import { site } from "../lib/site";

export const GET: APIRoute = async ({ site: siteUrl }) => {
  const posts = await getPosts();
  return rss({
    title: `${site.name} blog`,
    description: `News, travel tips and stories from ${site.name}, a private island resort in Cambodia.`,
    site: siteUrl ?? "https://www.kohrusseyresort.com",
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: postUrl(post),
      categories: post.data.tags,
    })),
    customData: "<language>en</language>",
  });
};
