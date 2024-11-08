'use client'

import { useAutoAnimate } from '@formkit/auto-animate/react'
import { FileItem } from './FileItem'
import { useFileInput } from './Root'

export function FileList() {
  const { files } = useFileInput()
  const [parent] = useAutoAnimate()

  return (
    <div className="mt-4 space-y-3" ref={parent}>
      {files.map((file) => {
        return <FileItem key={file.name} name={file.name} size={file.size} />
      })}
    </div>
  )
}
