import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";

const Curriculum = () => {
  const data = [
    {
      id: 1,
      heading: "IT CONSULTANCY",
      description:
        "Our software testing classes offer unique and exceptional features that distinguish us from others in the field.",
      icon: (
        <Icon
          icon="streamline:industry-innovation-and-infrastructure-solid"
          className="w-9 h-9"
          style={{ color: "#00BBAA" }}
        />
      ),
    },
    {
      id: 2,
      heading: "Annual Testing",
      description:
        "Enhance your proficiency and understanding by developing hands-on skills through interactive projects and receiving manual testing training.",
      icon: (
        <Icon
          icon="tdesign:app-filled"
          className="w-9 h-9"
          style={{ color: "#00BBAA" }}
        />
      ),
    },
    {
      id: 3,
      heading: "API Testing",
      description:
        "Acquire industry-recognized certifications to highlight your proficiency and elevate your career opportunities amidst a fiercely competitive job market.",
      icon: (
        <Icon
          icon="material-symbols:diamond-rounded"
          className="w-9 h-9"
          style={{ color: "#00BBAA" }}
        />
      ),
    },
        {
      id: 4,
      heading: "ETL Testing",
      description:
        "Acquire industry-recognized certifications to highlight your proficiency and elevate your career opportunities amidst a fiercely competitive job market.",
      icon: (
        <Icon
          icon="material-symbols:diamond-rounded"
          className="w-9 h-9"
          style={{ color: "#00BBAA" }}
        />
      ),
    },
        {
      id: 5,
      heading: "Salesforce Testing",
      description:
        "Acquire industry-recognized certifications to highlight your proficiency and elevate your career opportunities amidst a fiercely competitive job market.",
      icon: (
        <Icon
          icon="material-symbols:diamond-rounded"
          className="w-9 h-9"
          style={{ color: "#00BBAA" }}
        />
      ),
    },
        {
      id: 6,
      heading: "Nonfunctional Testing",
      description:
        "Acquire industry-recognized certifications to highlight your proficiency and elevate your career opportunities amidst a fiercely competitive job market.",
      icon: (
        <Icon
          icon="material-symbols:diamond-rounded"
          className="w-9 h-9"
          style={{ color: "#00BBAA" }}
        />
      ),
    },
  ];

  return (
    <div className="bg-dark px-16">
      {/* Header */}
      <div className="flex flex-col items-center w-full pt-12">
        <span className="bg-dark text-white text-3xl font-[700] text-center px-16">
          Our Curricum
        </span>
        <div className="w-28 h-0.5 bg-cta mt-2 rounded-full" />
      </div>

      {/* Cards */}
<div className="p-4">
{data.map((info)=>(
<div className="group p-4 cursor-pointer border-b-2 hover:bg-cta border-gray-600 flex items-center justify-between">
  <span className="text-white group-hover:text- text-3xl font-[600]">
    {info.heading}
  </span>
  <Icon
    icon="octicon:arrow-left-24"
    className="w-11 h-11 text-white group-hover:text-"
    style={{ transform: 'rotate(140deg)' }}
  />
</div>

))}
</div>
    </div>
  );
};

export default Curriculum;
