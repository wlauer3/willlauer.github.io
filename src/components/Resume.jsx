import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Resume = () => {
    return(
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} `}>Read more</p>
                <h2 className={`${styles.sectionHeadText}`}>Resume</h2>
            </motion.div>

            <div className='w-full flex'>
                <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
            >   
                View the PDF
                </motion.p>
            </div>

            <div className='mt-20 flex flex-wrap gap-7'>
            
            </div>
        </>
    )
}


export default SectionWrapper(Resume, "resume");