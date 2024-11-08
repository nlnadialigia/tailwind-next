import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const buttonVariant = tv({
  base: [
    'rounded-lg px-4 py-2 text-sm font-semibold outline-none shadow-sm',
    'focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2',
    'active: opacity-80',
  ],
  variants: {
    variant: {
      primary: 'bg-violet-700 text-violet-50 hover:bg-violet-600',
      outline: 'border border-zinc-300 text-zinc-700 hover:bg-zinc-50',
      ghost: 'rounded-md px-2 houver:bg-zinc-50 shadow-none',
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
})

type ButtonProps = ComponentProps<'button'> & VariantProps<typeof buttonVariant>

export function Button({ variant, ...props }: ButtonProps) {
  return <button {...props} className={buttonVariant({ variant })} />
}
