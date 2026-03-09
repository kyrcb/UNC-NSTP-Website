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
import nstpLogo from "@/assets/NSTPcontrast.png";
import HeroCarousel from "@/components/HeroCarousel";
import activity1 from "@/assets/Activity1.jpg";
import activity2 from "@/assets/Activity2.jpg";
import activity3 from "@/assets/Activity3.jpg";

const activities = [
  { image: activity1, tag: "Fundraiser Event", title: "UNCEAN'S Zumba Fitness Fundraiser", description: "Description of the activity or event goes here. Update this with actual content." },
  { image: activity2, tag: "Seminar Session", title: "NSTP Capability Seminar: Anti-Bastos Law and Community Organizing", description: "Description of the activity or event goes here. Update this with actual content." },
  { image: activity3, tag: "Hands-On Training", title: "NSTP Basic Life Support Training Program", description: "Description of the activity or event goes here. Update this with actual content." },
];

const programs = [
  {
    title: "CWTS",
    full: "Civic Welfare Training Service",
    description:
      "Programs and activities contributory to the general welfare and betterment of life for the members of the community.",
    icon: Heart,
    href: "/cwts",
    accent: "bg-red-50 text-red-700 border-red-200",
  },
  {
    title: "ROTC",
    full: "Reserve Officers' Training Corps",
    description:
      "Provides military training to motivate, train, organize, and mobilize students for national defense preparedness.",
    icon: Shield,
    href: "/rotc",
    accent: "bg-gray-50 text-gray-700 border-gray-200",
  },
  {
    title: "LTS",
    full: "Literacy Training Service",
    description:
      "Training students to teach literacy and numeracy skills to school children, out-of-school youth, and other segments of society.",
    icon: BookOpen,
    href: "/lts",
    accent: "bg-gray-50 text-gray-700 border-gray-200",
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
        <HeroCarousel />
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.3) 100%)",
          }}
        />
        <div className="relative z-20 mx-auto max-w-7xl px-4 py-28 sm:px-6 sm:py-36 lg:px-8 lg:py-44">
          <div className="flex items-center justify-between gap-12">
            <div className="flex-1 max-w-2xl">
              <h1 className="font-heading text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
                National Service
                <br />
                <span className="text-red-500">Training Program</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-300">
                Fostering civic consciousness, defense preparedness, and literacy
                among the youth — serving the nation through education and
                community engagement.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/about/what-is-nstp"
                  className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-6 py-3 font-heading text-sm text-white transition-all hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/25"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 rounded-lg border border-gray-500 px-6 py-3 font-heading text-sm text-gray-300 transition-all hover:border-white hover:bg-white/10 hover:text-white"
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
                className="h-auto w-52 object-contain drop-shadow-2xl md:w-64 lg:w-96"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-red-600">
              What We Offer
            </p>
            <h2 className="mt-2 font-heading text-3xl text-gray-900 sm:text-4xl">
              Our Programs
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-500">
              The NSTP offers three program components that students can choose
              from.
            </p>
            <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-red-600" />
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {programs.map((program) => (
              <Link
                key={program.title}
                href={program.href}
                className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-red-600 to-red-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div
                  className={`inline-flex rounded-xl border p-3.5 ${program.accent}`}
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
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-red-700 transition-colors group-hover:text-red-600">
                  Learn more
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Activities / Highlights */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-red-600">
              Stay Updated
            </p>
            <h2 className="mt-2 font-heading text-3xl text-gray-900 sm:text-4xl">
              Activities & Highlights
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-500">
              Stay updated with the latest NSTP events, community outreach
              programs, and training activities.
            </p>
            <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-red-600" />
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {activities.map((activity, i) => (
              <div
                key={i}
                className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-red-600">
                    {activity.tag}
                  </p>
                  <h3 className="mt-2 font-heading text-lg text-gray-900">
                    {activity.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">
                    {activity.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-red-600">
              Navigate
            </p>
            <h2 className="mt-2 font-heading text-3xl text-gray-900 sm:text-4xl">
              Quick Links
            </h2>
            <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-red-600" />
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {quickLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="group flex items-center gap-4 rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-red-700 transition-all duration-300 group-hover:bg-red-700 group-hover:text-white group-hover:shadow-lg group-hover:shadow-red-700/25">
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
