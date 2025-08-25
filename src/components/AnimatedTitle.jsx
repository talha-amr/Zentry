import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const AnimatedTitle = ({ title, containerClass }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const split = new SplitText(containerRef.current, {
        type: "lines",
        linesClass: "animated-line",
        reduceWhiteSpace: false,
      });

      gsap.fromTo(
        split.lines,
        {
          opacity: 0,
          transform: "translate3d(0, 80px, -200px) rotateY(45deg) rotateX(90deg)",
        },
        {
          opacity: 1,
          transform: "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)",
          ease: "power2.inOut",
          stagger: 0.02,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 100%",
            end: "top 60%",
            toggleActions: "restart none none reverse",
            once: false,
          },
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
