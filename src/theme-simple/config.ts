import type { RequiredConfig, ConfigKey } from "@/theme-simple/config.d";
import { usrConfig } from "@/consts";

const defConfig: RequiredConfig = {
    site: {
        url: "/", // http://localhost:4321/ ← tailing slash is required.
        title: "My website.",
        description: "Welcome to my website!",
        favicon: "/favicon.svg",
        image: "/placeholder-social.jpg", // default image for meta tag.
        copy: "©{curFullYear} YOUR NAME HERE.", // default copy for footer.
        locales: "zh-CN", // 'en-us'
    },
    author: {
        name: "Your Name",
        avatar: "/avatar.png",
        bio: "Your bio",
    },
    menus: [
        { name: "Home", path: "/" },
        { name: "Archive", path: "/archive" },
        { name: "About", path: "/about" },
        { name: "Search", path: "/search" },
    ],
    archive: {
        title: "Archive",
        description: "Archive description",
    },
    search: {
        title: "Search",
        description: "Search description",
    },
    waline: {
        enable: false,
        serverURL: "https:///your-domain.vercel.app",
    },
    opt: {
        postsSize: 13,
        rssSize: 37,
        curFullYear: "", // will be set in func.paresTags
    },
    func: {
        paresTags: (_config: RequiredConfig) => {
            const curFullYear = new Date().getFullYear().toString();
            _config.opt.curFullYear = curFullYear;
            _config.site.copy = _config.site.copy.replace("{curFullYear}", curFullYear);
        },
        sortPosts: (a: any, b: any) => {
            return a.data.pubDate < b.data.pubDate ? 1 : -1;
        },
        getPagination: (count: number, size: number, current: number = 1, tpl: string = "/page/%num%/") => {
            const total = Math.ceil(count / size);
            const prevNum = current > 1 ? current - 1 : -1;
            const nextNum = current < total ? current + 1 : -1;
            const _link = (num: number) => {
                return tpl.replace("%num%", num.toString());
            };
            return {
                current: current,
                total: total,
                tpl: tpl,
                prev: {
                    num: prevNum,
                    link: prevNum > 0 ? _link(prevNum) : "",
                },
                next: {
                    num: nextNum,
                    link: nextNum > 0 ? _link(nextNum) : "",
                },
            };
        },
    },
};

// 以 defConfig 为基础，使用 usrConfig 中的设置进行覆盖或合并；
const config: RequiredConfig = defConfig;
for (const key in usrConfig) {
    if (Object.prototype.hasOwnProperty.call(usrConfig, key)) {
        const curKey = key as ConfigKey;
        const curEle = usrConfig[curKey];
        if (Array.isArray(curEle)) {
            config[curKey] = curEle as any;
        } else if (typeof curEle === "object") {
            config[curKey] = { ...config[curKey], ...curEle as any };
        }
    }
}
config.func.paresTags(config);

export { config };

import { z } from "astro:content";
export const blogSchema = {
    // Type-check frontmatter using a schema
    schema: z.object({
        title: z.string(),
        description: z.string(),
        // Transform string to Date object
        pubDate: z
            .string()
            .or(z.date())
            .transform((val) => new Date(val)),
        updatedDate: z
            .string()
            .optional()
            .transform((str) => (str ? new Date(str) : undefined)),
        heroImage: z.string().optional(),
        tags: z.array(z.string().or(z.number()).transform((val) => val.toString())),
    }),
};
