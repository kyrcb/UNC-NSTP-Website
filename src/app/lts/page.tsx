import PageHeader from "@/components/PageHeader";
import { BookOpen, CheckCircle } from "lucide-react";

export default function LTSPage() {
  return (
    <>
      <PageHeader
        title="LTS"
        subtitle="Literacy Training Service"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "LTS" },
        ]}
      />

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-6">
            <div className="hidden shrink-0 sm:block">
              <div className="flex h-14 w-14 items-center justify-center bg-red-50 text-red-700">
                <BookOpen className="h-7 w-7" />
              </div>
            </div>
            <div>
              <h2 className="font-heading text-2xl text-gray-900 sm:text-3xl">
                Literacy Training Service
              </h2>
              <p className="mt-4 leading-relaxed text-gray-600">
                The Literacy Training Service (LTS) is a program designed to
                train students to become teachers of literacy and numeracy
                skills to school children, out-of-school youth, and other
                segments of society in need of their services.
              </p>
            </div>
          </div>

          <div className="mt-12 border border-gray-100 bg-gray-50 p-8">
            <h3 className="font-heading text-lg text-gray-900">
              Program Highlights
            </h3>
            <ul className="mt-4 space-y-3">
              {[
                "Teaching literacy and numeracy skills",
                "Tutorial programs for school children",
                "Out-of-school youth educational assistance",
                "Community-based education initiatives",
                "Reading and writing workshops",
                "Educational resource development",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
