import { ReactNode } from "react"

export interface ShapeProps {
  children?: ReactNode
  disabled?: boolean
  onClick?(): void
  className?: string
  ariaLabel?: string
  type?: string
}
