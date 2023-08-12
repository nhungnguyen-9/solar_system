/* eslint-disable jsx-a11y/iframe-has-title */

'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';
import { TitleText, TypingText } from '../components';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Eyes on the Solar System" textStyles="text-center" />
      <TitleText
        title={(<>NASA's Eyes</>)}
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h0[550px]"
      >
        <iframe src="https://eyes.nasa.gov/apps/solar-system/#/home" width="100%" height="650px" />
      </motion.div>
    </motion.div>
  </section>
);

export default World;
