import React from "react";
import { SectionWrapper } from "../hoc";
import { BallCanvas } from "./canvas";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
      <motion.div variant={textVariant()}>
        <p className={styles.sectionSubText}>Technologies which I Use</p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary tect-[17px] max-w-3xl leading-[30px]"
      >
        I use fairly modern technologies to build stunning Website and Keep
        myself up-to-dated.
      </motion.p>
      <br /> <br />
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => {
          return (
            <div className="w-28 h-28" key={technology.name}>
              <BallCanvas icon={technology.icon}></BallCanvas>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "Tech");
