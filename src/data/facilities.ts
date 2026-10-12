import { images } from './images';

// Every facility below is AWAITING CONFIRMATION by the school.
export type Facility = {title: string;text: string;image: string;imageAlt: string;};

export const facilities: Facility[] = [
{
  title: 'Classrooms',
  text: 'Bright learning spaces where pupils work, read and collaborate with their teachers.',
  image: images.primary,
  imageAlt: 'Pupils working at desks in a sunlit classroom'
},
{
  title: 'Early years spaces',
  text: 'Child-friendly rooms designed for play-based learning, stories and creative activities.',
  image: images.playgroup,
  imageAlt: 'Toddlers playing with wooden blocks on a classroom mat'
},
{
  title: 'Reading corner & library',
  text: 'A quiet place to discover books and build a lifelong love of reading.',
  image: images.library,
  imageAlt: 'Two learners reading picture books in a library'
},
{
  title: 'Science learning',
  text: 'Practical, hands-on experiments that bring science lessons to life.',
  image: images.juniorSecondary,
  imageAlt: 'Students using a microscope during a science lesson'
},
{
  title: 'Playing field',
  text: 'Open outdoor space for physical education, games and sports.',
  image: images.outdoor,
  imageAlt: 'Learners playing football on a grassy field'
},
{
  title: 'Worship & assembly',
  text: 'A gathering place for devotions, assemblies and school celebrations.',
  image: images.worship,
  imageAlt: 'Learners singing together during an assembly'
}];