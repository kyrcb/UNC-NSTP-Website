import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { ArrowRight, BookOpen, Target, Network, Users } from "lucide-react";

const aboutLinks = [
  {
    title: "What is NSTP?",
    description: "Learn about the National Service Training Program and its legal basis.",
    icon: BookOpen,
    href: "/about/what-is-nstp",
  },
  {
    title: "Program Objectives",
    description: "Discover the goals and objectives that guide our programs.",
    icon: Target,
    href: "/about/program-objectives",
  },
  {
    title: "Organizational Chart",
    description: "View the structure and leadership of the NSTP Office.",
    icon: Network,
    href: "/about/organizational-chart",
  },
  {
    title: "NSTP Student Council",
    description: "Meet the student leaders representing the NSTP community.",
    icon: Users,
    href: "/about/nstp-student-council",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Us"
        subtitle="Get to know the UNC National Service Training Program"
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2">
            {aboutLinks.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group flex gap-5 border border-gray-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-red-200 hover:shadow-md"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-gray-100 text-red-700 transition-colors group-hover:bg-red-700 group-hover:text-white">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-heading text-lg text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {item.description}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-red-700 group-hover:text-red-600">
                    View page
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Course Listings */}
          <div className="mt-16">
            <h2 className="font-heading text-2xl text-gray-900">
              NSTP Course Offerings
            </h2>
            <div className="mx-auto mt-2 h-1 w-16 bg-red-600" />

            <div className="mt-8 overflow-hidden border border-gray-200">
              <table className="w-full">
                <thead>
                  <tr className="bg-black text-left text-sm text-gray-300">
                    <th className="px-6 py-3.5 font-heading font-normal">
                      Course Code
                    </th>
                    <th className="px-6 py-3.5 font-heading font-normal">
                      Semester
                    </th>
                    <th className="hidden px-6 py-3.5 font-heading font-normal sm:table-cell">
                      Year
                    </th>
                    <th className="px-6 py-3.5 font-heading font-normal">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {["221", "321", "421", "521", "621"].map((code, i) => (
                    <tr
                      key={code}
                      className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className="px-6 py-3.5 text-sm font-medium text-red-700">
                        NSTP {code}
                      </td>
                      <td className="px-6 py-3.5 text-sm text-gray-600">
                        1st Semester
                      </td>
                      <td className="hidden px-6 py-3.5 text-sm text-gray-600 sm:table-cell">
                        2025-2026
                      </td>
                      <td className="px-6 py-3.5 text-sm text-gray-500 italic">
                        Course description to be added
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
