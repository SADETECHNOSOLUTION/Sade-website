import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";

const Course = () => {
  const data = [
    {
      id: 1,
      heading: "IT CONSULTANCY",
      description:
        "Our consulting approach is unique and sets businesses apart from their competition. We aim to modernize legacy systems and create breakthroughs, which enables enterprises to integrate value-driven, customer-focused, and futuristic solutions that optimize costs and increase customer satisfaction.",
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
      heading: "QA & TESTING",
      description:
        "Our team collaborates and provide top-notch QA services, businesses can enhance the quality of their products, augment customer satisfaction, and attain a competitive edge in the ever-changing market scenario to enhance attain superior standards in quality of their projects..",
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
      heading: "WEB APP DEVELOPMENT",
      description:
        " we provide complete web application development services encompassing design, prototyping, construction, and seamless migration to modern web design and development and delivering  secure, scalable, and responsive applications that align with your needs",
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
      heading: "SAAS PRODUCTS",
      description:
        "In order to meet the business requirements, an efficient transition to a SaaS business model is crucial. Sade tech's strategy for SaaS product development, businesses can benefit from a reliable product that is designed to scale. we can build an end-to-end SaaS solution that includes web apps, APIs, cloud storage capabilities, and data analytics. ",
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
      heading: "DIGITAL MARKETING",
      description:
        "Transform your brand's online presence with Sade techno's innovative digital marketing services. With our customized solutions, your digital footprint will soar above the competition, In to amplifying your business achieving your business goals through innovative digital marketing strategies.",
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
      heading: "MOBILE APP DEVELOPMENT",
      description:
        "Elevate your software products with cutting-edge UI/UX design services that enhance user engagement and boost revenue.  mobile applications that deliver a seamless user experience coupled with powerful functionality. we customize each app to align with your business goals.",
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

  <div className="flex flex-col items-center w-full pt-12">
    <span className="bg-dark text-white text-3xl font-[700] text-center px-16">
      Our Services
    </span>
    <div className="w-28 h-0.5 bg-cta mt-2 rounded-full" />
  </div>

  <div className="p-4 flex flex-wrap ">
    {data
    .map((info) => (
      <div className="w-1/3 p-4">
<div className="relative group shadow-xl shadow-cta cursor-pointer border-b-2 border-cta h-64 flex items-center justify-between p-4">
  {/* Glow effect */}
  <div className="absolute top-0 left-0 w-full h-full bg-[#00BBAA] opacity-30 blur-2xl rounded-3xl -z-10" />
  
  {/* Content */}
  <div className="flex flex-col gap-4">
    <span className="text- text-3xl font-[600] text-cta">
      {info.heading}
    </span>
    <span className="text-white">{info.description}</span>
  </div>
</div>


      </div>
    ))}
  </div>
</div>

  );
};

export default Course;
