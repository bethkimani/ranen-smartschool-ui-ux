export type ButtonVariant = 'gold' | 'navy' | 'outlineLight' | 'outlineNavy';
export type ButtonSize = 'md' | 'lg';

const base =
'group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-heading font-semibold transition-[background-color,color,border-color,transform] duration-150 ease-smooth active:scale-[0.98] disabled:pointer-events-none disabled:opacity-60';

const variants: Record<ButtonVariant, string> = {
  gold: 'bg-gold text-navy-900 hover:bg-gold-600',
  navy: 'bg-navy text-white hover:bg-navy-700',
  outlineLight: 'border border-white/40 text-white hover:border-white hover:bg-white/10',
  outlineNavy: 'border border-navy/20 text-navy hover:border-navy hover:bg-navy-50'
};

const sizes: Record<ButtonSize, string> = {
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-6 text-[15px]'
};

export function buttonClasses(variant: ButtonVariant = 'gold', size: ButtonSize = 'md') {
  return `${base} ${variants[variant]} ${sizes[size]}`;
}