import React from 'react';
import { HomeHero } from '../components/home/HomeHero';
import { HighlightsSection } from '../components/home/HighlightsSection';
import { ProgramsSection } from '../components/home/ProgramsSection';
import { AboutSection } from '../components/home/AboutSection';
import { ValuesSection } from '../components/sections/ValuesSection';
import { WhyChooseSection } from '../components/home/WhyChooseSection';
import { CampusSection } from '../components/home/CampusSection';
import { AdmissionCTA } from '../components/sections/AdmissionCTA';
import { NewsSection } from '../components/home/NewsSection';

export function Home() {
  return (
    <>
      <HomeHero />
      <HighlightsSection />
      <ProgramsSection />
      <AboutSection />
      <ValuesSection />
      <WhyChooseSection />
      <CampusSection />
      <AdmissionCTA />
      <NewsSection />
    </>);

}