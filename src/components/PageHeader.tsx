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
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-black">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(220,38,38,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(220,38,38,0.15) 0%, transparent 50%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, white 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        {breadcrumbs && (
          <nav className="mb-5 flex items-center gap-2 text-sm text-gray-400">
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <span className="text-gray-600">/</span>}
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
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-400">
            {subtitle}
          </p>
        )}
        <div className="mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-red-600 to-red-500" />
      </div>
    </section>
  );
}
