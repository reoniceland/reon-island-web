import React from 'react'

import './styles.scss'


interface Props {
  children: React.ReactNode
  position?: "leftHalf" | "rightHalf"
}

export default function Container({
  position,
  children,
}: Props) {
  return (
    <div className={`container ${!!position && `container--${position}`}`}>
      {children}
    </div>
  )
}
