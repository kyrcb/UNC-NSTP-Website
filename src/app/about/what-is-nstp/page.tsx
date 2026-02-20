import PageHeader from "@/components/PageHeader";

export default function WhatIsNSTPPage() {
  return (
    <>
      <PageHeader
        title="What is NSTP?"
        subtitle="Understanding the National Service Training Program"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "What is NSTP?" },
        ]}
      />

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose-custom">
            <h2 className="font-heading text-2xl text-gray-900">
              The National Service Training Program
            </h2>
            <div className="mt-2 h-1 w-16 bg-red-600" />

            <p className="mt-6 leading-relaxed text-gray-600">
              The National Service Training Program (NSTP) is a program aimed at
              enhancing civic consciousness and defense preparedness in the
              youth by developing the ethics of service and patriotism while
              undergoing training in any of its three program components.
            </p>

            <div className="mt-8 border-l-4 border-red-700 bg-red-50 p-6">
              <h3 className="font-heading text-lg text-gray-900">
                Legal Basis
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-700">
                Republic Act No. 9163, also known as the &ldquo;National
                Service Training Program (NSTP) Act of 2001,&rdquo; was signed
                into law on January 23, 2002. It requires all incoming freshmen,
                male and female, starting School Year 2002-2003, enrolled in any
                baccalaureate and in at least two-year technical-vocational or
                associate courses to complete one NSTP component as a graduation
                requirement.
              </p>
            </div>

            <h3 className="mt-10 font-heading text-xl text-gray-900">
              Three Program Components
            </h3>

            <div className="mt-6 space-y-4">
              {[
                {
                  title: "Civic Welfare Training Service (CWTS)",
                  text: "Programs or activities contributory to the general welfare and the betterment of life for the members of the community.",
                },
                {
                  title: "Reserve Officers' Training Corps (ROTC)",
                  text: "A program designed to provide military training to motivate, train, organize, and mobilize students for national defense preparedness.",
                },
                {
                  title: "Literacy Training Service (LTS)",
                  text: "A program designed to train students to become teachers of literacy and numeracy skills to school children, out-of-school youth, and other segments of society.",
                },
              ].map((component) => (
                <div
                  key={component.title}
                  className="border border-gray-100 bg-white p-6 shadow-sm"
                >
                  <h4 className="font-heading text-base text-red-700">
                    {component.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {component.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
