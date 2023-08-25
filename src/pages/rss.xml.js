import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { config } from "@/theme-simple/config";

export async function get(context) {
    const posts = (await getCollection("blog")).sort(config.func.sortPosts).slice(0, config.opt.rssSize);
    return rss({
        title: config.site.title,
        description: config.site.description,
        site: context.site,
        items: posts.map((post) => ({
            ...post.data,
            link: `/blog/${post.slug}/`,
        })),
    });
}
