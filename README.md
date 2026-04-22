# 你的后宫人格鉴定书（Next.js + Vercel）

一个可直接部署到 Vercel 的前端测评网站：
- 30 题（30 道宫廷剧情选择题）
- 前端本地计算结果（无数据库、无登录）
- 输出：最终人物 + 2 个相近人物（百分比）

## 技术栈
- Next.js 14（App Router）
- TypeScript
- Tailwind CSS
- sessionStorage 保存本次测评状态

## 项目结构

```text
app/
  page.tsx                 # 首页
  guide/page.tsx           # 引导页
  quiz/page.tsx            # 答题页
  generate/page.tsx        # 生成页
  result/page.tsx          # 结果页
  almanac/page.tsx         # 图鉴页
  layout.tsx
  globals.css
components/
  PageFrame.tsx
  ProgressBar.tsx
  RadarOutline.tsx
lib/
  constants.ts
  types.ts
  session.ts
  data/
    questions.ts
    characters.ts
    characterProfiles.ts
  engine/
    scoring.ts
```

## 一句话部署（小白版）
请看 `DEPLOY.md`，按“GitHub + Vercel”逐点击步骤操作。
