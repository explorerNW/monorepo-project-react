import { tv } from 'tailwind-variants';

export const buttonStyles = tv({
  base: 'inline-flex items-center justify-center rounded-md font-medium transition-all transition-colors disabled:opacity-50 disabled:cursor-not-allowed',
  variants: {
    variant: {
      primary: 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800',
      outline:
        'border border-gray-300 text-gray-700 hover:bg-gray-100 active:bg-gray-200',
      ghost: 'text-gray-600 hover:bg-gray-100 active:bg-gray-200',
    },
    size: {
      sm: 'text-sm px-3 py-1.5',
      md: 'text-base px-4 py-2',
      lg: 'text-lg px-5 py-3',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});
