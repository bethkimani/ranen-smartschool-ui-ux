import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { NewsCard } from '../cards/NewsCard';
import { DraftTag } from '../ui/DraftTag';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';
import { newsArticles } from '../../data/news';

export function NewsSection() {
  const [featured, ...rest] = newsArticles;
  return (
    <section aria-labelledby="news-title" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <SectionHeading
              id="news-title"
              kicker="News & events"
              title="What's happening at school"
              description="Announcements, classroom stories and upcoming events for families.">
              
              <DraftTag kind="sample" label="Sample stories · replace with school news" />
            </SectionHeading>
          </Reveal>
          <Link to="/news" className="group inline-flex shrink-0 items-center gap-1.5 font-heading text-sm font-semibold text-navy">
            All news &amp; events
            <ArrowRightIcon
              className="h-4 w-4 transition-transform duration-150 ease-smooth group-hover:translate-x-1"
              aria-hidden="true" />
            
          </Link>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.25fr_1fr]">
          <Reveal className="h-full">
            <NewsCard article={featured} layout="featured" />
          </Reveal>
          <ul className="grid gap-5">
            {rest.slice(0, 3).map((article, i) =>
            <Reveal as="li" key={article.slug} delay={(i + 1) * 0.05}>
                <NewsCard article={article} layout="row" />
              </Reveal>
            )}
          </ul>
        </div>
      </div>
    </section>);

}