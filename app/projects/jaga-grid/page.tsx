import Image from "next/image";
import Link from "next/link";

export default function AutomatedMobileSASTDAST() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">

      {/* Back */}
      <Link
        href="/#projects"
        className="text-violet-600 hover:underline"
      >
        ← Back to Portfolio
      </Link>

      {/* Hero */}
      <section className="mt-8">

        <p className="text-violet-600 font-semibold uppercase">
          Final Project • Cybersecurity • DevSecOps
        </p>

        <h1 className="text-5xl font-bold mt-3">
          Automated Mobile SAST & DAST System
        </h1>

        <p className="text-xl text-gray-500 mt-5 max-w-3xl">
          An automated mobile application security testing system integrating
          Static Application Security Testing (SAST) and Dynamic Application
          Security Testing (DAST) into a CI/CD pipeline using Jenkins, Docker,
          MobSF, and OWASP ZAP.
        </p>

      </section>

      {/* Cover Image */}
      <section className="mt-10">

        <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-lg">

          <Image
            src="/images/projects/mobsf/cover.png"
            alt="Automated Mobile SAST & DAST"
            fill
            className="object-cover"
          />

        </div>

      </section>

      {/* Overview */}
      <section className="mt-16">

        <h2 className="text-3xl font-bold mb-5">
          Project Overview
        </h2>

        <p className="leading-8 text-gray-600">
          This project was developed as my undergraduate final project at
          Telkom University. The objective was to automate mobile application
          security testing by integrating Static Application Security Testing
          (SAST) and Dynamic Application Security Testing (DAST) into a single
          CI/CD pipeline.
        </p>

        <p className="leading-8 text-gray-600 mt-5">
          The system automatically builds Android applications, performs static
          code analysis using MobSF, executes dynamic security testing through
          OWASP ZAP and Android Emulator, generates security reports, and sends
          notifications via Telegram.
        </p>

      </section>

      {/* Role */}
      <section className="mt-16">

        <h2 className="text-3xl font-bold mb-5">
          My Role
        </h2>

        <ul className="list-disc pl-6 space-y-3 text-gray-600">
          <li>Designed the overall system architecture.</li>
          <li>Developed the automation pipeline using Jenkins.</li>
          <li>Integrated MobSF for automated SAST scanning.</li>
          <li>Integrated OWASP ZAP for automated DAST scanning.</li>
          <li>Configured Docker containers and Android Emulator.</li>
          <li>Implemented Telegram notification integration.</li>
        </ul>

      </section>

      {/* Tech Stack */}
      <section className="mt-16">

        <h2 className="text-3xl font-bold mb-6">
          Tech Stack
        </h2>

        <div className="flex flex-wrap gap-3">

          {[
            "Python",
            "Jenkins",
            "Docker",
            "MobSF",
            "OWASP ZAP",
            "Android Emulator",
            "ADB",
            "Frida",
            "Git",
            "Linux"
          ].map((tech) => (

            <span
              key={tech}
              className="bg-violet-100 text-violet-700 px-4 py-2 rounded-full"
            >
              {tech}
            </span>

          ))}

        </div>

      </section>

      {/* Key Features */}
      <section className="mt-16">

        <h2 className="text-3xl font-bold mb-5">
          Key Features
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold text-lg">
              Automated APK Build
            </h3>
            <p className="text-gray-600 mt-2">
              Automatically builds Android APKs through Jenkins pipeline.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold text-lg">
              Static Security Testing
            </h3>
            <p className="text-gray-600 mt-2">
              Detects vulnerabilities using MobSF static analysis.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold text-lg">
              Dynamic Security Testing
            </h3>
            <p className="text-gray-600 mt-2">
              Executes runtime security testing using OWASP ZAP.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold text-lg">
              Telegram Notification
            </h3>
            <p className="text-gray-600 mt-2">
              Sends automatic notifications after scanning is completed.
            </p>
          </div>

        </div>

      </section>

      {/* Gallery */}
      <section className="mt-16">

        <h2 className="text-3xl font-bold mb-6">
          Project Gallery
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="relative h-72 rounded-xl overflow-hidden">
            <Image
              src="/images/projects/mobsf/1.png"
              alt="Gallery 1"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative h-72 rounded-xl overflow-hidden">
            <Image
              src="/images/projects/mobsf/2.png"
              alt="Gallery 2"
              fill
              className="object-cover"
            />
          </div>

        </div>

      </section>

      {/* Buttons */}
      <section className="mt-16 flex gap-4">

        <a
          href="#"
          className="bg-black text-white px-6 py-3 rounded-xl"
        >
          GitHub
        </a>

        <a
          href="#"
          className="bg-violet-600 text-white px-6 py-3 rounded-xl"
        >
          Research Paper
        </a>

      </section>

    </main>
  );
}