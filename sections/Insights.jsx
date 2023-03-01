'use client';

import styles from '../styles';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';
import { InsightCard, NewFeatures, TitleText, TypingText } from '../components';
import { insights } from '../constants';
const Insights = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: 'false', amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="Insight" textStyles="text-center" />
      <TitleText title="Insight about metaverse" textStyles="text-center" />
      <div className=" flex flex-col gap-[30px] mt-[50px] ">
        {insights.map((insight, index) => (
          <InsightCard
            key={`insight-${index}`}
            {...insight}
            index={index + 1}
          />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Insights;
