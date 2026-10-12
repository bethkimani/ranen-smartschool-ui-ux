import React from 'react';
import { ClockIcon, FileTextIcon, ImageIcon, PencilLineIcon } from 'lucide-react';
import { useDraftLabels } from '../../contexts/DraftLabelsContext';

type DraftKind = 'draft' | 'photo' | 'sample' | 'confirm';

type DraftTagProps = {kind?: DraftKind;label?: string;className?: string;};

const config = {
  draft: { text: 'Editable draft', icon: PencilLineIcon, style: 'bg-gold-100 text-gold-ink ring-1 ring-gold/60' },
  confirm: { text: 'To be confirmed', icon: ClockIcon, style: 'bg-gold-100 text-gold-ink ring-1 ring-gold/60' },
  sample: { text: 'Sample content', icon: FileTextIcon, style: 'bg-sky text-navy ring-1 ring-navy/10' },
  photo: { text: 'Placeholder photo', icon: ImageIcon, style: 'bg-navy-900/75 text-white backdrop-blur-sm' }
};

export function DraftTag({ kind = 'draft', label, className = '' }: DraftTagProps) {
  const show = useDraftLabels();
  if (!show) return null;
  const { text, icon: Icon, style } = config[kind];
  return (
    <span
      className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 py-1 text-[11px] font-semibold leading-none ${style} ${className}`}>
      
      <Icon className="h-3 w-3" aria-hidden="true" />
      {label ?? text}
    </span>);

}