import React from 'react';
import { motion } from 'framer-motion';
import { EASE_OUT } from '../../utils/motion';

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  y?: number;
  as?: 'div' | 'li' | 'article';
};

const tags = { div: motion.div, li: motion.li, article: motion.article };

export function Reveal({ children, delay = 0, className, y = 20, as = 'div' }: RevealProps) {
  const Tag = tags[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.3, ease: EASE_OUT, delay }}>
      
      {children}
    </Tag>);

}