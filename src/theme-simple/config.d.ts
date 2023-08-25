import { CollectionEntry } from 'astro:content';

export interface Site {
    url: string
    title: string
    description: string
    favicon: string
    image: string
    copy: string
    locales: string
}

export interface Author {
    name: string
    avatar: string
    bio: string
}

export interface MenuItem {
    name: string
    path: string
}

export interface Archive {
    title: string
    description: string
}

export interface Opt {
    postsSize: number
    rssSize: number
    curFullYear: string
}

export interface Func {
    paresTags: (config: Config) => void
    sortPosts: (a: CollectionEntry<blog>, b: CollectionEntry<blog>) => number
    getPagination: (count: number, size: number, current?: number, tpl?: string) => any
}

type keyOfConfig = "site" | "author" | "menus" | "archive" | "opt" | "func";

export interface RequiredConfig {
    site: Site;
    author: Author;
    menus: MenuItem[];
    archive: Archive;
    opt: Opt;
    func: Func;
}

export interface UserConfig {
    site?: Partial<Site>;
    author?: Partial<Author>;
    menus?: MenuItem[];
    archive?: Partial<Archive>;
    opt?: Partial<Opt>;
    func?: Partial<Func>;
}

