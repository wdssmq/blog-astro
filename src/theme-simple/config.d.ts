import { CollectionEntry } from "astro:content";

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

export interface Search {
    title: string
    description: string
}

export interface Wailne {
    enable: boolean
    serverURL: string
}

export interface Opt {
    postsSize: number
    rssSize: number
    curFullYear: string
}

export interface pagination {
    current: number
    total: number
    tpl: string
    prev: {
        num: number
        link: string
    }
    next: {
        num: number
        link: string
    }

}

export interface Func {
    paresTags: (config: Config) => void
    sortPosts: (a: CollectionEntry<blog>, b: CollectionEntry<blog>) => number
    getPagination: (count: number, size: number, current?: number, tpl?: string) => pagination
}

export interface RequiredConfig {
    site: Site;
    author: Author;
    menus: MenuItem[];
    archive: Archive;
    search: Search;
    waline: Wailne;
    opt: Opt;
    func: Func;
}

export interface UserConfig {
    site?: Partial<Site>;
    author?: Partial<Author>;
    menus?: MenuItem[];
    archive?: Partial<Archive>;
    search?: Partial<Search>;
    waline?: Partial<Wailne>;
    opt?: Partial<Opt>;
    func?: Partial<Func>;
}

type ConfigKey = keyof RequiredConfig;
