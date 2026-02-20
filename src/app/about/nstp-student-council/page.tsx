import PageHeader from "@/components/PageHeader";
import { User } from "lucide-react";

const officers = [
  { position: "President", name: "Student Name" },
  { position: "Vice President", name: "Student Name" },
  { position: "Secretary", name: "Student Name" },
  { position: "Treasurer", name: "Student Name" },
  { position: "Auditor", name: "Student Name" },
  { position: "P.R.O.", name: "Student Name" },
];

export default function StudentCouncilPage() {
  return (
    <>
      <PageHeader
        title="NSTP Student Council"
        subtitle="Meet the student leaders of the NSTP community"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Student Council" },
        ]}
      />

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-heading text-2xl text-gray-900">
              Council Officers
            </h2>
            <p className="mt-2 text-gray-500">
              Academic Year 2025–2026
            </p>
            <div className="mx-auto mt-4 h-1 w-16 bg-red-600" />
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {officers.map((officer) => (
              <div
                key={officer.position}
                className="border border-gray-100 bg-white p-6 text-center shadow-sm"
              >
                <div className="mx-auto flex h-20 w-20 items-center justify-center bg-gray-100">
                  <User className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="mt-4 font-heading text-lg text-gray-900">
                  {officer.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-red-700">
                  {officer.position}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-gray-400 italic">
            Update with actual student council officer names and photos.
          </p>
        </div>
      </section>
    </>
  );
}
