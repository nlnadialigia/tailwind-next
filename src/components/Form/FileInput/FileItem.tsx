import { formatBytes } from '@/src/utils/format-bytes'
import { CheckCircle2, Trash2, UploadCloud } from 'lucide-react'
import { Button } from '../../Button'

interface FileItemProps {
  name: string
  size: number
}

type StateProgress = 'complete' | 'error' | 'progress'

export function FileItem({ name, size }: Readonly<FileItemProps>) {
  const state = 'error' as StateProgress

  return (
    <div className="group flex items-start gap-4 rounded-lg border border-zinc-200 p-4">
      <div className="rounded-full border-4 border-violet-100 bg-violet-200 p-2 text-violet-600 group-hover:border-violet-50 group-hover:bg-violet-100">
        <UploadCloud className="h-4 w-4" />
      </div>

      {state === 'error' ? (
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col">
            <span className="text-error-700 text-sm font-medium">
              Upload failed, please try again
            </span>
            <span className="text-error-600 text-sm">{name}</span>
          </div>

          <button
            type="button"
            className="text-error-700 hover:text-error-900 text-sm font-semibold"
          >
            Try again
          </button>
        </div>
      ) : (
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-zinc-700">{name}</span>
            <span className="text-sm text-zinc-500">{formatBytes(size)}</span>
          </div>

          <div className="flex w-full items-center gap-3">
            <div className="h-2 flex-1 rounded-full bg-zinc-100">
              <div
                className="h-2 rounded-full bg-violet-600"
                style={
                  state === 'complete' ? { width: '100%' } : { width: '80%' }
                }
              />
            </div>
            <span className="text-sm font-medium text-zinc-700">
              {state === 'complete' ? '100%' : '80%'}
            </span>
          </div>
        </div>
      )}

      {state === 'complete' ? (
        <CheckCircle2 className="h-5 w-5 rounded-full bg-violet-600 text-violet-50" />
      ) : (
        <Button type="button" variant="ghost">
          <Trash2 className="h-5 w-5 text-zinc-500" />
        </Button>
      )}
    </div>
  )
}
