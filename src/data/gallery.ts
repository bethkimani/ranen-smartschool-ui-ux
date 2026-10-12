import { images } from './images';

export type GalleryCategory = 'Classrooms' | 'Early Years' | 'Outdoor & Sports' | 'Faith' | 'Events' | 'Library';

export type GalleryItem = {src: string;alt: string;caption: string;category: GalleryCategory;};

export const galleryCategories: GalleryCategory[] = [
'Classrooms',
'Early Years',
'Outdoor & Sports',
'Faith',
'Library',
'Events'];


export const galleryItems: GalleryItem[] = [
{ src: images.primary, alt: 'Pupils reading at their desks with their teacher', caption: 'Focused learning in class', category: 'Classrooms' },
{ src: images.outdoor, alt: 'Children playing football on a grassy school field', caption: 'Teamwork on the field', category: 'Outdoor & Sports' },
{ src: images.worship, alt: 'Learners singing together during a morning devotion', caption: 'Morning devotion', category: 'Faith' },
{ src: images.library, alt: 'Two girls reading picture books together in a library', caption: 'Reading together', category: 'Library' },
{ src: images.event, alt: 'Learners performing a cultural dance for parents', caption: 'Cultural performance', category: 'Events' },
{ src: images.playgroup, alt: 'Toddlers building with wooden blocks', caption: 'Play-based early learning', category: 'Early Years' },
{ src: images.juniorSecondary, alt: 'Students working with a microscope in a science lesson', caption: 'Hands-on science', category: 'Classrooms' },
{ src: images.preprimary, alt: 'Young children drawing with crayons', caption: 'Creative expression', category: 'Early Years' },
{ src: images.about, alt: 'A teacher sharing a picture book with young learners', caption: 'Story time', category: 'Classrooms' },
{ src: images.hero, alt: 'Learners walking together across the school compound', caption: 'Friendship on campus', category: 'Outdoor & Sports' }];