import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ImageOffIcon } from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { DraftTag } from '../components/ui/DraftTag';
import { GalleryTile } from '../components/ui/GalleryTile';
import { galleryCategories, galleryItems } from '../data/gallery';
import type { GalleryCategory } from '../data/gallery';
import { images } from '../data/images';
import { EASE_OUT } from '../utils/motion';

type Filter = 'All' | GalleryCategory;

export function Gallery() {
  const [filter, setFilter] = useState<Filter>('All');
  const filters: Filter[] = ['All', ...galleryCategories];
  const visible = filter === 'All' ? galleryItems : galleryItems.filter((g) => g.category === filter);

  return (
    <>
      <PageHero
        title="Gallery"
        description="Moments from classrooms, the playing field, worship and school celebrations."
        image={images.event}
        crumbs={[{ label: 'Gallery' }]}>
        
        <DraftTag kind="photo" label="Placeholder photos · official images to be supplied" />
      </PageHero>

      <section aria-label="Photo gallery" className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div role="group" aria-label="Filter photos by category" className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:px-0">
            {filters.map((f) => {
              const active = f === filter;
              return (
                <button
                  key={f}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setFilter(f)}
                  className={`h-10 shrink-0 whitespace-nowrap rounded-full px-5 text-sm font-semibold transition-colors duration-150 ${
                  active ? 'bg-navy text-white' : 'bg-mist text-ink hover:bg-sky'}`
                  }>
                  
                  {f}
                </button>);

            })}
          </div>

          {visible.length === 0 ?
          <div className="mt-10 flex flex-col items-center rounded-[2rem] border-2 border-dashed border-navy/15 px-6 py-16 text-center">
              <ImageOffIcon className="h-8 w-8 text-navy/50" aria-hidden="true" />
              <p className="mt-4 font-heading text-lg font-semibold text-ink">No photos in this category yet</p>
              <p className="mt-1 text-[15px] text-ink/60">New photographs will appear here as the school shares them.</p>
            </div> :

          <motion.ul layout className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence mode="popLayout" initial={false}>
                {visible.map((g) =>
              <motion.li
                key={g.caption}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25, ease: EASE_OUT }}>
                
                    <GalleryTile src={g.src} alt={g.alt} caption={g.caption} className="aspect-[4/3]" />
                  </motion.li>
              )}
              </AnimatePresence>
            </motion.ul>
          }
        </div>
      </section>
    </>);

}