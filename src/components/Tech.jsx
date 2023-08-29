import React from "react";
import Tilt from "react-parallax-tilt";

import { technologies } from "../constants";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, name, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {name}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);


const Tech = () => {
  return (
    <div className='flex flex-column flex-wrap justify-center'>
        <h2 className={styles.sectionText}>Tools I Use</h2>
        <div className='mt-20 flex flex-wrap gap-10'>
        {technologies.map((technology, index) => (
          <ServiceCard key={technology.name} index={index} {...technology} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");