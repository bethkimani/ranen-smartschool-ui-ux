import {
  BookMarkedIcon,
  HandHeartIcon,
  MedalIcon,
  ShieldCheckIcon,
  SparklesIcon,
  TrendingUpIcon } from
'lucide-react';
import type { LucideIcon } from 'lucide-react';

// Configurable features — confirm each item with the school before publishing.
export type WhyChooseItem = {title: string;text: string;icon: LucideIcon;};

export const whyChooseItems: WhyChooseItem[] = [
{
  title: 'Supportive teaching and learning',
  text: 'Teachers who know each learner and guide them patiently, one step at a time.',
  icon: BookMarkedIcon
},
{
  title: 'Character development',
  text: 'Honesty, responsibility, respect and kindness modelled and practised every day.',
  icon: MedalIcon
},
{
  title: 'Academic growth',
  text: 'Clear foundations from the early years through to Junior Secondary.',
  icon: TrendingUpIcon
},
{
  title: 'Safe and caring learning',
  text: 'A secure, orderly environment where children feel welcome and valued.',
  icon: ShieldCheckIcon
},
{
  title: 'Spiritual and moral development',
  text: 'Opportunities to grow in faith through devotion, worship and service.',
  icon: HandHeartIcon
},
{
  title: 'Co-curricular opportunities',
  text: 'Sport, music, clubs and creative activities that help talents flourish.',
  icon: SparklesIcon
}];