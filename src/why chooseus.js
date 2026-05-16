import { Icon } from "@iconify/react/dist/iconify.js";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Whychooseus = ()=>{
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
    return(
        <div className="bg-dark flex flex-col justify-">
            <div className="flex flex-col items-center w-full pt-12">
        <span className="bg-dark text-white text-3xl font-[700] text-center px-16">
          Why Choose Us
        </span>
        <div className="w-28 h-0.5 bg-cta mt-2 rounded-full" />
      </div>
      <div className="flex items-start justify-center">
           <div className="p-20 w-1/2 ">
        <img className="rounded-md h-96 w-full" src="about.png" />
            </div>
                       <div className="w-1/2 flex flex-col gap-8 p-20">
                       <span  className="text-white text-lg font-[600]">Specializing in web and mobile app development, our company takes pride in crafting top-tier software products. Our adept team of developers possesses expertise across diverse technology stacks, enabling us to seamlessly integrate pioneering design with state-of-the-art app development services. Be it consumer-facing interfaces or B2B applications, we excel in tailoring custom software for a multitude of digital platforms, encompassing mobile, web, and desktop environments.</span>
                       <span className="text-white text-lg font-[600]">
                        Our commitment lies in crafting software that boasts full functionality, resilience, and scalability, built to endure the trials of time. From technology consultation to development, rigorous testing, dependable support, and ongoing maintenance, we ensure your software journey is guided by capable hands at every stage. Leveraging our established success, we adeptly audit, enhance, and rejuvenate existing apps, modernizing legacy applications to align with contemporary needs and expectations.
                       </span>
                       </div> 

      </div>
 
        </div>
    )
}

export default Whychooseus;