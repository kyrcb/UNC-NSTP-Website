import PageHeader from "@/components/PageHeader";
import { Compass } from "lucide-react";

export default function MissionPage() {
  return (
    <>
      <PageHeader
        title="Mission"
        subtitle="Our commitment to service and excellence"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Mission" },
        ]}
      />

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center bg-gray-100">
              <Compass className="h-8 w-8 text-red-700" />
            </div>
            <h2 className="mt-6 font-heading text-2xl text-gray-900 sm:text-3xl">
              Our Mission
            </h2>
            <div className="mx-auto mt-4 h-1 w-16 bg-red-600" />
          </div>

          <div className="mt-10 border border-gray-100 bg-white p-8 shadow-sm sm:p-12">
            <p className="text-center text-lg leading-relaxed text-gray-600 italic">
              &ldquo;The NSTP Office of the University of Nueva Caceres is
              committed to providing quality civic education, military training,
              and literacy programs that cultivate social responsibility,
              patriotism, and active citizenship among Filipino youth.&rdquo;
            </p>
            <p className="mt-6 text-center text-sm text-gray-400">
              — Update this with the official UNC NSTP mission statement
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              {
                title: "Service",
                text: "Empowering students to serve their communities with compassion and dedication.",
              },
              {
                title: "Leadership",
                text: "Developing future leaders who champion positive change in society.",
              },
              {
                title: "Excellence",
                text: "Upholding the highest standards in training and civic engagement.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="border border-gray-100 bg-white p-6 text-center shadow-sm"
              >
                <h3 className="font-heading text-lg text-red-700">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
