'use client'

import * as Select from '@radix-ui/react-select'
import { Check } from 'lucide-react'
import { twMerge } from 'tailwind-merge'

interface SelectItemProps extends Select.SelectItemProps {
  text: string
}

export function SelectItem({ text, ...props }: Readonly<SelectItemProps>) {
  return (
    <Select.Item
      {...props}
      className={twMerge(
        'flex items-center justify-between gap-2 px-3 py-2.5 outline-none data-[highlighted]:bg-violet-50',
        'dark:data-[highlighted]:bg-zinc-800 dark:data-[highlighted]:text-violet-300',
      )}
    >
      <Select.ItemText className="text-black dark:text-zinc-100">
        {text}
      </Select.ItemText>
      <Select.ItemIndicator>
        <Check className="h-4 w-4 text-violet-500 dark:text-violet-300" />
      </Select.ItemIndicator>
    </Select.Item>
  )
}
