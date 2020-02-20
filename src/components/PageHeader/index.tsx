import React from 'react'

import {
  map,
  capitalize,
} from 'lodash'

import Text from '../Text'
import Container from '../Container'

import './styles.scss'


interface Props {
  breadCrums: string[]
  title: string
}

export default function PageHeader({
  breadCrums,
  title,
}: Props) {
  return (
    <div className="page-header">
      <Container>
        <div className="page-header__crums-wrapper">
          <span className="page-header__crum">Forsíða</span>
          {map(breadCrums, (breadCrum, index) => (
            <span key={index} className="page-header__crum">{capitalize(breadCrum)}</span>
          ))}
        </div>
        <Text variant="h1" inverted>{title}</Text>
      </Container>
    </div>
  )
}
