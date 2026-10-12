import React from 'react';

type GalleryTileProps = {src: string;alt: string;caption: string;className?: string;};

export function GalleryTile({ src, alt, caption, className = '' }: GalleryTileProps) {
  return (
    <figure className={`group relative overflow-hidden rounded-3xl bg-navy-50 ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-300 ease-smooth group-hover:scale-105" />
      
      <figcaption className="absolute inset-x-3 bottom-3 flex">
        <span className="rounded-full bg-navy-900/80 px-3.5 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
          {caption}
        </span>
      </figcaption>
    </figure>);

}