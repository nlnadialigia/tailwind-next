import { Bold, Italic, Link, List, ListOrdered } from 'lucide-react'

const buttonTypes = [Bold, Italic, Link, List, ListOrdered]

export function EditorIcons() {
  return (
    <div className="flex items-center gap-1">
      {buttonTypes.map((Button) => (
        <button
          key={Button.name}
          type="button"
          className="rounded-md p-2 hover:bg-zinc-100"
        >
          <Button className="h-4 w-4 text-zinc-500" strokeWidth={3} />
        </button>
      ))}
    </div>
  )
}
