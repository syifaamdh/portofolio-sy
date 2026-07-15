'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import coverJagaGrid from '@/public/images/projects/jagagrid/cover2.png';

const technologies = [
  'Flutter',
  'Dart',
  'Firebase',
  'Realtime Database',
  'GPS',
  'GIS Mapping',
  'Telegram Integration',
  'Mobile Development',
];

const contributions = [
  'Developed the JagaGrid mobile application using Flutter.',
  'Integrated Firebase for real-time data storage and field reporting.',
  'Implemented GPS-based mapping to record high-risk tree locations.',
  'Built map-based monitoring features to support field operations.',
  'Developed notification and Telegram integration for real-time activity updates.',
  'Supported improvements in monitoring accuracy and operational response efficiency.',
];

const features = [
  {
    title: 'High-Risk Tree Monitoring',
    description:
      'Enables field officers to record and monitor trees that may interfere with PLN power distribution lines.',
  },
  {
    title: 'GPS-Based Location Recording',
    description:
      'Captures accurate geographic coordinates of high-risk trees using the GPS capability of the mobile device.',
  },
  {
    title: 'Interactive GIS Mapping',
    description:
      'Displays recorded tree locations on an interactive map to support monitoring and field operation planning.',
  },
  {
    title: 'Real-Time Firebase Database',
    description:
      'Stores and synchronizes tree records, monitoring data, and field reports in real time.',
  },
  {
    title: 'Field Activity Reporting',
    description:
      'Allows field officers to document tree conditions, trimming activities, maintenance actions, and monitoring results.',
  },
  {
    title: 'Telegram Notification',
    description:
      'Delivers real-time notifications related to tree monitoring, trimming, and maintenance activities.',
  },
];

const workflow = [
  {
    number: '01',
    title: 'Record Tree Data',
    description:
      'Field officers enter tree information, risk conditions, photographs, and other relevant field observations.',
  },
  {
    number: '02',
    title: 'Capture Location',
    description:
      'The application records the precise geographic coordinates of the tree using GPS.',
  },
  {
    number: '03',
    title: 'Synchronize Data',
    description:
      'Tree records, coordinates, and field reports are stored and synchronized through Firebase.',
  },
  {
    number: '04',
    title: 'Send Updates',
    description:
      'Operational updates and notifications are delivered through the application and Telegram integration.',
  },
];

const galleryImages = [
  {
    src: '/images/projects/jagagrid/1.png',
    alt: 'JagaGrid mobile application dashboard',
  },
  {
    src: '/images/projects/jagagrid/2.png',
    alt: 'JagaGrid GPS and map monitoring interface',
  },
  {
    src: '/images/projects/jagagrid/3.png',
    alt: 'JagaGrid field reporting interface',
  },
  {
    src: '/images/projects/jagagrid/4.png',
    alt: 'JagaGrid tree monitoring details',
  },
  {
      src: '/images/projects/jagagrid/5.png',
    alt: 'JagaGrid tree monitoring details',
  },
    {
      src: '/images/projects/jagagrid/6.png',
    alt: 'JagaGrid tree monitoring details',
  },
];

