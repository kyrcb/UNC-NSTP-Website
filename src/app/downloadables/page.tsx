import PageHeader from "@/components/PageHeader";
import { Download, FileDown } from "lucide-react";

const downloads = [
  {
    category: "Forms",
    items: [
      { name: "NSTP Enrollment Form", format: "PDF", size: "—" },
      { name: "NSTP Completion Certificate Request", format: "PDF", size: "—" },
      { name: "Community Service Report Form", format: "DOCX", size: "—" },
    ],
  },
  {
    category: "Guidelines",
    items: [
      { name: "NSTP Student Handbook", format: "PDF", size: "—" },
      { name: "Grading System Guidelines", format: "PDF", size: "—" },
      { name: "Attendance Policy", format: "PDF", size: "—" },
    ],
  },
];

export default function DownloadablesPage() {
  return (
    <>
      <PageHeader
        title="Downloadables"
        subtitle="Access NSTP forms, documents, and resources"
      />

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {downloads.map((section) => (
            <div key={section.category} className="mb-14">
              <h2 className="font-heading text-xl text-gray-900">
                {section.category}
              </h2>
              <div className="mt-2 h-1 w-12 rounded-full bg-red-600" />

              <div className="mt-6 space-y-3">
                {section.items.map((item) => (
                  <div
                    key={item.name}
                    className="group flex items-center justify-between rounded-xl border border-gray-100 bg-white px-6 py-4 shadow-sm transition-all duration-300 hover:border-red-200 hover:shadow-md"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-red-700 transition-colors duration-300 group-hover:bg-red-50">
                        <FileDown className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {item.name}
                        </p>
                        <p className="text-xs text-gray-400">
                          {item.format} &middot; {item.size}
                        </p>
                      </div>
                    </div>
                    <button className="flex items-center gap-1.5 rounded-lg bg-gray-100 px-4 py-2 text-xs font-medium text-red-700 transition-all duration-200 hover:bg-red-700 hover:text-white hover:shadow-lg hover:shadow-red-700/25">
                      <Download className="h-3.5 w-3.5" />
                      Download
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <p className="text-center text-sm text-gray-400 italic">
            Update with actual downloadable files and documents.
          </p>
        </div>
      </section>
    </>
  );
}
