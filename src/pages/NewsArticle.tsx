import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeftIcon } from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { DraftTag } from '../components/ui/DraftTag';
import { NewsCard } from '../components/cards/NewsCard';
import { newsArticles } from '../data/news';
import { formatDate } from '../utils/date';
import { NotFound } from './NotFound';

export function NewsArticle() {
  const { slug } = useParams();
  const article = newsArticles.find((a) => a.slug === slug);
  if (!article) return <NotFound />;
  const more = newsArticles.filter((a) => a.slug !== article.slug).slice(0, 2);

  return (
    <>
      <PageHero
        title={article.title}
        crumbs={[{ label: 'News & Events', to: '/news' }, { label: article.category }]}>
        
        <div className="flex flex-wrap items-center gap-3 text-sm text-white/80">
          <span className="rounded-full bg-gold px-3 py-1 font-semibold text-navy-900">{article.category}</span>
          <time dateTime={article.date}>{formatDate(article.date, 'd MMMM yyyy')}</time>
          <DraftTag kind="sample" />
        </div>
      </PageHero>

      <article className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <div className="relative -mt-28 overflow-hidden rounded-[2rem] shadow-lift md:-mt-36">
            <img src={article.image} alt={article.imageAlt} className="aspect-[16/9] w-full object-cover" />
            <DraftTag kind="photo" className="absolute left-4 top-4" />
          </div>
          <div className="mt-10 space-y-5 text-lg leading-relaxed text-ink/80">
            {article.body.map((p) =>
            <p key={p}>{p}</p>
            )}
          </div>
          <Link
            to="/news"
            className="group mt-10 inline-flex items-center gap-2 font-heading text-sm font-semibold text-navy">
            
            <ArrowLeftIcon className="h-4 w-4 transition-transform duration-150 group-hover:-translate-x-1" aria-hidden="true" />
            Back to News & Events
          </Link>
        </div>
      </article>

      <section aria-labelledby="more-title" className="bg-mist py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 id="more-title" className="font-heading text-2xl font-semibold text-ink">
            More from the school
          </h2>
          <ul className="mt-8 grid gap-6 md:grid-cols-2">
            {more.map((a) =>
            <li key={a.slug}>
                <NewsCard article={a} layout="row" />
              </li>
            )}
          </ul>
        </div>
      </section>
    </>);

}