import PageHeader from "@/components/PageHeader";
import { Shield, CheckCircle } from "lucide-react";

export default function ROTCPage() {
  return (
    <>
      <PageHeader
        title="ROTC"
        subtitle="Reserve Officers' Training Corps"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "ROTC" },
        ]}
      />

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-6">
            <div className="hidden shrink-0 sm:block">
              <div className="flex h-14 w-14 items-center justify-center bg-gray-100 text-gray-700">
                <Shield className="h-7 w-7" />
              </div>
            </div>
            <div>
              <h2 className="font-heading text-2xl text-gray-900 sm:text-3xl">
                Reserve Officers&apos; Training Corps
              </h2>
              <p className="mt-4 leading-relaxed text-gray-600">
                The Reserve Officers&apos; Training Corps (ROTC) is a program
                designed to provide military training to motivate, train,
                organize, and mobilize students for national defense
                preparedness. It instills patriotism, moral virtues, respect for
                the rights of civilians, and adherence to the Constitution.
              </p>
            </div>
          </div>

          <div className="mt-12 border border-gray-100 bg-gray-50 p-8">
            <h3 className="font-heading text-lg text-gray-900">
              Program Highlights
            </h3>
            <ul className="mt-4 space-y-3">
              {[
                "Basic military training and discipline",
                "National defense preparedness education",
                "Leadership and teamwork development",
                "Physical fitness and wellness programs",
                "Community defense and disaster response",
                "Patriotism and civic responsibility",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-gray-600" />
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
