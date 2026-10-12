import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import { DraftLabelsProvider } from './contexts/DraftLabelsContext';
import { Layout } from './components/layout/Layout';
import { ScrollManager } from './components/layout/ScrollManager';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Academics } from './pages/Academics';
import { ProgramDetail } from './pages/ProgramDetail';
import { Admissions } from './pages/Admissions';
import { Facilities } from './pages/Facilities';
import { Gallery } from './pages/Gallery';
import { News } from './pages/News';
import { NewsArticle } from './pages/NewsArticle';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

type AppProps = {
  /** Show "Editable draft", "Placeholder photo" and "Sample" labels across the site. */
  showDraftLabels?: boolean;
};

export function App({ showDraftLabels = true }: AppProps) {
  return (
    <DraftLabelsProvider value={showDraftLabels}>
      <MotionConfig reducedMotion="user">
        <BrowserRouter>
          <ScrollManager />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/academics" element={<Academics />} />
              <Route path="/academics/:slug" element={<ProgramDetail />} />
              <Route path="/admissions" element={<Admissions />} />
              <Route path="/facilities" element={<Facilities />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/news" element={<News />} />
              <Route path="/news/:slug" element={<NewsArticle />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </MotionConfig>
    </DraftLabelsProvider>);

}