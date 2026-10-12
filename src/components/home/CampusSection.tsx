import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { DraftTag } from '../ui/DraftTag';
import { GalleryTile } from '../ui/GalleryTile';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';
import { galleryItems } from '../../data/gallery';

const tileLayout = [
'sm:col-span-2 lg:row-span-2 aspect-[4/3] lg:aspect-auto',
'aspect-[4/3]',
'aspect-[4/3]',
'aspect-[4/3]',
'aspect-[4/3]'];


export function CampusSection() {
  const featured = galleryItems.slice(0, 5);
  return (
    <section aria-labelledby="campus-title" className="bg-mist py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <SectionHeading
              id="campus-title"
              kicker="Campus & learning"
              title="A day in the life of our learners"
              description="Classrooms, play, worship and celebration — a glimpse of the moments that shape each school day.">
              
              <DraftTag kind="photo" label="Placeholder photos · to be replaced" />
            </SectionHeading>
          </Reveal>
          <Link to="/gallery" className="group inline-flex shrink-0 items-center gap-1.5 font-heading text-sm font-semibold text-navy">
            View the gallery
            <ArrowRightIcon
              className="h-4 w-4 transition-transform duration-150 ease-smooth group-hover:translate-x-1"
              aria-hidden="true" />
            
          </Link>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
          {featured.map((g, i) =>
          <Reveal key={g.caption} delay={i * 0.05} className={tileLayout[i]}>
              <GalleryTile src={g.src} alt={g.alt} caption={g.caption} className="h-full w-full" />
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}