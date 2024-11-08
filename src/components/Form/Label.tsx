import { ComponentProps } from 'react'

interface LabelProps extends ComponentProps<'label'> {
  htmlFor: string
  title: string
  children?: React.ReactNode
}

export function Label({
  htmlFor,
  title,
  children,
  ...props
}: Readonly<LabelProps>) {
  return (
    <label
      htmlFor={htmlFor}
      className="text-sm font-medium text-zinc-700"
      {...props}
    >
      {title}
      {children}
    </label>
  )
}
