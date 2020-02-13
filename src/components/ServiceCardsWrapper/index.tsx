import React from 'react'

import './styles.scss'


interface Props {
  children: React.ReactNode
}

export default function ServiceCardsWrapper({
  children,
}: Props) {
  return (
    <div className="sc-wrapper">
      {children}
    </div>
  )
}
