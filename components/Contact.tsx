"use client";

import Image from "next/image";
import SectionWrapper from "./SectionWrapper";
import { FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Contact = () => {
  const githubUrl = "https://github.com/syifaamdh";
  const email = "syifaamdh@gmail.com";

  const emailSubject = encodeURIComponent(
    "Opportunity to Connect - Syifa Amara Dhestyani"
  );

  const emailBody = encodeURIComponent(
    `Hello Syifa,

I visited your portfolio and would like to discuss an opportunity or collaboration with you.

Best regards,`
  );

  // Membuka halaman compose Gmail
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    email
  )}&su=${emailSubject}&body=${emailBody}`;

  return (
    <SectionWrapper
      id="contact"
      className="xl:max-w-6xl my-24 lg:mx-10 xl:mx-auto mx-4 relative overflow-hidden flex flex-col-reverse md:flex-row gap-8 items-center bg-gradient-to-r from-violet-700 to-purple-700 text-white rounded-2xl p-6 md:p-8 lg:px-12 lg:py-16 z-10 scroll-mt-24"
    >
      {/* Content */}
      <div className="flex flex-col md:w-1/2 lg:w-3/5">
        <h2 className="text-2xl lg:text-4xl font-extrabold">
          Let&apos;s Work{" "}
          <span className="text-yellow-400">
            Together.
          </span>
        </h2>

        <h3 className="md:text-base lg:text-xl font-medium mt-2">
          Open to professional opportunities and collaboration.
        </h3>

        <p className="text-sm md:text-base mt-3 md:mt-6 leading-7 text-violet-100 text-justify">
          I am currently open to opportunities in software engineering,
          backend development, mobile development, cybersecurity, DevSecOps,
          and data analytics. Visit my GitHub or contact me directly through
          email.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center gap-4 mt-6">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Syifa Amara Dhestyani GitHub"
            className="py-2.5 px-5 bg-white text-gray-900 rounded-lg w-fit flex items-center gap-2 font-medium hover:bg-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <FaGithub size={20} />
            View GitHub
          </a>

          <a
            href={gmailUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Send email to Syifa Amara Dhestyani"
            className="py-2.5 px-5 bg-violet-900 text-white rounded-lg w-fit flex items-center gap-2 font-medium hover:bg-violet-950 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <FiMail size={20} />
            Contact Me
          </a>
        </div>
      </div>

      {/* Image */}
      <div className="w-full md:w-1/2 h-56 md:h-64 lg:w-96 mx-auto rounded-2xl overflow-hidden bg-white/10 shadow-xl">
        <Image
          src="/images/profc.png"
          alt="Syifa Amara Dhestyani"
          width={1000}
          height={1000}
          quality={100}
          className="w-full h-full object-cover object-top"
        />
      </div>
    </SectionWrapper>
  );
};

export default Contact;