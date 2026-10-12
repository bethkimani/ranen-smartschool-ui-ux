// Editable admissions content — confirm each item with the school office.
export type AdmissionStep = {title: string;text: string;};

export const admissionSteps: AdmissionStep[] = [
{ title: 'Make an enquiry', text: 'Call, send a WhatsApp message or complete the enquiry form below.' },
{ title: 'Visit the school', text: 'Arrange a visit to see the classrooms and meet the team.' },
{ title: 'Submit an application', text: 'Complete the admission form and provide the required documents.' },
{ title: 'Placement conversation', text: 'An age-appropriate interaction to find the right class, where applicable.' },
{ title: 'Confirmation & joining', text: 'Receive confirmation, fee information and your reporting date.' }];


export const requiredDocuments: string[] = [
"Copy of the child's birth certificate",
'Two recent passport-size photographs',
'Most recent school report or transfer letter (Grade 1 and above)',
'Clinic or immunisation card (Early Years)',
"Copy of parent or guardian's national ID",
'Completed admission form'];


export type Faq = {question: string;answer: string;};

export const admissionFaqs: Faq[] = [
{
  question: 'At what age can my child join Playgroup?',
  answer:
  'Children typically join Playgroup at around 3 years old. Please contact the school office to confirm the current age guidelines for each level.'
},
{
  question: 'Can learners join during the school year?',
  answer:
  'Mid-year admission may be possible depending on space in the relevant class. Please enquire and the school will advise you.'
},
{
  question: 'Which curriculum does the school follow?',
  answer:
  "Programmes are presented here in line with Kenya's Competency-Based Curriculum structure. The school will confirm its exact curriculum offering."
},
{
  question: 'How can I find out about school fees?',
  answer:
  'Fee information is shared directly by the school office. Send an enquiry or call the school to receive the current fee structure.'
},
{
  question: 'Are meals or transport available?',
  answer: 'These services are to be confirmed by the school. Please ask the office when you enquire.'
}];