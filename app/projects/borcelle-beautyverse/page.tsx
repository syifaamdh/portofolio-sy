import Image from "next/image";
import Link from "next/link";

export default function BorcelleBeautyverse() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">

      {/* Back */}
      <Link href="/#projects" className="text-violet-600 hover:underline">
        ← Back to Portfolio
      </Link>

      {/* Hero */}
      <section className="mt-8">

        <p className="uppercase font-semibold text-violet-600">
          UI/UX Design • Figma • Mobile App
        </p>

        <h1 className="text-5xl font-bold mt-3">
          Borcelle Beautyverse
        </h1>

        <p className="mt-5 text-sm md:text-base leading-7 text-gray-600 text-justify">
          Borcelle Beautyverse is a beauty shopping mobile application designed
          using Figma. The application provides a modern user experience with
          intuitive navigation, virtual beauty try-on concepts, and seamless
          shopping interactions.
        </p>

      </section>

      {/* Cover */}
      <section className="mt-10">

        <Image
          src="/images/projects/borcelle/cover.png"
          alt="Borcelle Beautyverse"
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
          This project focuses on designing a complete mobile beauty application
          interface, including user flow, product catalog, AR beauty concept,
          shopping cart, and checkout experience. The design emphasizes usability,
          visual consistency, and modern UI principles.
        </p>

      </section>

      {/* My Role */}
      <section className="mt-16">

        <h2 className="text-3xl font-bold mb-5">
          My Role
        </h2>

        <ul className="list-disc pl-6 space-y-3 text-sm md:text-base text-gray-600 leading-7">

          <li>Designed the complete UI using Figma.</li>

          <li>Created user flow and wireframes.</li>

          <li>Designed high-fidelity mockups.</li>

          <li>Built reusable design components.</li>

          <li>Created interactive prototypes.</li>

        </ul>

      </section>

      {/* Tech Stack */}
      <section className="mt-16">

        <h2 className="text-3xl font-bold mb-6">
          Design Tools
        </h2>

        <div className="flex flex-wrap gap-3">

          {[
            "Figma",
            "Auto Layout",
            "Components",
            "Prototype",
            "Design System",
            "Wireframe"
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
          Main Screens
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="border rounded-xl p-5">Home</div>

          <div className="border rounded-xl p-5">Product Catalog</div>

          <div className="border rounded-xl p-5">Product Detail</div>

          <div className="border rounded-xl p-5">AR Virtual Try-On</div>

          <div className="border rounded-xl p-5">Shopping Cart</div>

          <div className="border rounded-xl p-5">Checkout</div>

        </div>

      </section>

      {/* Gallery */}
      <section className="mt-16">

        <h2 className="text-3xl font-bold mb-6">
          Gallery
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div>
            <h3 className="font-semibold mb-2">Home Screen</h3>
            <Image
              src="/images/projects/borcelle/home.png"
              alt="Home"
              width={1200}
              height={700}
              className="rounded-xl border w-full h-auto"
            />
          </div>

          <div>
            <h3 className="font-semibold mb-2">Product Detail</h3>
            <Image
              src="/images/projects/borcelle/detail.png"
              alt="Detail"
              width={1200}
              height={700}
              className="rounded-xl border w-full h-auto"
            />
          </div>

          <div>
            <h3 className="font-semibold mb-2">AR Try-On</h3>
            <Image
              src="/images/projects/borcelle/ar.png"
              alt="AR"
              width={1200}
              height={700}
              className="rounded-xl border w-full h-auto"
            />
          </div>

          <div>
            <h3 className="font-semibold mb-2">Community</h3>
            <Image
              src="/images/projects/borcelle/community.png"
              alt="Community"
              width={1200}
              height={700}
              className="rounded-xl border w-full h-auto"
            />
          </div>

        </div>

      </section>

      {/* Button */}
      <section className="mt-16">

        <a
          href="https://www.figma.com/design/9rQFKeOnnBZDMgDmneal8h/Untitled?node-id=0-1&t=msZlgujNfn3vG7tr-0"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-violet-600 text-white px-6 py-3 rounded-xl hover:bg-violet-700 transition-all"
        >
          View Figma Prototype
        </a>

      </section>

    </main>
  );
}