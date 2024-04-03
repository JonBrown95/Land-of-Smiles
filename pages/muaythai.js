import React from "react";

function MuayThai() {
  return (
    <section className="min-h-screen bg-[#f0f0f0] py-12 flex items-center justify-center">
      <article className="max-w-4xl w-full mx-6 p-8">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 text-thailand-blue text-center">
          Muay Thai in Thailand
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed text-center">
          Muay Thai, known as "The Art of Eight Limbs," is a cultural treasure
          and a powerful martial art that originated in Thailand. Beyond its
          roots, Muay Thai has evolved into a global phenomenon, attracting
          enthusiasts and fighters from all corners of the world.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-start">
            <div className="rounded-full flex items-center justify-center w-12 h-12 mr-4">
              <img
                src="/tickIcon.svg"
                alt="Tick icon"
                className="w-6 h-6 text-white"
              />
            </div>
            <p className="text-gray-700">
              <span className="font-bold">Physical Fitness:</span> Improve
              cardiovascular health and overall fitness through Muay Thai's
              intense workouts.
            </p>
          </div>
          <div className="flex items-start">
            <div className="rounded-full  flex items-center justify-center w-12 h-12 mr-4">
              <img
                src="/tickIcon.svg"
                alt="Tick icon"
                className="w-6 h-6 text-white"
              />
            </div>
            <p className="text-gray-700">
              <span className="font-bold">Mental Discipline:</span> Develop
              focus, discipline, and mental toughness through Muay Thai
              training.
            </p>
          </div>
          <div className="flex items-start">
            <div className="rounded-full  flex items-center justify-center w-12 h-12 mr-4">
              <img
                src="/tickIcon.svg"
                alt="Tick icon"
                className="w-6 h-6 text-white"
              />
            </div>
            <p className="text-gray-700">
              <span className="font-bold">Self-Defense Skills:</span> Learn
              effective self-defense techniques as part of Muay Thai's
              comprehensive training.
            </p>
          </div>
          <div className="flex items-start">
            <div className="rounded-full flex items-center justify-center w-12 h-12 mr-4">
              <img
                src="/tickIcon.svg"
                alt="Tick icon"
                className="w-6 h-6 text-white"
              />
            </div>
            <p className="text-gray-700">
              <span className="font-bold">Stress Relief:</span> Muay Thai serves
              as an excellent stress reliever, allowing you to channel your
              energy positively.
            </p>
          </div>
        </div>

        <p className="text-lg md:text-xl text-gray-700 py-8 leading-relaxed">
          Experience the unique blend of tradition and modernity as you delve
          into the world of Muay Thai in Thailand. Whether you're a seasoned
          fighter or a fitness enthusiast, Muay Thai offers a journey of
          physical and mental transformation.
        </p>

        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="md:shrink-0">
              <img
                className="h-48 w-full object-cover md:h-full md:w-48"
                src="boxing.jpg"
                alt="Two men Thai boxing"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-red-500 font-semibold">
                Travelling to Thailand for Muay Thai?
              </div>
              <a
                href="https://muaythaiadvisor.com/"
                target="_blank"
                className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
              >
                Check out Muay Thai Advisor
              </a>
              <p className="mt-2 text-slate-500">
                Amazing website that provides an overview of each gym across the
                different regions of Thailand!
              </p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default MuayThai;
