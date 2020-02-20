import React, { useRef } from 'react'


import './styles.scss'

interface Props {
  isOpen: boolean
  children: React.ReactNode
}

export default function Collapsable({
  isOpen,
  children,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={containerRef} className="collapsable" style={{ height: isOpen ? "" : "0px" }}>
      {children}
    </div>
  )
}
