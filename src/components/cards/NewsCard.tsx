import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { DraftTag } from '../ui/DraftTag';
import type { NewsArticle } from '../../data/news';
import { formatDate } from '../../utils/date';

type NewsCardProps = {article: NewsArticle;layout?: 'featured' | 'row' | 'grid';};

export function NewsCard({ article, layout = 'grid' }: NewsCardProps) {
  const to = `/news/${article.slug}`;

  if (layout === 'row') {
    return (
      <Link
        to={to}
        className="group grid h-full grid-cols-[112px_1fr] items-center gap-5 rounded-3xl bg-white p-3 ring-1 ring-navy/10 transition-[transform,box-shadow] duration-200 ease-smooth hover:-translate-y-0.5 hover:shadow-lift sm:grid-cols-[168px_1fr]">
        
        <div className="aspect-square overflow-hidden rounded-2xl">
          <img
            src={article.image}
            alt={article.imageAlt}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 ease-smooth group-hover:scale-105" />
          
        </div>
        <div className="py-2 pr-2">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium text-ink/60">
            <span className="font-semibold text-navy">{article.category}</span>
            <time dateTime={article.date}>{formatDate(article.date)}</time>
          </div>
          <h3 className="mt-2 font-heading text-[17px] font-semibold leading-snug text-ink">{article.title}</h3>
          <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-navy">
            Read more
            <ArrowRightIcon
              className="h-4 w-4 transition-transform duration-150 ease-smooth group-hover:translate-x-1"
              aria-hidden="true" />
            
          </span>
        </div>
      </Link>);

  }

  const featured = layout === 'featured';
  return (
    <Link
      to={to}
      className="group flex h-full flex-col overflow-hidden rounded-[2rem] bg-white ring-1 ring-navy/10 transition-[transform,box-shadow] duration-200 ease-smooth hover:-translate-y-1 hover:shadow-lift">
      
      <div className={`relative overflow-hidden ${featured ? 'aspect-[16/10]' : 'aspect-[4/3]'}`}>
        <img
          src={article.image}
          alt={article.imageAlt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 ease-smooth group-hover:scale-105" />
        
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-navy">{article.category}</span>
          <DraftTag kind="sample" label="Sample" />
        </div>
      </div>
      <div className={`flex flex-1 flex-col ${featured ? 'p-7 lg:p-8' : 'p-6'}`}>
        <time dateTime={article.date} className="text-sm font-medium text-ink/60">
          {formatDate(article.date, 'd MMMM yyyy')}
        </time>
        <h3
          className={`mt-2 font-heading font-semibold leading-snug text-ink ${
          featured ? 'text-2xl lg:text-[28px]' : 'text-lg'}`
          }>
          
          {article.title}
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-ink/70">{article.excerpt}</p>
        <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-navy">
          Read more
          <ArrowRightIcon
            className="h-4 w-4 transition-transform duration-150 ease-smooth group-hover:translate-x-1"
            aria-hidden="true" />
          
        </span>
      </div>
    </Link>);

}