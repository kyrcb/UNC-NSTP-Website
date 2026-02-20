import PageHeader from "@/components/PageHeader";
import { Eye } from "lucide-react";

export default function VisionPage() {
  return (
    <>
      <PageHeader
        title="Vision"
        subtitle="Our guiding aspiration for the future"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Vision" },
        ]}
      />

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center bg-gray-100">
              <Eye className="h-8 w-8 text-red-700" />
            </div>
            <h2 className="mt-6 font-heading text-2xl text-gray-900 sm:text-3xl">
              Our Vision
            </h2>
            <div className="mx-auto mt-4 h-1 w-16 bg-red-600" />
          </div>

          <div className="mt-10 border border-gray-100 bg-white p-8 text-center shadow-sm sm:p-12">
            <p className="text-lg leading-relaxed text-gray-600 italic">
              &ldquo;The University of Nueva Caceres envisions itself as a
              leading institution committed to the holistic development of
              individuals, nurturing responsible citizens who contribute to
              nation-building through service, leadership, and civic
              engagement.&rdquo;
            </p>
            <p className="mt-6 text-sm text-gray-400">
              — Update this with the official UNC NSTP vision statement
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
