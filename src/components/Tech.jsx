import React from 'react';
import { motion } from 'framer-motion';

import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { textVariant } from '../utils/motion';
import { styles } from '../styles';

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>What I have learned so far</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Skills.</h2>
      </motion.div>

      <div className='flex flex-row flex-wrap mt-20 justify-center gap-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28 flex flex-col items-center' key={technology.name}>
            <BallCanvas icon={technology.icon} />
            <span>{technology.name}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, 'skill');
