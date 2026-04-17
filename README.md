# 你的后宫人格鉴定书（V1）

一个可本地运行的娱乐型人格测评站点，完成 30 题后输出 8 维人格画像、最终人物与 2 个相近人物。

## 技术方案

- **框架**：React + TypeScript + Vite。
- **路由**：React Router，覆盖首页、引导、答题、生成、结果、图鉴六个页面。
- **状态管理**：Context + useState（前端内存会话），不依赖后端。
- **测评引擎**：
  - 标准题（20）按 4 档选项计分并归一到 1~5。
  - 剧情题（10）按选项映射到 8 维分值。
  - 两类题按 `标准:剧情 = 6:4` 进行维度融合。
  - 与 15 人物矩阵做相似度计算，输出 Top1 + Top2。
- **可扩展性策略**：
  - `src/types` 定义稳定域模型。
  - `src/data` 仅放题库、矩阵、文案，后续可替换为 CMS/API。
  - `src/engine` 纯函数化，方便 A/B 试验不同打分模型。

## 目录结构

```text
src/
  components/
    PageShell.tsx
    ProgressHeader.tsx
    RadarChart.tsx
    TestContext.tsx
  data/
    characters.ts
    dimensions.ts
    questions.ts
  engine/
    scoring.ts
  pages/
    HomePage.tsx
    IntroPage.tsx
    QuizPage.tsx
    GeneratePage.tsx
    ResultPage.tsx
    AlmanacPage.tsx
  styles/
    global.css
  types/
    domain.ts
  App.tsx
  main.tsx
```

## 启动

```bash
npm install
npm run dev
```

## 后续扩展建议

- 把 `src/data/*.ts` 平滑替换为 JSON 或远程配置。
- 增加海报组件与 `html2canvas` 导出逻辑。
- 加入匿名用户 ID + 结果快照存储，实现可分享 URL。


## 上线

详见 `DEPLOY.md`，包含 Vercel / Netlify / Cloudflare Pages / Nginx 四种方式，以及 SPA 路由刷新防 404 配置。
