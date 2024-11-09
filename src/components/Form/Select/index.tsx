'use client'

import * as SelectPrimitive from '@radix-ui/react-select'
import { ChevronDown } from 'lucide-react'
import { twMerge } from 'tailwind-merge'

interface SelectProps extends SelectPrimitive.SelectProps {
  children: React.ReactNode
  placeholder: string
}

export function Select({
  children,
  placeholder,
  ...props
}: Readonly<SelectProps>) {
  return (
    <SelectPrimitive.Root {...props}>
      <SelectPrimitive.Trigger
        className={twMerge(
          'flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none',
          'focus:border-violet-300 focus:ring-4 focus:ring-violet-100 data-[placeholder]:text-zinc-600',
          'dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:focus-within:border-violet-500 dark:focus-within:ring-violet-500/20',
        )}
      >
        <SelectPrimitive.Value
          className="text-black dark:text-zinc-100"
          placeholder={placeholder}
        />
        <SelectPrimitive.Icon className="text-zinc-500 dark:text-zinc-400">
          <ChevronDown className="h-5 w-5" />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          side="bottom"
          position="popper"
          sideOffset={8}
          className="z-10 w-[--radix-select-trigger-width] animate-slideDown overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-md dark:border-zinc-800 dark:bg-zinc-800 dark:text-zinc-100"
        >
          <SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  )
}
