import PageHeader from "@/components/PageHeader";
import { Heart, CheckCircle } from "lucide-react";

export default function CWTSPage() {
  return (
    <>
      <PageHeader
        title="CWTS"
        subtitle="Civic Welfare Training Service"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "CWTS" },
        ]}
      />

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-6">
            <div className="hidden shrink-0 sm:block">
              <div className="flex h-14 w-14 items-center justify-center bg-red-50 text-red-700">
                <Heart className="h-7 w-7" />
              </div>
            </div>
            <div>
              <h2 className="font-heading text-2xl text-gray-900 sm:text-3xl">
                Civic Welfare Training Service
              </h2>
              <p className="mt-4 leading-relaxed text-gray-600">
                The Civic Welfare Training Service (CWTS) refers to programs or
                activities contributory to the general welfare and the
                betterment of life for the members of the community, especially
                those devoted to improving health, education, environment,
                entrepreneurship, safety, recreation, and morals of the
                citizenry.
              </p>
            </div>
          </div>

          <div className="mt-12 border border-gray-100 bg-gray-50 p-8">
            <h3 className="font-heading text-lg text-gray-900">
              Program Highlights
            </h3>
            <ul className="mt-4 space-y-3">
              {[
                "Community outreach and engagement programs",
                "Health and wellness awareness campaigns",
                "Environmental conservation activities",
                "Education support for underserved communities",
                "Disaster preparedness and response training",
                "Values formation and leadership development",
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
