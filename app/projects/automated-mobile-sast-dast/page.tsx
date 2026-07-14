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

        <p className="mt-5 text-sm md:text-base text-gray-600 text-justify leading-7">
        An automated mobile application security testing system that integrates Static Application Security Testing (SAST) and Dynamic Application Security Testing (DAST) into a CI/CD pipeline. SAST analyzes the application code or APK before execution, while DAST evaluates the application’s security during runtime. The system automatically detects vulnerabilities and presents the results in centralized security reports to support monitoring and remediation.
        </p>

      </section>

      {/* Cover Image */}
      <section className="mt-10">

        <div className="flex justify-center mt-10">

        <Image
            src="/images/projects/sast-dast/cover.png"
            alt="Automated Mobile SAST & DAST"
            width={1200}
            height={700}
            className="rounded-2xl shadow-lg w-full h-auto object-contain"
            priority
        />

        </div>

      </section>

      {/* Overview */}
      <section className="mt-16">

        <h2 className="text-3xl font-bold mb-5">
          Project Overview
        </h2>

        <p className="mt-5 text-sm md:text-base leading-7 text-gray-600 text-justify">
        This project develops an automated security testing system for Android mobile applications. The system integrates Static Application Security Testing (SAST) and Dynamic Application Security Testing (DAST) into a CI/CD pipeline managed using Jenkins to support continuous security assessment during application development.
        </p>

        <p className="mt-5 text-sm md:text-base leading-7 text-gray-600 text-justify">
          The system is designed to analyze Android applications in APK format through static and runtime security testing. It also provides centralized vulnerability reports through a dashboard and PDF documents, classifies findings using CVSS v3.x severity levels, and sends automated email notifications to support vulnerability monitoring and remediation.
        </p>

        <p className="mt-5 text-sm md:text-base leading-7 text-gray-600 text-justify">
          Overall, the system aims to improve the efficiency, consistency, and speed of mobile application security testing while reducing dependence on manual testing processes.
        </p>
        
      </section>

      {/* Role */}
      {/* My Role */}
        <section className="mt-16">

        <h2 className="text-3xl font-bold mb-6">
            My Role
        </h2>

        <div className="bg-violet-50 border border-violet-100 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-semibold mb-3">
            Role Summary
            </h3>

            <p className="text-sm md:text-base text-gray-700 leading-7 text-justify">
            Responsible for implementing the Jenkins-based CI/CD pipeline and
            automated email notification system for mobile application security
            testing, ensuring an efficient and consistent security assessment
            workflow.
            </p>
        </div>

        <h3 className="text-2xl font-semibold mb-5">
            Key Contributions
        </h3>

        <ul className="list-disc pl-6 space-y-3 text-sm md:text-base text-gray-700 leading-7 text-justify">

            <li>
            Developed and configured the <strong>Jenkins pipeline (Jenkinsfile)</strong> to automate application build, SAST, DAST, report generation, and
            artifact archiving.
            </li>

            <li>
            Integrated Jenkins with the <strong>GitHub repository</strong> to
            automatically trigger the security testing pipeline whenever source
            code was updated.
            </li>

            <li>
            Configured build environments, credentials, parameters, and
            dependencies required for Flutter and Android application security
            testing.
            </li>

            <li>
            Implemented an <strong>automated email notification system</strong> to distribute pipeline execution results and PDF security reports to
            developers and security teams.
            </li>

            <li>
            Performed testing and validation to ensure every pipeline stage
            executed sequentially, reliably, and consistently.
            </li>

        </ul>

        </section>

