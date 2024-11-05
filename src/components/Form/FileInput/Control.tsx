import { ComponentProps } from 'react'

interface ControlProps extends ComponentProps<'input'> {
  id: string
}

export function Control({ id, ...props }: Readonly<ControlProps>) {
  return <input type="file" className="sr-only" id={id} {...props} />
}
