import React from 'react'

import './Container.scss'


interface ContainerProps {
  children: any
}

export default function Container({
  children,
}: ContainerProps) {
  return (
    <div>
      {children}
    </div>
  )
}
