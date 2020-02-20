import React, { useState } from 'react'

import {
  useRouteMatch,
  Link,
} from 'react-router-dom'
import { PageNavItem } from '../../types'

import { IconName } from '../../constants'
import Icon from '../Icon'
import Collapsable from '../Collapsable'

import './styles.scss'


interface Props {
  heading: string
  pages: PageNavItem[]
}

export default function PageNav({
  heading,
  pages,
}: Props) {

  const { url } = useRouteMatch()

  const [routesContainerOpen, setRoutesContainerOpen] = useState<boolean>(false)
  const [routesOpen, setRoutesOpen] = useState<{ [i: number]: boolean }>({ ...pages.map(() => false) })

  return (
    <div className="page-nav">
      <div
        className={`page-nav__heading ${routesContainerOpen && "page-nav__heading--isActive"}`}
        onClick={() => setRoutesContainerOpen(!routesContainerOpen)}
      >
        <span className="page-nav__heading__text">{heading}</span>
        <Icon name={IconName.IndicatorDown} />
      </div>
      {/* FIXME: remove document object and replace with something else */}
      <Collapsable isOpen={routesContainerOpen || document.body.scrollWidth > 800}>
        <div className="page-nav__routes">
          {pages.map((pageItem, index) => (
            <div key={index}>
              {!!pageItem.subPages ? (
                <div
                  className={`page-nav__route-item ${routesOpen[index] && "page-nav__route-item--isActive"}`}
                  onClick={() => setRoutesOpen({ ...routesOpen, [index]: !routesOpen[index] })}
                >
                  {pageItem.page.text}
                </div>
              ) : (
                <Link to={pageItem.page.path} className="page-nav__route-item">
                  {pageItem.page.text}
                </Link>
              )}
              {!!pageItem.subPages && (
                <Collapsable isOpen={routesOpen[index]}>
                  <div className="page-nav__sub-routes">
                    {pageItem.subPages.map((subPageItem, i) => (
                      <Link
                        key={i}
                        to={subPageItem.path}
                        className={
                          `page-nav__sub-route-item ${subPageItem.path === url && "page-nav__sub-route-item--isActive"}`
                        }
                      >
                        {subPageItem.text}
                      </Link>
                    ))}
                  </div>
                 </Collapsable>
              )}
            </div>
          ))}
        </div>
      </Collapsable>
    </div>
  )
}
