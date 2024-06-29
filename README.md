# Blog Astro

一个基于 Astro 的静态博客；

打算仿一个 gridea 主题作为练习：「[getgridea/gridea-theme-simple: 一个漂亮的 Gridea 主题 Simple](https://github.com/getgridea/gridea-theme-simple "getgridea/gridea-theme-simple: 一个漂亮的 Gridea 主题 Simple")」；


## 使用

wdssmq/blog-astro: [https://github.com/wdssmq/blog-astro](https://github.com/wdssmq/blog-astro "wdssmq/blog-astro: 一个基于 Astro 的静态博客；")

1、使用上面的仓库作为模板，创建一个新的仓库；

2、克隆到本地；

3、安装依赖及运行，推荐使用 pnpm；

```bash
pnpm install
# 调试开发
npm run dev
# 构建
npm run build

```

4、各种说明：

1. 这东西虽然可以当博客，但并没有一般博客意义上的「主题」规范，姑且仍然尝试将文件放到了 `src/theme-simple` 目录下，`src/pages` 则因为 Astro 的限制，只能放外边；
2. `src/theme-simple/config.ts` 用于预置和合并配置，自定义则在 `src/consts.ts` 中；
3. 文章内容路径为 `src/content`，可以符号链接或快捷方式到其他地方方便管理；
4. 内置了一个「关于」页面，路径 `src/content/pages/about.md`，**应该是不能删除，其他文件名也并不会被解析为新页面**；
5. 「文章」存放于 `src/content/blog` 路径内，可自行清空后新建；

5、评论设置：

1. 参考文档部署 Waline 评论系统: [https://waline.js.org/](https://waline.js.org/ "Waline | Waline")；
2. 在 `src/consts.ts` 中配置 `waline` 字段：

```js
    waline: {
        enable: true, // 启用评论
        serverURL: "https://your-domain.vercel.app", // 修改为你的评论服务器地址
    },

```

6、更新：

1. 克隆或下载 [wdssmq/blog-astro](https://github.com/wdssmq/blog-astro "wdssmq/blog-astro: 一个基于 Astro 的静态博客；") 仓库；
2. 使用 Beyond Compare 或其他工具比较差异；
3. 按如下说明覆盖文件：
   - `src/content/config.ts`；「2023-08-26：此文件内配置将从 `src/theme-simple/config.ts` 引入」
   - `src/theme-simple` 内所有文件；「2023-08-26：原有的自定义配置复制到新版 `src/consts.ts` 内」
   - `src/pages` 内的所有文件；
   - `package.json`；
4. 额外对比 `public` `astro.config.mjs` `src/consts.ts` 内容；
5. 重新安装依赖然后调试运行；

推荐：[tip. 额外的使用或更新说明 · Issue #4 · wdssmq/blog-astro](https://github.com/wdssmq/blog-astro/issues/4 "tip. 额外的使用或更新说明 · Issue #4 · wdssmq/blog-astro")；「提供了 Beyond Compare 的排除规则」


## 文档

入门指南 🚀 Astro 文档：

[https://docs.astro.build/zh-cn/getting-started/](https://docs.astro.build/zh-cn/getting-started/ "入门指南 🚀 Astro 文档")

astro/examples/blog at latest · withastro/astro · GitHub：

[https://github.com/withastro/astro/tree/latest/examples/blog?on=github#astro-starter-kit-blog](https://github.com/withastro/astro/tree/latest/examples/blog?on=github#astro-starter-kit-blog "astro/examples/blog at latest · withastro/astro · GitHub")


## 投喂支持

爱发电：[https://afdian.net/a/wdssmq](https://afdian.net/a/wdssmq "沉冰浮水正在创作和 z-blog 相关或无关的各种有用或没用的代码 | 爱发电")

哔哩哔哩：[https://space.bilibili.com/44744006/video](https://space.bilibili.com/44744006/video "沉冰浮水的个人空间\_哔哩哔哩\_bilibili")「投币或充电」「[大会员卡券领取 - bilibili](https://account.bilibili.com/account/big/myPackage "大会员卡券领取 - bilibili")」

RSS 订阅：[https://feed.wdssmq.com/](https://feed.wdssmq.com/ "沉冰浮水博客的 RSS 订阅地址") 「[「言说」RSS 是一种态度！！](https://www.wdssmq.com/post/20201231613.html "「言说」RSS 是一种态度！！")」

在更多平台关注我：[https://www.wdssmq.com/guestbook.html#其他出没站点和信息](https://www.wdssmq.com/guestbook.html#%E5%85%B6%E4%BB%96%E5%87%BA%E6%B2%A1%E5%9C%B0%E7%82%B9%E5%92%8C%E4%BF%A1%E6%81%AF "在更多平台关注我")

更多「小代码」：[https://cn.bing.com/search?q=小代码+沉冰浮水](https://cn.bing.com/search?q=%E5%B0%8F%E4%BB%A3%E7%A0%81+%E6%B2%89%E5%86%B0%E6%B5%AE%E6%B0%B4 "小代码 沉冰浮水 - 必应搜索")

<!-- ##################################### -->

