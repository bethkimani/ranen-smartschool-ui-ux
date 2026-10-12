import { format, parseISO } from 'date-fns';

export function formatDate(iso: string, pattern = 'd MMM yyyy') {
  return format(parseISO(iso), pattern);
}