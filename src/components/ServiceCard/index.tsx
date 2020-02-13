import React from 'react'

import { IconName } from '../../constants'
import Icon from '../Icon'
import Text from '../Text'
import { Link } from "react-router-dom"

import './styles.scss'


interface LinkItem {
  text: string
  linkTo: string
}

interface LinkItemProps {
  url: string
  children: React.ReactNode
}

interface Props {
  icon: IconName
  title: string
  links: LinkItem[]
  linkTo: string
}

export default function ServiceCard({
  icon,
  title,
  links,
  linkTo,
}: Props) {
  function LinkLine({ url, children }: LinkItemProps) {
    return (
      <Link className="service-card__link-item" to={url}>
        <Icon name={IconName.ArrowRight} />
        <span className="service-card__link-item__text">{children}</span>
      </Link>
    )
  }

  return (
    <div className="service-card">
      <div className="service-card__head">
        <Icon name={icon} />
        <Text variant="h5">{title}</Text>
      </div>
      <div className="service-card__content">
        <div className="service-card__links">
          {links.map((link, index) => (
            <LinkLine key={index} url={link.linkTo}>
              {link.text}
            </LinkLine>
          ))}
        </div>
        <LinkLine url={linkTo}>
          <span className="service-card__link-item__text service-card__link-item__text--more">
            Sjá meira
          </span>
        </LinkLine>
      </div>
    </div>
  )
}
