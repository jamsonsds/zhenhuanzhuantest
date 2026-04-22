import Link from 'next/link';

interface Props {
  title: string;
  subtitle?: string;
  backHref?: string;
  children: React.ReactNode;
}

export default function PageFrame({ title, subtitle, backHref, children }: Props) {
  return (
    <main className="card flex flex-col gap-5">
      {backHref ? (
        <Link className="text-sm text-palace-main hover:underline" href={backHref}>
          ← 返回
        </Link>
      ) : null}
      <header className="space-y-2">
        <h1 className="text-2xl font-bold md:text-3xl">{title}</h1>
        {subtitle ? <p className="text-sm text-palace-muted md:text-base">{subtitle}</p> : null}
      </header>
      {children}
    </main>
  );
}
