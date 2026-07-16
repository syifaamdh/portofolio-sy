"use client";

import { Achievement } from "@/types/main";

interface Props {
  achievementData: Achievement[];
}

export default function Achievements({ achievementData }: Props) {
  return (
    <section id="achievements" className="py-20">
      <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-14 xl:px-16">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">Achievements</h2>

          <p className="text-gray-500 mt-3">
            Awards, publications, and competitions throughout my academic and
            professional journey.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {achievementData.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-52 w-full object-cover"
              />

              <div className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
                  🏆
                </div>

                <h3 className="text-xl font-bold">{item.title}</h3>

                <p className="mt-1 text-sm text-gray-500">
                  {item.organization} • {item.date}
                </p>

                <p className="mt-4 text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}