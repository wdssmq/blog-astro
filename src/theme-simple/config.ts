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
        postsSize: 37,
        rssSize: 37,
    },
    func: {
        sortPosts: (a: any, b: any) => {
            return a.data.pubDate < b.data.pubDate ? 1 : -1;
        }
    }
};
