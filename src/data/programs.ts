import { images } from './images';

export type ProgramTone = 'peach' | 'mint' | 'lilac' | 'navy' | 'deep';
export type ProgramStage = 'Early Years' | 'Primary' | 'Junior Secondary';

export type Program = {
  slug: string;
  name: string;
  shortName: string;
  gradeLabel: string;
  stage: ProgramStage;
  typicalAge: string;
  tone: ProgramTone;
  image: string;
  imageAlt: string;
  summary: string;
  focus: string;
  approach: string;
  overview: string[];
  highlights: string[];
  learningAreas: string[];
};

export const programs: Program[] = [
{
  slug: 'playgroup',
  name: 'Playgroup',
  shortName: 'Playgroup',
  gradeLabel: 'Pre-school entry',
  stage: 'Early Years',
  typicalAge: 'Around 3 years',
  tone: 'peach',
  image: images.playgroup,
  imageAlt: 'Toddlers playing with colourful wooden blocks beside their teacher',
  summary:
  'A gentle first step into school life, where little ones learn through play, song and story in a safe, loving setting.',
  focus: 'Settling in, play, language and friendships',
  approach: 'Play-based, short guided activities',
  overview: [
  'Playgroup is designed to help our youngest learners feel safe, happy and curious as they take their first steps into school.',
  'Through songs, stories, movement and guided play, children begin building language, early number sense, independence and the joy of learning alongside others.'],

  highlights: [
  'Learning through play, songs and stories',
  'Building early language and listening skills',
  'Developing fine and gross motor skills',
  'Growing confidence, routines and friendships'],

  learningAreas: [
  'Language & communication',
  'Early number play',
  'Creative play & music',
  'Movement & outdoor play',
  'Bible stories & simple prayers',
  'Social & emotional growth']

},
{
  slug: 'pp1',
  name: 'PP1',
  shortName: 'PP1',
  gradeLabel: 'Pre-Primary 1',
  stage: 'Early Years',
  typicalAge: 'Around 4 years',
  tone: 'mint',
  image: images.preprimary,
  imageAlt: 'Pre-primary children drawing and colouring together at a low table',
  summary:
  'Curious minds explore letters, numbers and the world around them through hands-on, joyful activities.',
  focus: 'Early literacy, numeracy and exploration',
  approach: 'Hands-on activities, play and routine',
  overview: [
  'In PP1, children grow in confidence as they explore sounds, letters, numbers, shapes and the world around them.',
  'Learning is active and hands-on, balancing structured activities with creative play, outdoor time and moments of worship and reflection.'],

  highlights: [
  'Recognising sounds, letters and simple words',
  'Counting, sorting and early number concepts',
  'Exploring nature and the local environment',
  'Creative arts, music and movement'],

  learningAreas: [
  'Language Activities',
  'Mathematical Activities',
  'Environmental Activities',
  'Psychomotor & Creative Activities',
  'Religious Education Activities']

},
{
  slug: 'pp2',
  name: 'PP2',
  shortName: 'PP2',
  gradeLabel: 'Pre-Primary 2',
  stage: 'Early Years',
  typicalAge: 'Around 5 years',
  tone: 'lilac',
  image: images.about,
  imageAlt: 'A teacher reading a picture book with a small group of young learners',
  summary:
  'Learners build the readiness, independence and early literacy and numeracy they need for a confident start in Grade 1.',
  focus: 'School readiness and independence',
  approach: 'Guided learning with growing independence',
  overview: [
  'PP2 prepares children for a smooth, confident transition into Grade 1.',
  'Learners build early reading and number skills, follow routines independently and develop the social skills and character that help them thrive in primary school.'],

  highlights: [
  'Early reading and writing readiness',
  'Number work, patterns and problem-solving',
  'Independence, responsibility and routines',
  'Character formation and kindness to others'],

  learningAreas: [
  'Language Activities',
  'Mathematical Activities',
  'Environmental Activities',
  'Psychomotor & Creative Activities',
  'Religious Education Activities']

},
{
  slug: 'primary',
  name: 'Primary School',
  shortName: 'Grade 1–6',
  gradeLabel: 'Grade 1 – Grade 6',
  stage: 'Primary',
  typicalAge: 'Around 6–11 years',
  tone: 'navy',
  image: images.primary,
  imageAlt: 'Primary pupils reading at their desks while a teacher helps one learner',
  summary:
  'Strong foundations in literacy, numeracy, science and creativity, nurtured by caring teachers and Christian values.',
  focus: 'Strong foundations across learning areas',
  approach: 'Competency-based, inquiry and practice',
  overview: [
  'Our primary years build strong foundations in reading, writing, mathematics, science and the creative arts.',
  'Learners are encouraged to ask questions, work together and apply what they learn, while growing in faith, responsibility and service to others.'],

  highlights: [
  'Confident reading, writing and communication',
  'Mathematical thinking and problem-solving',
  'Science, technology and the world around us',
  'Creative arts, sport and co-curricular activities'],

  learningAreas: [
  'English',
  'Kiswahili',
  'Mathematics',
  'Science & Technology',
  'Social Studies',
  'Agriculture',
  'Creative Arts',
  'Religious Education',
  'Physical & Health Education']

},
{
  slug: 'junior-secondary',
  name: 'Junior Secondary',
  shortName: 'Grade 7–9',
  gradeLabel: 'Grade 7 – Grade 9',
  stage: 'Junior Secondary',
  typicalAge: 'Around 12–14 years',
  tone: 'deep',
  image: images.juniorSecondary,
  imageAlt: 'Junior secondary students carrying out a science experiment with a microscope',
  summary:
  'Learners deepen their knowledge, discover their interests and build the character and skills for senior school and beyond.',
  focus: 'Deeper knowledge, interests and pathways',
  approach: 'Projects, practicals and mentorship',
  overview: [
  'Junior Secondary supports learners as they move into adolescence, deepening knowledge across a broader range of learning areas.',
  'Through practical work, projects and mentorship, learners discover their strengths and interests and prepare thoughtfully for senior school pathways.'],

  highlights: [
  'Broader, deeper study across learning areas',
  'Practical science and pre-technical skills',
  'Mentorship, leadership and responsibility',
  'Preparation for senior school pathways'],

  learningAreas: [
  'English',
  'Kiswahili',
  'Mathematics',
  'Integrated Science',
  'Pre-Technical Studies',
  'Social Studies',
  'Agriculture & Nutrition',
  'Creative Arts & Sports',
  'Religious Education']

}];