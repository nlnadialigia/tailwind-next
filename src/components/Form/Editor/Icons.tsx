'use client'

import { Bold, Italic, Link, List, ListOrdered } from 'lucide-react'
import { Button } from '../../Button'

const buttonTypes = [Bold, Italic, Link, List, ListOrdered]

export function EditorIcons() {
  return (
    <div className="flex items-center gap-2">
      {buttonTypes.map((Icon) => (
        <Button key={Icon.name} type="button" variant="ghost">
          <Icon className="h-4 w-4 text-zinc-500" strokeWidth={3} />
        </Button>
      ))}
    </div>
  )
}
