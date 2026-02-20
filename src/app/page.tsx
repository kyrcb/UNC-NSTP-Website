import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  Shield,
  GraduationCap,
  Users,
  FileText,
  HelpCircle,
  ArrowRight,
  Heart,
} from "lucide-react";
import heroImage from "@/assets/hero.jpg";
import nstpLogo from "@/assets/NSTPcontrast.png";

const programs = [
  {
    title: "CWTS",
    full: "Civic Welfare Training Service",
    description:
      "Programs and activities contributory to the general welfare and betterment of life for the members of the community.",
    icon: Heart,
    href: "/cwts",
    color: "bg-red-50 text-red-700 border-red-200",
  },
  {
    title: "ROTC",
    full: "Reserve Officers' Training Corps",
    description:
      "Provides military training to motivate, train, organize, and mobilize students for national defense preparedness.",
    icon: Shield,
    href: "/rotc",
    color: "bg-gray-100 text-gray-700 border-gray-300",
  },
  {
    title: "LTS",
    full: "Literacy Training Service",
    description:
      "Training students to teach literacy and numeracy skills to school children, out-of-school youth, and other segments of society.",
    icon: BookOpen,
    href: "/lts",
    color: "bg-gray-100 text-gray-700 border-gray-300",
  },
];

const quickLinks = [
  {
    title: "About NSTP",
    description: "Learn about the program",
    icon: Users,
    href: "/about",
  },
  {
    title: "Memos & Guidelines",
    description: "Official announcements",
    icon: FileText,
    href: "/memos-guidelines",
  },
  {
    title: "Downloadables",
    description: "Forms and documents",
    icon: GraduationCap,
    href: "/downloadables",
  },
  {
    title: "FAQs",
    description: "Common questions",
    icon: HelpCircle,
    href: "/faqs",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-black">
        <Image
          src={heroImage}
          alt="University of Nueva Caceres campus"
          fill
          className="object-cover opacity-70"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 50%, transparent 100%)",
          }}
        />
        <div className="relative z-20 mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
          <div className="flex items-center justify-between gap-10">
          <div className="flex-1">
            <h1 className="font-heading text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
              National Service
              <br />
              <span className="text-red-500">Training Program</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-400">
              Fostering civic consciousness, defense preparedness, and literacy
              among the youth — serving the nation through education and
              community engagement.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/about/what-is-nstp"
                className="inline-flex items-center gap-2 bg-red-600 px-6 py-3 font-heading text-sm text-white transition-all hover:bg-red-700 hover:shadow-lg"
              >
                Learn More
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 border border-gray-600 px-6 py-3 font-heading text-sm text-gray-300 transition-all hover:border-gray-500 hover:bg-gray-900"
              >
                About Us
              </Link>
            </div>
          </div>
          <div className="hidden shrink-0 sm:block">
            <Image
              src={nstpLogo}
              alt="UNC NSTP Emblem"
              width={400}
              height={400}
              className="h-auto w-52 object-contain md:w-64 lg:w-96"
            />
          </div>
          </div>
        </div>
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Programs Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-heading text-3xl text-gray-900 sm:text-4xl">
              Our Programs
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-gray-500">
              The NSTP offers three program components that students can choose
              from.
            </p>
            <div className="mx-auto mt-4 h-1 w-16 bg-red-600" />
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {programs.map((program) => (
              <Link
                key={program.title}
                href={program.href}
                className="group relative border border-gray-100 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div
                  className={`inline-flex border p-3 ${program.color}`}
                >
                  <program.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-heading text-xl text-gray-900">
                  {program.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-red-700">
                  {program.full}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">
                  {program.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-red-700 transition-colors group-hover:text-red-600">
                  Learn more
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Activities / Highlights */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-heading text-3xl text-gray-900 sm:text-4xl">
              Activities & Highlights
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-gray-500">
              Stay updated with the latest NSTP events, community outreach
              programs, and training activities.
            </p>
            <div className="mx-auto mt-4 h-1 w-16 bg-red-600" />
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="overflow-hidden border border-gray-100 bg-white shadow-sm"
              >
                <div className="flex h-48 items-center justify-center bg-gray-100 text-gray-400">
                  <span className="text-sm">Activity Photo {i}</span>
                </div>
                <div className="p-6">
                  <p className="text-xs font-medium uppercase tracking-wider text-red-600">
                    Event
                  </p>
                  <h3 className="mt-2 font-heading text-lg text-gray-900">
                    Activity Title {i}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Description of the activity or event goes here. Update this
                    with actual content.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {quickLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="group flex items-center gap-4 border border-gray-100 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-red-200 hover:shadow-md"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-gray-100 text-red-700 transition-colors group-hover:bg-red-700 group-hover:text-white">
                  <link.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-heading text-sm text-gray-900">
                    {link.title}
                  </h3>
                  <p className="text-xs text-gray-500">{link.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
