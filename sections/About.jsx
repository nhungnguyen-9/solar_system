'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';
import { TypingText } from '../components';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto $ {styles.flexCenter} flex-col `}
    >
      <TypingText title="| Why is it Called the Solar System?"
        textStyles="text-center"
      />

      <motion.p
        variants={fadeIn('up', 'tween', 0.5, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        There are <span className="font-extrabold text-white">many planetary systems</span> like ours in the universe, with planets <span className="font-extrabold text-white">orbiting a host star</span>.
        Our planetary system is called “the solar system” because we use the word “solar” to describe
        things related to our star, after the Latin word for Sun, "solis."
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[1300px] h-[28px] object-contain mt-[28px]"
      />

    </motion.div>
  </section>
);

export default About;
