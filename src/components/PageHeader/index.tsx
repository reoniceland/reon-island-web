import React from 'react'

import {
  map,
  split,
  capitalize,
  last,
  filter,
} from 'lodash'
import {
  useParams,
  useRouteMatch,
} from 'react-router-dom'

import Text from '../Text'
import Container from '../Container'

import './styles.scss'

export default function PageHeader() {
  const { subRoute } = useParams()
  const { url } = useRouteMatch()

  const cutUrl = split(url, subRoute)[0]
  const possibleCrums = split(cutUrl, '/')
  const breadCrums = filter(possibleCrums, crum => !!crum.length)

  const title = capitalize(last(breadCrums))

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
