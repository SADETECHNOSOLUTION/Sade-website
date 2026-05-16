import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Section = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 60 });
    }
  }, [inView, controls]);

return (
  <div className="relative h-[40rem] flex flex-col gap-16 items-center justify-center bg-dark px-4 overflow-hidden">
    {/* Blurred Background */}
    <div className="absolute inset-0 bg-[#fff]  z-0"></div>


    {/* Glowing Blobs */}
    <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#3ABC6C] rounded-full mix-blend-screen blur-3xl opacity-20 animate-float z-10"></div>
    <div className="absolute top-0 left-1/2 w-96 h-96 bg-[#3ABC6C] rounded-full mix-blend-screen blur-2xl opacity-20 animate-float-slow z-10"></div>

    {/* Main Motion Content */}
    <div
      ref={ref}
      animate={controls}
      initial={{ opacity: 0, y: 60 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-4xl flex flex-col items-center text-center space-y-4 mt-6 z-20"
    >
      <img className="w-5/6" src="logo.png" />
      <div className="w-full">
      <p className="text-4xl w-full pt-6 font-[600] text">
The destination where your software comes to life.
</p>
      </div>

    <p className="text-lg w-5/6 text-300">
  <span>Sade techno solutions</span> and services company that does great work
We are a fast-growing IT company in India, providing one-stop IT solutions and services with a professional approach.
      </p>
    </div>

  </div>
);

};

export default Section;
