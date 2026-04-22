import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '你的后宫人格鉴定书',
  description: '娱乐一点，但看透一点。'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>
        <div className="mx-auto min-h-screen w-full max-w-4xl px-4 py-6">{children}</div>
      </body>
    </html>
  );
}
