import PageHeader from "@/components/PageHeader";

export default function OrganizationalChartPage() {
  return (
    <>
      <PageHeader
        title="Organizational Chart"
        subtitle="NSTP Office structure and leadership"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Organizational Chart" },
        ]}
      />

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* Top level */}
          <div className="flex flex-col items-center">
            <div className="border-2 border-red-700 bg-black px-8 py-5 text-center shadow-lg">
              <p className="font-heading text-lg text-white">
                NSTP Director
              </p>
              <p className="mt-1 text-sm text-gray-400">
                Office of the Director
              </p>
            </div>

            <div className="h-10 w-px bg-gray-400" />

            {/* Mid level */}
            <div className="border border-red-200 bg-red-50 px-8 py-4 text-center">
              <p className="font-heading text-base text-gray-900">
                NSTP Coordinator
              </p>
              <p className="mt-1 text-xs text-gray-600">
                Program Coordination
              </p>
            </div>

            <div className="h-10 w-px bg-gray-400" />

            {/* Branches connector */}
            <div className="h-px w-full max-w-2xl bg-gray-400" />

            {/* Department level */}
            <div className="mt-0 grid w-full max-w-3xl grid-cols-1 gap-6 sm:grid-cols-3">
              {[
                { title: "CWTS", subtitle: "Civic Welfare Training Service" },
                { title: "ROTC", subtitle: "Reserve Officers' Training Corps" },
                { title: "LTS", subtitle: "Literacy Training Service" },
              ].map((dept) => (
                <div key={dept.title} className="flex flex-col items-center">
                  <div className="h-10 w-px bg-gray-400" />
                  <div className="w-full border border-gray-200 bg-white p-5 text-center shadow-sm">
                    <p className="font-heading text-base text-red-700">
                      {dept.title}
                    </p>
                    <p className="mt-1 text-xs text-gray-500">
                      {dept.subtitle}
                    </p>
                  </div>

                  <div className="h-6 w-px bg-gray-300" />

                  <div className="w-full border border-gray-100 bg-gray-50 p-4 text-center">
                    <p className="text-sm font-medium text-gray-700">
                      Faculty & Staff
                    </p>
                    <p className="mt-1 text-xs text-gray-400">
                      Instructors & Facilitators
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Student Council */}
            <div className="mt-10 h-px w-full max-w-2xl bg-gray-200" />
            <div className="mt-6 border border-red-200 bg-red-50 px-8 py-4 text-center">
              <p className="font-heading text-base text-gray-900">
                NSTP Student Council
              </p>
              <p className="mt-1 text-xs text-gray-600">
                Student Representatives
              </p>
            </div>
          </div>

          <p className="mt-12 text-center text-sm text-gray-400 italic">
            Replace this placeholder with the official UNC NSTP organizational
            chart image.
          </p>
        </div>
      </section>
    </>
  );
}
