import React, { useEffect, useState, useRef } from 'react'


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