export default function JagaGridProjectPage() {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      {/* Back Button */}
      <Link
        href="/#projects"
        className="inline-flex items-center text-violet-600 transition-colors hover:text-violet-800 hover:underline dark:text-violet-400 dark:hover:text-violet-300"
      >
        ← Back to Portfolio
      </Link>

      {/* Hero */}
      <section className="mt-8 w-full">
        <p className="font-semibold uppercase tracking-wider text-violet-600 dark:text-violet-400">
          Mobile Application • Field Monitoring • PLN
        </p>

        <h1 className="mt-3 text-4xl font-bold leading-tight md:text-5xl">
          JagaGrid
        </h1>

        <p className="mt-2 text-lg font-medium text-violet-600 dark:text-violet-400 sm:text-xl">
          High-Risk Tree Monitoring Application for Power Distribution Lines
        </p>

        <p className="mt-5 w-full max-w-none break-words text-justify text-base leading-7 text-gray-600 dark:text-gray-300 sm:text-lg sm:leading-8 lg:text-xl">
          JagaGrid is a Flutter-based mobile application developed to support the
          monitoring of high-risk trees located near PLN power distribution lines.
          The application helps field officers record, map, and monitor trees that
          may potentially interfere with electrical grid reliability.
        </p>
      </section>

{/* Cover Image */}
<section className="mt-8 w-full">
  <Image
    src={coverJagaGrid}
    alt="JagaGrid mobile application"
    priority
    quality={100}
    sizes="100vw"
    className="block h-auto w-full rounded-2xl"
  />
</section>

      {/* Project Overview */}
      <section className="mt-16">
        <h2 className="mb-5 text-3xl font-bold">Project Overview</h2>

        <div className="space-y-5 text-justify text-gray-600 dark:text-gray-300">
          <p className="leading-8">
            JagaGrid was designed to improve the efficiency of field monitoring
            activities related to vegetation located near PLN electrical
            distribution infrastructure. Trees located too close to power
            distribution lines may create operational risks and potentially
            disrupt electricity distribution.
          </p>

          <p className="leading-8">
            The application integrates Firebase for real-time data storage and
            synchronization. Field officers can record tree information,
            document field conditions, upload monitoring results, and update
            maintenance activities through a centralized mobile system.
          </p>

          <p className="leading-8">
            GPS-based mapping is used to record the precise location of each
            high-risk tree. The application also provides map-based monitoring,
            field reporting, notifications, and Telegram integration to deliver
            real-time updates related to tree trimming and maintenance
            activities.
          </p>

          <p className="leading-8">
            This project focuses on improving field monitoring efficiency,
            geographic data accuracy, information availability, and operational
            response speed in supporting the reliability of PLN power
            distribution infrastructure.
          </p>
        </div>
      </section>

      {/* Project Objectives */}
      <section className="mt-16">
        <h2 className="mb-6 text-3xl font-bold">Project Objectives</h2>

        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-grey-800">
            <h3 className="text-lg font-semibold text-violet-600 dark:text-violet-400">
              Improve Field Monitoring
            </h3>

            <p className="mt-3 text-justify leading-7 text-gray-600 dark:text-gray-300">
              Provide field officers with a centralized mobile platform for
              recording, monitoring, and managing high-risk tree data near power
              distribution lines.
            </p>
          </article>

          <article className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-grey-800">
            <h3 className="text-lg font-semibold text-violet-600 dark:text-violet-400">
              Increase Location Accuracy
            </h3>

            <p className="mt-3 text-justify leading-7 text-gray-600 dark:text-gray-300">
              Use GPS coordinates and GIS-based mapping to accurately identify
              and visualize high-risk tree locations around electrical
              distribution infrastructure.
            </p>
          </article>

          <article className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-grey-800">
            <h3 className="text-lg font-semibold text-violet-600 dark:text-violet-400">
              Accelerate Operational Response
            </h3>

            <p className="mt-3 text-justify leading-7 text-gray-600 dark:text-gray-300">
              Deliver real-time monitoring data and operational notifications
              to support faster tree trimming, maintenance, and risk mitigation
              activities.
            </p>
          </article>
        </div>
      </section>

      {/* Key Contributions */}
      <section className="mt-16">
        <h2 className="mb-5 text-3xl font-bold">Key Contributions</h2>

        <ul className="list-disc space-y-3 pl-6 text-justify leading-7 text-gray-600 dark:text-gray-300">
          {contributions.map((contribution) => (
            <li key={contribution}>{contribution}</li>
          ))}
        </ul>
      </section>

      {/* Tech Stack */}
      <section className="mt-16">
        <h2 className="mb-6 text-3xl font-bold">Tech Stack</h2>

        <div className="flex flex-wrap gap-3">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full bg-violet-100 px-4 py-2 font-medium text-violet-700 dark:bg-violet-900/40 dark:text-violet-300"
            >
              {technology}
            </span>
          ))}
        </div>
      </section>

      {/* Key Features */}
      <section className="mt-16">
        <h2 className="mb-6 text-3xl font-bold">Key Features</h2>

        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-grey-800"
            >
              <h3 className="text-lg font-semibold">{feature.title}</h3>

              <p className="mt-2 text-justify leading-7 text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Application Workflow */}
      <section className="mt-16">
        <h2 className="mb-6 text-3xl font-bold">Application Workflow</h2>

        <div className="grid gap-4 md:grid-cols-4">
          {workflow.map((step) => (
            <article
              key={step.number}
              className="rounded-xl bg-gray-50 p-5 dark:bg-grey-800"
            >
              <span className="text-2xl font-bold text-violet-600 dark:text-violet-400">
                {step.number}
              </span>

              <h3 className="mt-3 font-semibold">{step.title}</h3>

              <p className="mt-2 text-justify text-sm leading-6 text-gray-600 dark:text-gray-300">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </section>

{/* Project Gallery */}
<section className="mt-16">
  <h2 className="mb-8 text-3xl font-bold">Project Gallery</h2>

  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {galleryImages.map((image) => (
      <div
        key={image.src}
        className="relative aspect-[9/19] w-full"
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          quality={100}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-contain"
        />
      </div>
    ))}
  </div>
</section>

      {/* Project Impact */}
      <section className="mt-16 rounded-2xl bg-violet-50 p-8 dark:bg-violet-950/30">
        <h2 className="text-3xl font-bold">Project Impact</h2>

        <p className="mt-5 max-w-4xl text-justify leading-8 text-gray-600 dark:text-gray-300">
          JagaGrid supports more structured, accurate, and responsive vegetation
          monitoring around electrical distribution lines. The integration of
          real-time data storage, GPS mapping, field reporting, and Telegram
          notifications helps improve information availability and supports
          faster operational responses.
        </p>

        <p className="mt-5 max-w-4xl text-justify leading-8 text-gray-600 dark:text-gray-300">
          Through a centralized mobile application, field officers can document
          high-risk trees more systematically, reduce the possibility of
          inaccurate location records, and communicate monitoring results more
          efficiently to relevant operational personnel.
        </p>
      </section>

      {/* Action Buttons */}
{/* Action Buttons */}
<section className="mt-16 flex flex-wrap gap-4">
  <a
    href="https://github.com/hnnayy/PLN-JagaGRID-New.git"
    target="_blank"
    rel="noreferrer"
    className="rounded-xl bg-black px-6 py-3 font-medium text-white transition-opacity hover:opacity-80 dark:bg-white dark:text-black"
  >
    GitHub Repository
  </a>

  <button
    type="button"
    onClick={() => setShowVideo(true)}
    className="rounded-xl bg-violet-600 px-6 py-3 font-medium text-white transition-colors hover:bg-violet-700"
  >
    Watch Demo Video
  </button>
</section>

{/* Video Modal */}
{showVideo && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
    onClick={() => setShowVideo(false)}
  >
    <div
      className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-black shadow-2xl"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        type="button"
        onClick={() => setShowVideo(false)}
        className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-2xl text-white transition hover:bg-black"
        aria-label="Close video"
      >
        ×
      </button>

      <video
        controls
        autoPlay
        playsInline
        className="h-auto max-h-[85vh] w-full"
      >
        <source
          src="/videos/jagagrid-demo.mp4"
          type="video/mp4"
        />

        Your browser does not support the video tag.
      </video>
    </div>
  </div>
)}
    </main>
  );
}