{/* Tech Stack */}
<section className="mt-16">

  <h2 className="text-3xl font-bold mb-8">
    Tech Stack
  </h2>

  <div className="grid md:grid-cols-2 gap-6">

    <div className="border rounded-xl p-6">
      <h3 className="font-semibold text-lg text-violet-600">
        CI/CD & Automation
      </h3>
      <p className="mt-2 text-sm text-gray-600 leading-6">
        Jenkins, Jenkinsfile
      </p>
    </div>

    <div className="border rounded-xl p-6">
      <h3 className="font-semibold text-lg text-violet-600">
        Version Control
      </h3>
      <p className="mt-2 text-sm text-gray-600 leading-6">
        Git, GitHub
      </p>
    </div>

    <div className="border rounded-xl p-6">
      <h3 className="font-semibold text-lg text-violet-600">
        Mobile Development
      </h3>
      <p className="mt-2 text-sm text-gray-600 leading-6">
        Flutter, Dart
      </p>
    </div>

    <div className="border rounded-xl p-6">
      <h3 className="font-semibold text-lg text-violet-600">
        Mobile Platform
      </h3>
      <p className="mt-2 text-sm text-gray-600 leading-6">
        Android SDK, Android Virtual Device (AVD), ADB
      </p>
    </div>

    <div className="border rounded-xl p-6">
      <h3 className="font-semibold text-lg text-violet-600">
        Backend
      </h3>
      <p className="mt-2 text-sm text-gray-600 leading-6">
        Python, Django, REST API
      </p>
    </div>

    <div className="border rounded-xl p-6">
      <h3 className="font-semibold text-lg text-violet-600">
        Static Security Testing
      </h3>
      <p className="mt-2 text-sm text-gray-600 leading-6">
        Semgrep, TruffleHog
      </p>
    </div>

    <div className="border rounded-xl p-6">
      <h3 className="font-semibold text-lg text-violet-600">
        Dynamic Security Testing
      </h3>
      <p className="mt-2 text-sm text-gray-600 leading-6">
        Frida, Objection, ADB Monkey
      </p>
    </div>

    <div className="border rounded-xl p-6">
      <h3 className="font-semibold text-lg text-violet-600">
        Reporting
      </h3>
      <p className="mt-2 text-sm text-gray-600 leading-6">
        Jinja2, HTML, PDF
      </p>
    </div>

    <div className="border rounded-xl p-6">
      <h3 className="font-semibold text-lg text-violet-600">
        Notification
      </h3>
      <p className="mt-2 text-sm text-gray-600 leading-6">
        Jenkins Email Extension, SMTP
      </p>
    </div>

    <div className="border rounded-xl p-6">
      <h3 className="font-semibold text-lg text-violet-600">
        Database
      </h3>
      <p className="mt-2 text-sm text-gray-600 leading-6">
        Internal Database Storage
      </p>
    </div>

    <div className="border rounded-xl p-6 md:col-span-2">
      <h3 className="font-semibold text-lg text-violet-600">
        Runtime Environment
      </h3>
      <p className="mt-2 text-sm text-gray-600 leading-6">
        Java Development Kit (JDK), Windows Environment
      </p>
    </div>

  </div>

</section>

     {/* Key Features */}
<section className="mt-16">

  <h2 className="text-3xl font-bold mb-8">
    Key Features
  </h2>

  <div className="grid md:grid-cols-2 gap-6">

    <div className="border rounded-xl p-6 hover:shadow-lg transition-all">
      <h3 className="font-semibold text-lg mb-3">
        Automated CI/CD Security Pipeline
      </h3>
      <p className="text-sm text-gray-600 leading-6 text-justify">
        Automatically executes the complete mobile application security testing
        workflow through a Jenkins-based CI/CD pipeline whenever source code is
        updated.
      </p>
    </div>

    <div className="border rounded-xl p-6 hover:shadow-lg transition-all">
      <h3 className="font-semibold text-lg mb-3">
        Static & Dynamic Security Testing
      </h3>
      <p className="text-sm text-gray-600 leading-6 text-justify">
        Performs Static Application Security Testing (SAST) to analyze source
        code and APK files, followed by Dynamic Application Security Testing
        (DAST) to evaluate application behavior during runtime.
      </p>
    </div>

    <div className="border rounded-xl p-6 hover:shadow-lg transition-all">
      <h3 className="font-semibold text-lg mb-3">
        Automated APK Build
      </h3>
      <p className="text-sm text-gray-600 leading-6 text-justify">
        Automatically builds Android applications in both Debug and Release
        configurations before initiating the security testing process.
      </p>
    </div>

    <div className="border rounded-xl p-6 hover:shadow-lg transition-all">
      <h3 className="font-semibold text-lg mb-3">
        Centralized Security Reporting
      </h3>
      <p className="text-sm text-gray-600 leading-6 text-justify">
        Aggregates security findings into a centralized dashboard and generates
        downloadable PDF reports to simplify vulnerability analysis.
      </p>
    </div>

    <div className="border rounded-xl p-6 hover:shadow-lg transition-all">
      <h3 className="font-semibold text-lg mb-3">
        CVSS-Based Severity Classification
      </h3>
      <p className="text-sm text-gray-600 leading-6 text-justify">
        Classifies detected vulnerabilities using the Common Vulnerability
        Scoring System (CVSS v3.x) to help prioritize remediation efforts.
      </p>
    </div>

    <div className="border rounded-xl p-6 hover:shadow-lg transition-all">
      <h3 className="font-semibold text-lg mb-3">
        Automated Email Notification
      </h3>
      <p className="text-sm text-gray-600 leading-6 text-justify">
        Automatically distributes testing results and PDF security reports to
        developers and security teams after every pipeline execution.
      </p>
    </div>

    <div className="border rounded-xl p-6 hover:shadow-lg transition-all md:col-span-2">
      <h3 className="font-semibold text-lg mb-3">
        Artifact & Testing History Management
      </h3>
      <p className="text-sm text-gray-600 leading-6 text-justify">
        Stores generated APK files, security reports, and previous testing
        results as build artifacts to support documentation, auditing, and
        future security analysis.
      </p>
    </div>

  </div>

