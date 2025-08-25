import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText"; 

gsap.registerPlugin(ScrollTrigger, SplitText);

const AnimatedTitle = ({ title, containerClass }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // ✅ Split by lines instead of words
      const split = new SplitText(containerRef.current, {
        type: "lines",
        linesClass: "animated-line",
        reduceWhiteSpace: false,
      });

gsap.fromTo(
  split.lines,
  {
    opacity: 0,
    y: 80,              // 👈 slightly from below
    z: -200,            // 👈 behind
    rotationX: 105,      // 👈 small tilt, not too strong
    transformPerspective: 1000,
    transformStyle: "preserve-3d",
  },
  {
    scrollTrigger: {
      trigger: containerRef.current,
      start: "top 100%",
      end: "top 60%",
      toggleActions: "restart none none reverse",
      once: false,
    },
    opacity: 1,
    y: 0,
    z: 0,
    rotationX: 0,       // 👈 settles upright
    stagger: 0.2,       // smoother stagger
    duration: 1.2,
    ease: "power2.out",
  }
);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <h2
      ref={containerRef}
      className={`animated-title ${containerClass || ""} text-4xl font-bold`}
      dangerouslySetInnerHTML={{ __html: title }}
    />
  );
};

export default AnimatedTitle;
