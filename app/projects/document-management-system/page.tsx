import Image from "next/image";
import Link from "next/link";

export default function DocumentManagementSystem() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">

      {/* Back */}
      <Link href="/#projects" className="text-violet-600 hover:underline">
        ← Back to Portfolio
      </Link>

      {/* Hero */}
      <section className="mt-8">

        <p className="uppercase font-semibold text-violet-600">
          Backend Development • PHP • CodeIgniter 4
        </p>

        <h1 className="text-5xl font-bold mt-3">
          Document Management System (DMS)
        </h1>

        <p className="mt-5 text-sm md:text-base leading-7 text-gray-600 text-justify">
          Document Management System (DMS) is a web-based application developed
          during my internship at Yan CeLOE, Telkom University. The system
          centralizes document storage and management, enabling secure access,
          approval workflows, version control, and efficient document organization
          for users and administrators.
        </p>

      </section>

      {/* Cover */}
      <section className="mt-10">

        <Image
          src="/images/projects/dms/cover.png"
          alt="Document Management System"
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
          The system was designed to improve document management by providing
          centralized storage, user authentication, role-based access control,
          document approval workflows, and version management. The project
          focused on building a secure and scalable backend architecture while
          ensuring seamless integration with frontend components.
        </p>

      </section>

      {/* My Role */}
      <section className="mt-16">

        <h2 className="text-3xl font-bold mb-5">
          My Role
        </h2>

        <ul className="list-disc pl-6 space-y-3 text-sm md:text-base text-gray-600 leading-7">

          <li>Developed backend services using PHP and CodeIgniter 4.</li>

          <li>Designed and implemented MySQL database architecture.</li>

          <li>Implemented CRUD operations for document management.</li>

          <li>Developed JWT Authentication and Role-Based Access Control (RBAC).</li>

          <li>Integrated backend APIs with frontend components.</li>

          <li>Performed testing, debugging, and system optimization.</li>

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
            "CodeIgniter 4",
            "MySQL",
            "REST API",
            "JWT Authentication",
            "RBAC"
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

      {/* Features */}
<section className="mt-16">

  <h2 className="text-3xl font-bold mb-6">
    Key Features
  </h2>

  <div className="flex flex-wrap gap-3">

{[
  "Authentication",
  "User Management",
  "Role-Based Access Control",
  "Document Submission",
  "Document Approval",
  "Notification System",
  "Search & Filtering",
  "Export PDF & Excel"
].map((feature) =>  (

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
            <h3 className="font-semibold mb-2">Document Management</h3>
            <Image
              src="/images/projects/dms/dashboard.png"
              alt="Dashboard"
              width={1200}
              height={700}
              className="rounded-xl border w-full h-auto"
            />
          </div>

          <div>
            <h3 className="font-semibold mb-2">Document Submission List</h3>
            <Image
              src="/images/projects/dms/document-list.png"
              alt="Document List"
              width={1200}
              height={700}
              className="rounded-xl border w-full h-auto"
            />
          </div>

          <div>
            <h3 className="font-semibold mb-2">Document Detail</h3>
            <Image
              src="/images/projects/dms/document-detail.png"
              alt="Document Detail"
              width={1200}
              height={700}
              className="rounded-xl border w-full h-auto"
            />
          </div>

          <div>
            <h3 className="font-semibold mb-2">Notification</h3>
            <Image
              src="/images/projects/dms/notification.png"
              alt="Notification"
              width={1200}
              height={700}
              className="rounded-xl border w-full h-auto"
            />
          </div>

        </div>

      </section>
{/* Buttons */}
<section className="mt-16 flex flex-wrap gap-4">

  {/* GitHub */}
  <a
    href="https://github.com/hnnayy/magang-DMS.git"
    target="_blank"
    rel="noopener noreferrer"
    className="px-6 py-3 rounded-xl bg-gray-900 text-white hover:bg-black transition-all"
  >
    GitHub
  </a>

  {/* Live Demo */}
  <a
    href="/videos/dms.mp4"
    target="_blank"
    rel="noopener noreferrer"
    className="px-6 py-3 rounded-xl bg-violet-600 text-white hover:bg-violet-700 transition-all"
  >
    Live Demo
  </a>

  {/* Documentation */}
<Link
  href="/projects/document-management-system/documentation"
  className="px-6 py-3 rounded-xl border border-violet-600 text-violet-600 hover:bg-violet-50 transition-all"
>
  Documentation
</Link>

</section>
    </main>
  );
}