# 上线指南（《你的后宫人格鉴定书》）

> 适用于当前前端静态站点版本（React + Vite，无后端）。

## 0. 前置条件

- Node.js 20+
- npm 10+

本地先确认：

```bash
npm install
npm run build
```

构建产物目录为 `dist/`。

---

## 1. 最快上线（推荐）——Vercel

1. 把仓库推到 GitHub/GitLab。
2. 登录 [Vercel](https://vercel.com/)，点击 **Add New Project**。
3. 选择仓库后，构建配置：
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. 点击 Deploy，几分钟内获得正式 URL。
5. 绑定自定义域名（可选）：Project -> Settings -> Domains。

### SPA 路由说明

本项目为前端路由（`react-router-dom`），Vercel 已通过 `vercel.json` 处理了重写，刷新子路由不会 404。

---

## 2. 备选上线——Netlify

1. 登录 [Netlify](https://netlify.com/)，新建站点并连接仓库。
2. 构建配置：
   - Build command: `npm run build`
   - Publish directory: `dist`
3. 部署完成后得到 URL。

### SPA 路由说明

仓库内的 `public/_redirects` 已配置：

```text
/* /index.html 200
```

可确保 `/result`、`/almanac` 等刷新可访问。

---

## 3. 备选上线——Cloudflare Pages

1. 登录 Cloudflare Pages -> Create project -> 连接仓库。
2. 构建配置：
   - Build command: `npm run build`
   - Build output directory: `dist`
3. 若需要，可在 Pages 设置里配置自定义域。

Cloudflare Pages 对 Vite 静态产物兼容良好。

---

## 4. 自建服务器（Nginx）

适合你希望完全掌控环境时：

```bash
npm install
npm run build
```

把 `dist/` 上传到服务器（如 `/var/www/zhenhuan`），Nginx 配置关键点：

- 静态文件根目录指向 `dist/`
- `try_files $uri /index.html;` 处理 SPA 刷新

示例（简化版）：

```nginx
server {
  listen 80;
  server_name your-domain.com;

  root /var/www/zhenhuan;
  index index.html;

  location / {
    try_files $uri /index.html;
  }
}
```

---

## 5. 上线检查清单（建议）

- [ ] 首页文案、免责声明、按钮文案是否最终版
- [ ] 30 题都可作答，上一题回退正常
- [ ] 结果页展示顺序正确（判词/最终人物/雷达/相近人物等）
- [ ] 手机端（iPhone/Android）与桌面端布局正常
- [ ] 刷新 `/quiz`、`/result`、`/almanac` 不 404
- [ ] 配置自定义域名与 HTTPS

---

## 6. 生产环境常见问题

### Q1：刷新子路由 404
A：没有做 SPA fallback。请确认：
- Vercel：存在 `vercel.json` rewrite
- Netlify：存在 `public/_redirects`
- Nginx：`try_files $uri /index.html;`

### Q2：部署后资源路径错乱
A：如果部署在子路径（如 `/app/`），需要设置 Vite 的 `base`。

```bash
VITE_BASE_PATH=/app/ npm run build
```

然后确保服务器也以该前缀提供资源。
