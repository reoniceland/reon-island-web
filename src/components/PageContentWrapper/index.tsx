import React from 'react'

import { PageNavItem } from '../../types'

import Container from '../Container'
import Icon from '../Icon'
import { IconName } from '../../constants'
import PageNav from '../PageNav'

import './styles.scss'


interface Props {
  children: React.ReactNode
  pages: PageNavItem[]
  title: string
}

export default function PageContentWrapper({
  children,
  pages,
  title,
}: Props) {
  function SearchInput() {
    return (
      <>
        <input
          className="page-wrapper__search__input"
          type="text"
          placeholder="Leita á vefnum"
        />
        <Icon name={IconName.Search} />
      </>
    )
  }

  return (
    <div className="page-wrapper">
      <Container>
        <div className="page-wrapper__inner">
          <div className="page-wrapper__search page-wrapper__search--mobile">
            <SearchInput />
          </div>
          <div className="page-wrapper__nav">
            <PageNav heading={title} pages={pages} />
          </div>
          <div className="page-wrapper__content">
            <div className="page-wrapper__search page-wrapper__search--desktop">
              <SearchInput />
            </div>
            {children}
          </div>
        </div>
      </Container>
    </div>
  )
}
