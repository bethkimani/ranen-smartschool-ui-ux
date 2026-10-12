import React, { useState } from 'react';
import { CalendarIcon, ClockIcon, MapPinIcon, NewspaperIcon } from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { DraftTag } from '../components/ui/DraftTag';
import { Reveal } from '../components/ui/Reveal';
import { NewsCard } from '../components/cards/NewsCard';
import { images } from '../data/images';
import { newsArticles, newsCategories, upcomingEvents } from '../data/news';
import type { NewsCategory } from '../data/news';
import { formatDate } from '../utils/date';

type Filter = 'All' | NewsCategory;

export function News() {
  const [filter, setFilter] = useState<Filter>('All');
  const filters: Filter[] = ['All', ...newsCategories];
  const visible = filter === 'All' ? newsArticles : newsArticles.filter((a) => a.category === filter);

  return (
    <>
      <PageHero
        title="News & Events"
        description="Announcements, academic updates, activities and upcoming events for the school community."
        image={images.worship}
        crumbs={[{ label: 'News & Events' }]}>
        
        <DraftTag kind="sample" label="All stories below are sample content" />
      </PageHero>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_340px]">
          <div>
            <div role="group" aria-label="Filter news by category" className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:px-0">
              {filters.map((f) =>
              <button
                key={f}
                type="button"
                aria-pressed={f === filter}
                onClick={() => setFilter(f)}
                className={`h-10 shrink-0 whitespace-nowrap rounded-full px-5 text-sm font-semibold transition-colors duration-150 ${
                f === filter ? 'bg-navy text-white' : 'bg-mist text-ink hover:bg-sky'}`
                }>
                
                  {f}
                </button>
              )}
            </div>

            {visible.length === 0 ?
            <div className="mt-8 flex flex-col items-center rounded-[2rem] border-2 border-dashed border-navy/15 px-6 py-16 text-center">
                <NewspaperIcon className="h-8 w-8 text-navy/50" aria-hidden="true" />
                <p className="mt-4 font-heading text-lg font-semibold text-ink">No stories here yet</p>
                <p className="mt-1 text-[15px] text-ink/60">Check back soon for updates from the school.</p>
              </div> :

            <ul className="mt-8 grid gap-6 md:grid-cols-2">
                {visible.map((a, i) =>
              <Reveal as="li" key={a.slug} delay={i % 2 * 0.05} className="h-full">
                    <NewsCard article={a} />
                  </Reveal>
              )}
              </ul>
            }
          </div>

          <aside aria-labelledby="events-title" className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-[2rem] bg-navy p-7 text-white">
              <div className="flex items-center justify-between gap-3">
                <h2 id="events-title" className="font-heading text-xl font-semibold">
                  Upcoming events
                </h2>
                <CalendarIcon className="h-5 w-5 text-gold" aria-hidden="true" />
              </div>
              <ul className="mt-6 divide-y divide-white/10">
                {upcomingEvents.map((ev) =>
                <li key={ev.title} className="flex gap-4 py-4">
                    <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-2xl bg-gold text-navy-900">
                      <span className="font-heading text-lg font-bold leading-none">{formatDate(ev.date, 'd')}</span>
                      <span className="mt-0.5 text-[11px] font-semibold">{formatDate(ev.date, 'MMM')}</span>
                    </div>
                    <div>
                      <p className="font-heading text-[15px] font-semibold leading-snug">{ev.title}</p>
                      <p className="mt-1.5 flex items-center gap-1.5 text-xs text-white/70">
                        <ClockIcon className="h-3.5 w-3.5" aria-hidden="true" />
                        {ev.time}
                      </p>
                      <p className="mt-1 flex items-center gap-1.5 text-xs text-white/70">
                        <MapPinIcon className="h-3.5 w-3.5" aria-hidden="true" />
                        {ev.location}
                      </p>
                    </div>
                  </li>
                )}
              </ul>
              <p className="mt-2 text-xs text-white/60">Sample listings — replace with confirmed school events.</p>
            </div>
          </aside>
        </div>
      </section>
    </>);

}