</section>

{/* Gallery */}
<section className="mt-16">

  <h2 className="text-3xl font-bold mb-8">
    Project Gallery
  </h2>

  <div className="grid md:grid-cols-2 gap-8">

    {/* Recent Scans */}
    <div>
      <h3 className="text-base md:text-lg font-semibold mb-3">
        Recent Scans
      </h3>

      <div className="rounded-xl border overflow-hidden bg-white">
        <Image
          src="/images/projects/sast-dast/recent-scans.png"
          alt="Recent Scans"
          width={1600}
          height={900}
          className="w-full h-auto"
        />
      </div>
    </div>

    {/* Security Scorecard */}
    <div>
      <h3 className="text-base md:text-lg font-semibold mb-3">
        Security Scorecard
      </h3>

      <div className="rounded-xl border overflow-hidden bg-white">
        <Image
          src="/images/projects/sast-dast/security-scorecard.png"
          alt="Security Scorecard"
          width={1600}
          height={900}
          className="w-full h-auto"
        />
      </div>
    </div>

    {/* SAST */}
    <div>
      <h3 className="text-base md:text-lg font-semibold mb-3">
        Static Application Security Testing (SAST)
      </h3>

      <div className="rounded-xl border overflow-hidden bg-white">
        <Image
          src="/images/projects/sast-dast/sast.png"
          alt="SAST"
          width={1600}
          height={900}
          className="w-full h-auto"
        />
      </div>
    </div>

    {/* DAST */}
    <div>
      <h3 className="text-base md:text-lg font-semibold mb-3">
        Dynamic Application Security Testing (DAST)
      </h3>

      <div className="rounded-xl border overflow-hidden bg-white">
        <Image
          src="/images/projects/sast-dast/dast.png"
          alt="DAST"
          width={1600}
          height={900}
          className="w-full h-auto"
        />
      </div>
    </div>

{/* Jenkins */}
<div className="md:col-span-2">
  <h3 className="text-base md:text-lg font-semibold mb-3">
    CI/CD Jenkins Pipeline
  </h3>

  <div className="rounded-xl border overflow-hidden bg-white">
    <Image
      src="/images/projects/sast-dast/jenkins.png"
      alt="Jenkins Pipeline"
      width={1800}
      height={900}
      className="w-full h-auto"
    />
  </div>
</div>

</div>

</section>

{/* Buttons */}
<section className="mt-16 flex flex-wrap gap-4">

  <a
    href="https://github.com/hnnayy/security-mobile"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-all"
  >
    GitHub Repository
  </a>

  <a
    href="https://www.youtube.com/watch?v=VdIIOCMCzy4"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-red-600 text-white px-6 py-3 rounded-xl hover:bg-red-700 transition-all"
  >
    Watch Demo
  </a>

</section>
    </main>
  );
}