import React from 'react'

import './styles.scss'


interface Props {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p"
  inverted?: boolean
  withGutter?: boolean
  children: React.ReactNode
}

export default function Text({
  variant,
  inverted,
  withGutter,
  children,
}: Props) {
  const TextComponent = variant

  return (
    <TextComponent
      className={`text text--${variant} ${inverted && "text--inverted"} ${withGutter && `text--${variant}--withGutter`}`}
    >
      {children}
    </TextComponent>
  )
}