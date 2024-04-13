import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function WhyThailandSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 70%",
        end: "bottom 50%",
        scrub: 1,

        once: true,
      },
    });

    tl.from(section, {
      opacity: 0,
      x: -100,
      duration: 1.5,
      ease: "power4.out",
    });
  }, []);

  return (
    <div className="min-h-0 bg-[#f0f0f0] flex items-center justify-center py-16">
      <div
        ref={sectionRef}
        className="max-w-5xl w-full mx-6 bg-white rounded-3xl shadow-md"
      >
        <h2 className="text-sm mt-4 font-extrabold tracking-widest text-center text-gray-600">
          WHY THAILAND?
        </h2>
        <div className="max-w-md mx-auto px-6">
          <h2 className="text-3xl py-4 font-extrabold tracking-wide text-center text-black">
            Savor gourmet delights, lounge in tropical paradise, and embrace the
            spirit of exploration.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default WhyThailandSection;
