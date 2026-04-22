# 云端部署指南（不需要本地开发）

> 目标：你只用 GitHub + Vercel 后台点击，就能上线。

## 1) 在 GitHub 创建仓库
1. 打开 GitHub，点击 `New repository`
2. 仓库名建议：`zhenhuan-personality-book`
3. 点击 `Create repository`

## 2) 把本项目代码上传到 GitHub
你可以用网页上传（Add file -> Upload files），也可以让懂代码的同事帮你 push。

## 3) 在 Vercel 导入仓库
1. 登录 [Vercel](https://vercel.com)
2. 点击 `Add New...` -> `Project`
3. 选择你刚创建的 GitHub 仓库，点击 `Import`

## 4) Vercel 构建参数（Next.js 默认就能识别）
- Framework Preset: `Next.js`
- Build Command: 默认即可
- Output Directory: 默认即可

然后点击 `Deploy`。

## 5) 部署完成后访问
Vercel 会给你一个：
- `https://你的项目名.vercel.app`

打开就是你的网站。

## 6) 自定义域名（可选）
1. Project -> Settings -> Domains
2. 输入域名并添加
3. 按提示去域名服务商配置 DNS

## 7) 上线检查清单
- 首页能点“即刻入宫”
- 引导页有“退出即重置”提醒
- 答题页能上一题/下一题
- 30 题完成后能到结果页
- 结果页有图鉴入口

## 常见问题：报错找不到 dist
如果你在 Vercel 构建日志里看到：`No Output Directory named "dist" found`，说明项目设置还残留了旧版 Vite 配置。

处理方法（二选一）：
1. 到 Vercel 项目设置把 Output Directory 改回默认（留空）
2. 保持当前仓库中的 `vercel.json`（已固定为 Next.js 的 `.next` 输出）

