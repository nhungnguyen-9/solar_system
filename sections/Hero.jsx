'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1
          variants={textVariant(1.1)}
          className={styles.heroHeading}
        >
          Our Solar System
        </motion.h1>
      </div>

      <motion.div
        className="relative w-full md:mt-[20px] -mt-[12px]"
      >
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />
        <video src="/hero.mp4" alt="cover" autoPlay loop muted className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative" />
      </motion.div>
    </motion.div>

  </section>
);

export default Hero;
