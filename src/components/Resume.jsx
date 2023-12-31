import React from "react";
import { motion } from "framer-motion";
import "./components.css";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";


const Resume = () => {
    return(
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} text-center`}><a href="https://github.com/wlauer3/willlauer.github.io/blob/437178fb83b07c57b1e66ec2bd2727872b7f7234/Resume1.pdf" target="_blank" rel="noopener noreferrer" className="glow-link">View the PDF</a></p>  
                <h2 className={`${styles.sectionHeadText} text-center`}>Resume</h2>
            </motion.div>

            <div className='w-full flex'>
                <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
            >  
                </motion.p>
            </div>
        </>
    )
}

export default SectionWrapper(Resume, "resume");