import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { services } from "../../constants";
import { fadeIn } from "../../utils/motion";
import { SectionWrapper } from "../../hoc";
import { image3301 } from "../../assets";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-white rounded-[20px] py-5 px-12
          min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img
            src={icon}
            alt={title}
            className="w-full h-full object-contain"
          />
          <h3
            className="text-black text-[20px] font-bold 
          text-center"
          >
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const HomePage = () => {
  return (
    <div>
      <div className="w-full items-center object-center">
        <img src={image3301} className="w-full max-h-64 object-contain" />
      </div>
      <motion.div>
        <h2 className="text-black font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          About Us
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[20px] max-w-6xl leading-[25px] text-justify"
      >
        V+ Enterprises is a leading supplier of high-quality cleaning products,
        dedicated to providing businesses and households with effective,
        eco-friendly, and affordable cleaning solutions. With a wide range of
        products designed for diverse cleaning needs, we cater to industries
        including hospitality, healthcare, education, retail, and residential
        clients.
      </motion.p>

      <motion.div>
        <p className="sm:text-[28px] mt-4 pt-4 text-[24px] text-secondary uppercase tracking-wider">
          Our Mission
        </p>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[20px] max-w-6xl leading-[25px] text-justify"
      >
        We want to deliver exceptional cleaning products that promote
        health,hygiene, safety, and environmental sustainability.
      </motion.p>

      <motion.div>
        <p className="sm:text-[28px] mt-4 pt-4 text-[24px] text-secondary uppercase tracking-wider">
          Our Vision
        </p>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[20px] max-w-6xl leading-[25px] text-justify"
      >
        At V+ Enterprise we are passionate about hygiene and dedicated to
        providing the best products for your cleaning needs. Let us help you
        maintain a cleaner, healthier environment.
      </motion.p>

      <div id="product" className=" mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <div className="md:w-auto w-full">
            <a href={`/product/${service.title}`}>
              <ServiceCard key={service.title} index={index} {...service} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(HomePage, "about");
// export default HomePage;
