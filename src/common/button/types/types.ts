import { ReactNode } from "react"

export interface ButtonProps {
  children?: ReactNode
  disabled?: boolean
  onClick?(): void
  className?: string
  ariaLabel?: string
}
