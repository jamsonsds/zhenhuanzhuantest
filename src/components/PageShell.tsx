import { Link } from 'react-router-dom';

interface PageShellProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  backTo?: string;
}

export default function PageShell({ title, subtitle, children, backTo }: PageShellProps) {
  return (
    <main className="page-shell">
      <div className="panel">
        {backTo ? (
          <Link to={backTo} className="text-link">
            ← 返回
          </Link>
        ) : null}
        <h1>{title}</h1>
        {subtitle ? <p className="subtitle">{subtitle}</p> : null}
        {children}
      </div>
    </main>
  );
}
