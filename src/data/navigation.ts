export type NavChild = {label: string;to: string;description?: string;};
export type NavItem = {label: string;to: string;children?: NavChild[];};

export const navLinks: NavItem[] = [
{ label: 'Home', to: '/' },
{
  label: 'About Us',
  to: '/about',
  children: [
  { label: 'Our School', to: '/about', description: 'Our story, philosophy and community' },
  { label: 'Mission, Vision & Values', to: '/about#mission', description: 'What guides everything we do' },
  { label: 'Christian Foundation', to: '/about#faith', description: 'Faith at the heart of learning' }]

},
{
  label: 'Academics',
  to: '/academics',
  children: [
  { label: 'All Programs', to: '/academics', description: 'Playgroup to Grade 9 at a glance' },
  { label: 'Playgroup', to: '/academics/playgroup', description: 'Around 3 years' },
  { label: 'PP1', to: '/academics/pp1', description: 'Pre-Primary 1 · around 4 years' },
  { label: 'PP2', to: '/academics/pp2', description: 'Pre-Primary 2 · around 5 years' },
  { label: 'Primary School', to: '/academics/primary', description: 'Grade 1 – Grade 6' },
  { label: 'Junior Secondary', to: '/academics/junior-secondary', description: 'Grade 7 – Grade 9' }]

},
{ label: 'Admissions', to: '/admissions' },
{ label: 'Facilities', to: '/facilities' },
{ label: 'Gallery', to: '/gallery' },
{ label: 'News & Events', to: '/news' },
{ label: 'Contact Us', to: '/contact' }];