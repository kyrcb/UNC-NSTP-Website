import PageHeader from "@/components/PageHeader";
import { Target } from "lucide-react";

const objectives = [
  "To promote and integrate values education, transformational leadership, and spirit of patriotism and nationalism among the Filipino youth.",
  "To encourage the youth to become civic and/or military leaders and volunteers whom could be called upon by the nation in times of need.",
  "To develop the youth's physical, moral, spiritual, intellectual, and social well-being.",
  "To train students to become community leaders and active participants in nation-building.",
  "To instill in the youth a sense of civic consciousness and teach them to practice the obligations, duties, and responsibilities of good citizenship.",
];

export default function ProgramObjectivesPage() {
  return (
    <>
      <PageHeader
        title="Program Objectives"
        subtitle="The goals that drive our service to the community"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Program Objectives" },
        ]}
      />

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {objectives.map((objective, i) => (
              <div
                key={i}
                className="flex gap-5 border border-gray-100 bg-white p-6 shadow-sm"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-red-700 font-heading text-sm text-white">
                  {i + 1}
                </div>
                <div className="pt-1.5">
                  <p className="leading-relaxed text-gray-600">{objective}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-black p-8 text-center sm:p-10">
            <Target className="mx-auto h-10 w-10 text-red-500" />
            <h3 className="mt-4 font-heading text-xl text-white">
              Our Commitment
            </h3>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-gray-400">
              The UNC NSTP Office is dedicated to achieving these objectives
              through innovative programs, meaningful community partnerships,
              and dedicated instruction.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
