import PageHeader from "@/components/PageHeader";
import { FileText, Calendar, ExternalLink } from "lucide-react";

const memos = [
  {
    title: "NSTP Office Memorandum 01 s.2026",
    description:
      "Announces the introduction of a newly designed NSTP emblem for the University of Nueva Caceres.",
    date: "2026",
    type: "Memorandum",
  },
  {
    title: "NSTP Office Memorandum 02 s.2026",
    description:
      "Guidelines regarding student council-related absences and religious observance scheduling conflicts with mandatory NSTP coursework.",
    date: "2026",
    type: "Guidelines",
  },
];

export default function MemosGuidelinesPage() {
  return (
    <>
      <PageHeader
        title="Memos & Guidelines"
        subtitle="Official announcements and guidelines from the NSTP Office"
      />

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {memos.map((memo) => (
              <div
                key={memo.title}
                className="group border border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-red-200 hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-gray-100 text-red-700">
                      <FileText className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="bg-red-50 px-2.5 py-0.5 text-xs font-medium text-red-600">
                          {memo.type}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-gray-400">
                          <Calendar className="h-3 w-3" />
                          {memo.date}
                        </span>
                      </div>
                      <h3 className="mt-2 font-heading text-base text-gray-900">
                        {memo.title}
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {memo.description}
                      </p>
                    </div>
                  </div>
                  <ExternalLink className="h-4 w-4 shrink-0 text-gray-300 transition-colors group-hover:text-red-600" />
                </div>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-gray-400">
            More memoranda and guidelines will be posted as they are released.
          </p>
        </div>
      </section>
    </>
  );
}
