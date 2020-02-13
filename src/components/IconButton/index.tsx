import React from 'react'

import Icon from '../Icon'
import { IconName } from '../../constants'

import './styles.scss'


interface Props {
  onClick: () => void
  variant?: "secondary"
  disabled?: boolean
  icon: IconName
}

export default function IconButton({
  onClick,
  variant,
  icon,
  ...props
}: Props) {
  return (
    <button onClick={onClick} className={`icon-btn icon-btn--${variant}`} {...props}>
      <Icon name={icon} />
    </button>
  )
}
