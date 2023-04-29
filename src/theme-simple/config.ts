import logo from "@/theme-simple/assets/media/logo.png";
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts";

const today = new Date();
const copy = `© ${today.getFullYear()} YOUR NAME HERE.`;

export const config = {
    site: {
        url: "/",
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
        copy: copy,
        locales: "zh-CN", // 'en-us'
    },
    author: {
        name: "Your Name",
        avatar: logo,
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
};
