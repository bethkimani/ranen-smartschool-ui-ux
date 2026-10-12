export function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim());
}

export function isValidKenyanPhone(value: string) {
  const digits = value.replace(/[\s()-]/g, '');
  return /^(\+?254|0)[17]\d{8}$/.test(digits);
}

export const inputClass =
'block w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-[15px] text-ink placeholder:text-ink/40 transition-[border-color,box-shadow] duration-150 focus:border-navy focus:outline-none focus:ring-4 focus:ring-navy/10 aria-[invalid=true]:border-red-500 aria-[invalid=true]:focus:ring-red-500/15';