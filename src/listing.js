import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";

const Listing = () => {
  const data = [
    {
      id: 1,
      heading: "IT Solutions",
      description:
        "Deliver IT solutions with dedication and professionalism, ensuring efficiency, compliance, and a focus on exceptional results tailored to client needs.",
      icon: (
        <Icon
          icon="streamline:industry-innovation-and-infrastructure-solid"
          className="w-7 h-7"
          style={{ color: "#fff" }}
        />
      ),
    },
    {
      id: 2,
      heading: "IT Security Services",
      description:
        "Implement IT solutions with precision and dedication, ensuring compliance with industry standards while delivering reliable and high-value results.",
      icon: (
        <Icon
          icon="tdesign:app-filled"
          className="w-7 h-7"
          style={{ color: "#fff" }}
        />
      ),
    },
    {
      id: 3,
      heading: "Digital Marketing",
      description:
        "Provide IT solutions with a commitment to quality and efficiency, ensuring seamless integration and reliable results that align with client objectives.",
      icon: (
        <Icon
          icon="material-symbols:diamond-rounded"
          className="w-7 h-7"
          style={{ color: "#fff" }}
        />
      ),
    },
  ];

  return (
    <div className="bg-dark">
      {/* Header */}
      <div className="flex px-16 py-10 items-center justify-center gap-60">
        <div className="flex flex-col gap-10 justify-center w-1/4"> 
      <div className="flex flex-col items-center w-full">
        <span className="bg-dark text-white w-5/6 text-3xl font-[700] text-center px-4">
          What We Offer
        </span>
        <div className="w-28 h-0.5 bg-cta mt-2 -center rounded-full" />
      </div>
            <div className="flex flex-col w-full justify-center bg- gap-8 items-start flex-wrap">
        {data.map((detail, index) => (
          <motion.div
            key={detail.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative p-4 w-full h-44 bg-cta bg-opacity-10 gap-2 flex flex-col rounded-md bg-dark"
          >
            {/* Corner Borders */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cta rounded-tl-md" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cta rounded-tr-md" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cta rounded-bl-md" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cta rounded-br-md" />

            {/* Content */}
            <span className="p-2 bg-cta h-11 w-11 rounded-lg">
            {detail.icon}
            </span>

            <span className="text-lg text-cta font-[600]">{detail.heading}</span>
            <span className="text-white text-sm">{detail.description}</span>
          </motion.div>
        ))}
      </div>
        </div>
<div
  className="w-2/5 h-[44rem] overflow-hidden"
  style={{
    clipPath: 'polygon(25% 0, 100% 0, 100% 90%, 75% 100%, 0 100%, 0 10%)'
  }}
>
  <img className="h-full w-full object-cover" src="video-conferencing.png" />
</div>

      </div>


      {/* Cards */}

    </div>
  );
};

export default Listing;
