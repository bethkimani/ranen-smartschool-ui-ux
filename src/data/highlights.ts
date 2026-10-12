import { CrossIcon, GraduationCapIcon, HeartHandshakeIcon, SproutIcon } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type Highlight = {title: string;description: string;to: string;icon: LucideIcon;};

export const highlights: Highlight[] = [
{
  title: 'Christ-Centered Education',
  description:
  'Biblical values and a living faith woven into daily learning, worship and the way we care for one another.',
  to: '/about#faith',
  icon: CrossIcon
},
{
  title: 'Academic Excellence',
  description:
  'Strong foundations in literacy, numeracy and inquiry, with learning that encourages every child to do their best.',
  to: '/academics',
  icon: GraduationCapIcon
},
{
  title: 'Caring Learning Environment',
  description:
  'A safe, nurturing community where children are known by name and supported to grow with confidence.',
  to: '/about',
  icon: HeartHandshakeIcon
},
{
  title: 'Holistic Student Development',
  description:
  'Growth of mind, body and spirit through creativity, play, service and the formation of good character.',
  to: '/facilities',
  icon: SproutIcon
}];