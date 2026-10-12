import { images } from './images';

// SAMPLE content only — replace with real announcements from the school.
export type NewsCategory = 'Announcement' | 'Academics' | 'Activities' | 'Events';

export type NewsArticle = {
  slug: string;
  title: string;
  category: NewsCategory;
  date: string;
  excerpt: string;
  body: string[];
  image: string;
  imageAlt: string;
};

export const newsCategories: NewsCategory[] = ['Announcement', 'Academics', 'Activities', 'Events'];

export const newsArticles: NewsArticle[] = [
{
  slug: 'term-dates-and-reminders',
  title: 'Term dates and key reminders for parents',
  category: 'Announcement',
  date: '2027-01-08',
  excerpt:
  'A sample announcement showing how the school can share term dates, reporting days and important reminders with families.',
  body: [
  'This is sample content demonstrating how a school announcement will appear on the website.',
  'Replace it with official term dates, reporting instructions, and any reminders the school office would like parents to see. Announcements can include links, contact details and downloadable documents.'],

  image: images.hero,
  imageAlt: 'Learners walking across the school compound'
},
{
  slug: 'celebrating-reading-progress',
  title: "Celebrating our learners' progress in reading",
  category: 'Academics',
  date: '2027-02-15',
  excerpt:
  'A sample academic update showing how classroom milestones and learning highlights can be celebrated.',
  body: [
  'This sample update shows how the school can share academic highlights, such as reading initiatives or project work.',
  'Replace this text with a real story from the classroom, ideally with photographs supplied and approved by the school.'],

  image: images.library,
  imageAlt: 'Two learners reading picture books together'
},
{
  slug: 'games-and-teamwork',
  title: 'Games and teamwork on the school field',
  category: 'Activities',
  date: '2027-03-04',
  excerpt: 'A sample activity story for sports days, clubs and co-curricular moments worth sharing with families.',
  body: [
  'This sample story illustrates how sports and co-curricular activities can be featured on the website.',
  'Replace it with a real account of an activity, including who took part and what learners gained from it.'],

  image: images.outdoor,
  imageAlt: 'Learners playing football on the school field'
},
{
  slug: 'family-worship-and-open-day',
  title: 'Family worship and open day',
  category: 'Events',
  date: '2027-03-20',
  excerpt: 'A sample event listing showing how upcoming open days and family events can be promoted.',
  body: [
  'This sample listing shows how the school can invite families to events such as open days, worship services and performances.',
  'Replace it with confirmed event details: date, time, venue and any instructions for visitors.'],

  image: images.event,
  imageAlt: 'Learners performing a cultural dance for parents'
}];


export type SchoolEvent = {title: string;date: string;time: string;location: string;};

export const upcomingEvents: SchoolEvent[] = [
{ title: 'Sample: Parents’ open day', date: '2027-03-20', time: 'Time to be confirmed', location: 'School compound' },
{ title: 'Sample: Term reporting day', date: '2027-04-26', time: 'Time to be confirmed', location: 'School office' },
{ title: 'Sample: Music & arts showcase', date: '2027-05-14', time: 'Time to be confirmed', location: 'School hall' }];