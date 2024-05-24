import React from "react";
import Tilt from "react-parallax-tilt";

import { technologies } from "../constants";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, name, icon }) => (
  
    <Tilt className='xs:w-[198px] w-full flex items-center justify-center'>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.30, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 0,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[198px] flex justify-evenly items-center flex-col'
        >
          <img
            src={icon}
            alt='web-development'
            className='w-17 h-17 object-contain'
          />

          <h3 className='text-white text-[17px] font-bold text-center'>
            {name}
          </h3>
        </div>
      </motion.div>
    </Tilt>
 
);



const Tech = () => {
  return (
    <div className='flex flex-column flex-wrap justify-evenly'>
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