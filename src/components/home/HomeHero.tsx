import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronRightIcon, MapPinIcon } from 'lucide-react';
import { ButtonLink } from '../ui/ButtonLink';
import { DraftTag } from '../ui/DraftTag';
import { images } from '../../data/images';
import { programs } from '../../data/programs';
import { school } from '../../data/school';
import { EASE_OUT } from '../../utils/motion';

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } };
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: EASE_OUT } }
};

export function HomeHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '14%']);

  return (
    <section ref={ref} aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-navy-900 text-white">
      <motion.div style={{ y: imageY }} className="absolute inset-y-0 left-0 right-0 -z-20 md:left-[18%]">
        <motion.img
          src={images.hero}
          alt="Smiling learners in navy school uniforms walking together across a school compound"
          className="h-full w-full object-cover"
          animate={{ scale: [1, 1.06] }}
          transition={{ duration: 20, ease: 'linear', repeat: Infinity, repeatType: 'reverse' }} />
        
      </motion.div>
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-navy-900/70 md:bg-transparent md:bg-gradient-to-r md:from-navy-900 md:from-20% md:via-navy-900/75 md:via-50% md:to-navy-900/10" />
      
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-navy-900/80 to-transparent" />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute right-[7%] top-[24%] hidden h-28 w-28 rounded-full border-2 border-gold/60 lg:block"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }} />
      
      <motion.svg
        aria-hidden="true"
        viewBox="0 0 80 40"
        className="pointer-events-none absolute left-[52%] top-[18%] hidden w-20 text-gold/70 lg:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}>
        
        {[-160, -130, -100, -80, -50, -20].map((a) => {
          const r = a * Math.PI / 180;
          return (
            <line
              key={a}
              x1={40 + Math.cos(r) * 18}
              y1={38 + Math.sin(r) * 18}
              x2={40 + Math.cos(r) * 30}
              y2={38 + Math.sin(r) * 30}
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round" />);


        })}
      </motion.svg>

      <DraftTag kind="photo" className="absolute right-5 top-[92px] sm:right-8" />

      <div className="relative mx-auto max-w-7xl px-5 pb-44 pt-36 sm:px-8 md:pb-52 md:pt-44 lg:pb-56 lg:pt-48">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-2xl">
          <motion.p variants={item} className="flex items-center gap-2 text-sm font-medium text-white/85">
            <MapPinIcon className="h-4 w-4 text-gold" aria-hidden="true" />
            {school.location}
          </motion.p>
          <h1
            id="hero-title"
            className="mt-5 font-heading text-[40px] font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl xl:text-[66px]">
            
            <motion.span variants={item} className="block">
              Growing in Knowledge.
            </motion.span>
            <motion.span variants={item} className="block text-gold">
              Grounded in Faith.
            </motion.span>
            <motion.span variants={item} className="block">
              Ready for the Future.
            </motion.span>
          </h1>
          <motion.span
            variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1, transition: { duration: 0.3, ease: EASE_OUT } } }}
            className="mt-7 block h-1 w-24 origin-left rounded-full bg-gold"
            aria-hidden="true" />
          
          <motion.p variants={item} className="mt-7 max-w-xl text-lg leading-relaxed text-white/85">
            At Ranen Adventist School, we nurture young minds through quality education, Christian values, and a
            supportive learning environment where every learner can grow and thrive.
          </motion.p>
          <motion.div variants={item} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink to="/academics" size="lg" withArrow>
              Explore Our Programs
            </ButtonLink>
            <ButtonLink to="/admissions#enquire" variant="outlineLight" size="lg">
              Enquire About Admission
            </ButtonLink>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: EASE_OUT, delay: 0.55 }}
          className="absolute bottom-36 right-8 hidden rounded-2xl bg-navy-900/60 p-5 ring-1 ring-white/15 backdrop-blur-md lg:block">
          
          <p className="text-sm font-semibold text-white">One school, every stage</p>
          <ol className="mt-3 flex items-center gap-1.5 text-[13px] text-white/85" aria-label="Learning pathway">
            {programs.map((p, i) =>
            <li key={p.slug} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRightIcon className="h-3.5 w-3.5 text-gold" aria-hidden="true" />}
                <span className="whitespace-nowrap rounded-full bg-white/10 px-2.5 py-1">{p.shortName}</span>
              </li>
            )}
          </ol>
        </motion.div>
      </div>
    </section>);

}