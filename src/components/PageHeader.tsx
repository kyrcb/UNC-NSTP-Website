interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: { label: string; href?: string }[];
}

export default function PageHeader({
  title,
  subtitle,
  breadcrumbs,
}: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-black">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 50%, rgba(5,112,226,0.3) 0%, transparent 50%), radial-gradient(circle at 75% 50%, rgba(5,112,226,0.2) 0%, transparent 50%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        {breadcrumbs && (
          <nav className="mb-4 flex items-center gap-2 text-sm text-gray-400">
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <span>/</span>}
                {crumb.href ? (
                  <a
                    href={crumb.href}
                    className="transition-colors hover:text-red-400"
                  >
                    {crumb.label}
                  </a>
                ) : (
                  <span className="text-red-400">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <h1 className="font-heading text-3xl text-white sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 max-w-2xl text-lg text-gray-400">{subtitle}</p>
        )}
        <div className="mt-6 h-1 w-20 bg-red-600" />
      </div>
    </section>
  );
}
