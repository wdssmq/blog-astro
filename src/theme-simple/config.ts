import { SITE_TITLE, SITE_DESCRIPTION } from "../consts";

const today = new Date();
const copy = `© ${today.getFullYear()} YOUR NAME HERE.`;

export const config = {
    site: {
        url: "/",
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
        favicon: "/favicon.svg",
        image: "/placeholder-social.jpg", // default image for meta tag.
        copy: copy,
        locales: "zh-CN", // 'en-us'
    },
    author: {
        name: "Your Name",
        avatar: "/avatar.png",
        bio: "Your bio",
    },
    menus: [
        { name: 'Home', path: '/' },
        { name: 'Archive', path: '/archive' },
        { name: 'About', path: '/about' },
    ],
    archive: {
        title: "Archive",
        description: "Archive description",
    },
    opt: {
        postsSize: 13,
        rssSize: 37,
    },
    func: {
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
        }
    }
};
