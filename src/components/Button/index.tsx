import React from 'react'

import Icon from '../Icon'
import { IconName } from '../../constants'

import './styles.scss'


interface Props {
  onClick: () => void
  variant?: "secondary" | "close" | "add" | "mini" | "icon"
  children: React.ReactNode
  disabled?: boolean
  icon?: IconName
}

export default function Button({
  onClick,
  variant,
  children,
  icon,
  ...props
}: Props) {
  return (
    <button onClick={onClick} className={`button button--${variant}`} {...props}>
      {children}
      {variant === "close" && (
        <div className="button--close__icon">
          <Icon name={IconName.Close} />
        </div>
      )}
      {variant === "add" && (
        <div className="button--add__icon">
          <Icon name={icon || IconName.Add} />
        </div>
      )}
      {variant === "icon" && (
        <div className="button--icon__icon">
          <Icon name={icon || IconName.Drop} />
        </div>
      )}
    </button>
  )
}
