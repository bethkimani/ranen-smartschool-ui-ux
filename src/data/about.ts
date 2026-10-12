import { BookOpenIcon, CrossIcon, HistoryIcon, UsersIcon } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

// DRAFT placeholder copy — to be replaced with content supplied by the school.
export type AboutPillar = {title: string;text: string;icon: LucideIcon;};

export const aboutPillars: AboutPillar[] = [
{
  title: 'Our background',
  text: 'A short account of how the school began and the families it serves in Migori County will appear here once supplied.',
  icon: HistoryIcon
},
{
  title: 'Our educational philosophy',
  text: 'We believe every child can learn and grow when taught with patience, high expectations and genuine care.',
  icon: BookOpenIcon
},
{
  title: 'Our Christian foundation',
  text: 'Faith shapes how we teach, how we treat one another and how we prepare learners to serve their communities.',
  icon: CrossIcon
},
{
  title: 'Our commitment to learners',
  text: 'We aim to develop the whole child — mind, body and spirit — so each learner leaves confident and ready for the future.',
  icon: UsersIcon
}];


export const storyParagraphs: string[] = [
'This space is reserved for the official story of Ranen Adventist School — when and why it was started, the community it serves in Migori County, and the people who have shaped it.',
'Please supply verified details such as the founding year, sponsoring body, registration status and leadership so they can be presented accurately. Until then, this text remains an editable draft.'];


export const faithParagraphs: string[] = [
'As an Adventist school, faith is meant to be part of everyday school life — in how learners are taught, guided and cared for.',
'Daily devotions, Bible lessons, worship in song and opportunities to serve others can help learners grow in character, compassion and a personal relationship with God. The specific programmes offered will be confirmed by the school.'];