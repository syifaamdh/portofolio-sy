import Image from "next/image";
import Link from "next/link";

export default function AmaraLaundrySystem() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">

      {/* Back */}
      <Link href="/#projects" className="text-violet-600 hover:underline">
        ← Back to Portfolio
      </Link>

      {/* Hero */}
      <section className="mt-8">

        <p className="uppercase font-semibold text-violet-600">
          Web Development • PHP • MySQL
        </p>

        <h1 className="text-5xl font-bold mt-3">
          Amara Laundry Management System
        </h1>

        <p className="mt-5 text-sm md:text-base leading-7 text-gray-600 text-justify">
          Amara Laundry Management System is a web-based information system
          developed to streamline laundry business operations. The application
          provides two separate portals: an Operator Portal for managing laundry
          services and a Member Portal that allows customers to access their
          laundry information independently. Each portal has its own
          authentication mechanism to ensure secure and role-based access.
        </p>

      </section>

      {/* Cover */}
      <section className="mt-10">

        <Image
          src="/images/projects/laundry/cover.png"
          alt="Amara Laundry Management System"
          width={1400}
          height={800}
          className="rounded-2xl w-full h-auto shadow-lg"
        />

      </section>

      {/* Overview */}
      <section className="mt-16">

        <h2 className="text-3xl font-bold mb-5">
          Project Overview
        </h2>

        <p className="text-sm md:text-base leading-7 text-gray-600 text-justify">
          This system digitizes the laundry business process, including customer
          registration, transaction management, payment processing, and laundry
          status tracking. The application separates the Operator and Member
          portals, allowing operators to manage all business activities while
          members can securely log in only to their own portal to monitor their
          laundry progress and account information.
        </p>

      </section>

      {/* My Role */}
      <section className="mt-16">

        <h2 className="text-3xl font-bold mb-5">
          My Role
        </h2>

        <ul className="list-disc pl-6 space-y-3 text-sm md:text-base text-gray-600 leading-7">

          <li>Designed and developed the web application.</li>

          <li>Built the MySQL relational database.</li>

          <li>Implemented authentication and session management.</li>

          <li>Developed separate Operator and Member portals.</li>

          <li>Implemented CRUD operations for laundry transactions.</li>

          <li>Designed responsive user interfaces using Bootstrap.</li>

        </ul>

      </section>

      {/* Tech Stack */}
      <section className="mt-16">

        <h2 className="text-3xl font-bold mb-6">
          Tech Stack
        </h2>

        <div className="flex flex-wrap gap-3">

          {[
            "PHP",
            "MySQL",
            "HTML",
            "CSS",
            "Bootstrap",
            "JavaScript"
          ].map((tool) => (

            <span
              key={tool}
              className="bg-violet-100 text-violet-700 px-4 py-2 rounded-full text-sm"
            >
              {tool}
            </span>

          ))}

        </div>

      </section>

      {/* Key Features */}
      <section className="mt-16">

        <h2 className="text-3xl font-bold mb-6">
          Key Features
        </h2>

        <div className="flex flex-wrap gap-3">

          {[
            "Operator Login",
            "Member Login",
            "Separate Authentication",
            "Customer Management",
            "Laundry Transactions",
            "Payment Management",
            "Laundry Status Tracking",
            "Transaction History",
            "Dashboard",
            "Role-Based Access"
          ].map((feature) => (

            <span
              key={feature}
              className="bg-violet-100 text-violet-700 px-4 py-2 rounded-full text-sm"
            >
              {feature}
            </span>

          ))}

        </div>

      </section>

      {/* Gallery */}
      <section className="mt-16">

        <h2 className="text-3xl font-bold mb-6">
          Gallery
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div>
            <h3 className="font-semibold mb-2">Operator Dashboard</h3>
            <Image
              src="/images/projects/laundry/dashboard.png"
              alt="Operator Dashboard"
              width={1200}
              height={700}
              className="rounded-xl border w-full h-auto"
            />
          </div>

          <div>
            <h3 className="font-semibold mb-2">Laundry Transactions</h3>
            <Image
              src="/images/projects/laundry/transaction.png"
              alt="Laundry Transactions"
              width={1200}
              height={700}
              className="rounded-xl border w-full h-auto"
            />
          </div>

          <div>
            <h3 className="font-semibold mb-2">Member Dashboard</h3>
            <Image
              src="/images/projects/laundry/member-dashboard.png"
              alt="Member Dashboard"
              width={1200}
              height={700}
              className="rounded-xl border w-full h-auto"
            />
          </div>

          <div>
            <h3 className="font-semibold mb-2">Member Dashboard</h3>
            <Image
              src="/images/projects/laundry/member-dashboard.png"
              alt="Member Dashboard"
              width={1200}
              height={700}
              className="rounded-xl border w-full h-auto"
            />
          </div>

        </div>

      </section>

{/* Buttons */}
{/* GitHub Button */}
{/* GitHub */}
<section className="mt-16">

  <h2 className="text-3xl font-bold mb-6">
    Source Code
  </h2>

  <a
    href="https://github.com/syifaamdh/mylaundry.git"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-6 py-3 rounded-xl bg-gray-900 text-white hover:bg-black transition-all"
  >
    GitHub
  </a>

</section>

{/* Demo Videos */}
<section className="mt-16">

  <h2 className="text-3xl font-bold mb-6">
    Demo Videos
  </h2>

  <div className="grid md:grid-cols-2 gap-8">

    <div className="border rounded-xl overflow-hidden shadow-sm">
      <video
        controls
        className="w-full"
        poster="/images/projects/laundry/operator-cover.png"
      >
        <source src="/videos/operator.mp4" type="video/mp4" />
      </video>

      <div className="p-5">
        <h3 className="font-semibold text-lg">
          Operator Portal Demo
        </h3>

        <p className="text-gray-500 mt-2">
          Demonstrates administrator features including customer management,
          laundry transactions, payments, and dashboard operations.
        </p>
      </div>
    </div>

    <div className="border rounded-xl overflow-hidden shadow-sm">
      <video
        controls
        className="w-full"
        poster="/images/projects/laundry/member-cover.png"
      >
        <source src="/videos/member.mp4" type="video/mp4" />
      </video>

      <div className="p-5">
        <h3 className="font-semibold text-lg">
          Member Portal Demo
        </h3>

        <p className="text-gray-500 mt-2">
          Shows how members log in, view transaction history, and track laundry status.
        </p>
      </div>
    </div>

  </div>

</section>

    </main>
  );
}