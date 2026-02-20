"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is NSTP?",
    answer:
      "The National Service Training Program (NSTP) is a program aimed at enhancing civic consciousness and defense preparedness in the youth by developing the ethics of service and patriotism while undergoing training in any of its three program components: CWTS, ROTC, or LTS.",
  },
  {
    question: "Who is required to take NSTP?",
    answer:
      "All incoming freshmen, male and female, enrolled in any baccalaureate and in at least two-year technical-vocational or associate courses are required to complete one NSTP component as a graduation requirement under R.A. 9163.",
  },
  {
    question: "How many semesters is NSTP?",
    answer:
      "NSTP must be undertaken for two semesters. Each semester requires a minimum of 90 training hours (equivalent to 3 units).",
  },
  {
    question: "Can I choose which NSTP component to take?",
    answer:
      "Yes, students may choose from any of the three NSTP components: Civic Welfare Training Service (CWTS), Reserve Officers' Training Corps (ROTC), or Literacy Training Service (LTS), subject to availability at the institution.",
  },
  {
    question: "What happens if I fail NSTP?",
    answer:
      "Students who fail in NSTP must re-enroll in the same component they originally took. Completion of NSTP is a requirement for graduation.",
  },
  {
    question: "Where is the NSTP Office located?",
    answer:
      "The NSTP Office is located at AMS Building, Room 108B, University of Nueva Caceres, Jaime Hernandez Avenue, Naga City, Camarines Sur.",
  },
  {
    question: "How can I contact the NSTP Office?",
    answer:
      "You can reach the NSTP Office at (052) 472-6100 local 151 or 126, or email nstp@unc.edu.ph.",
  },
];

export default function FAQsPage() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about the NSTP program"
      />

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="overflow-hidden border border-gray-100 bg-white shadow-sm"
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-gray-50"
                >
                  <span className="pr-4 font-heading text-base text-gray-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-red-700 transition-transform ${
                      open === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {open === i && (
                  <div className="border-t border-gray-100 px-6 py-5">
                    <p className="text-sm leading-relaxed text-gray-600">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gray-100 p-8 text-center">
            <h3 className="font-heading text-lg text-gray-900">
              Still have questions?
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Contact the NSTP Office at{" "}
              <a
                href="mailto:nstp@unc.edu.ph"
                className="font-medium underline hover:text-red-600"
              >
                nstp@unc.edu.ph
              </a>{" "}
              or call (052) 472-6100 local 151 or 126.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
