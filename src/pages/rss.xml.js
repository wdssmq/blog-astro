import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { config } from "@/theme-simple/config";
import { SITE_TITLE, SITE_DESCRIPTION } from "@/consts";

export async function get(context) {
    const posts = (await getCollection("blog")).sort(config.func.sortPosts).slice(0, config.opt.rssSize);
    return rss({
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
        site: context.site,
        items: posts.map((post) => ({
            ...post.data,
            link: `/blog/${post.slug}/`,
        })),
    });
}
