import React from 'react'

import {
  split,
  capitalize,
  last,
  filter,
} from 'lodash'
import {
  useParams,
  useRouteMatch,
} from 'react-router-dom'

import Logo from '../../images/island-logo-inverted.png'
import Text from '../Text'
import Container from '../Container'
import Icon from '../Icon'
import { IconName } from '../../constants'
import PageNav from '../PageNav'

import './styles.scss'


interface Props {
  children: React.ReactNode
}

export default function PageContentWrapper({
  children,
}: Props) {
  return (
    <div className="page-wrapper">
      <Container>
        <div className="page-wrapper__inner">
          <div className="page-wrapper__search page-wrapper__search--mobile" />
          <div className="page-wrapper__nav">
            <PageNav heading="Fjölskylda" />
          </div>
          <div className="page-wrapper__content">
            <div className="page-wrapper__search page-wrapper__search--desktop" />
            {children}
          </div>
        </div>
      </Container>
    </div>
  )
}
