/* eslint-disable no-shadow */

'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer } from '../utils/motion';
import { NewsCard, TitleText } from '../components';
import { links, news } from '../constants';

const News = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TitleText title="News" textStyles="text-center" />
      <div className="mt-[50px] flex flex-col gap-[30px]">
        {news.map((news, index) => (
          <NewsCard
            key={`news-${index}`}
            {...news}
            index={index + 1}
          />
        ))}
      </div>
    </motion.div>
  </section>
);

export default News;
