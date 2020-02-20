import React from 'react'

import { IconName } from '../../constants'
import Icon from '../Icon'
import Text from '../Text'
import Button from '../Button'
import { Link } from "react-router-dom"

import './styles.scss'


interface Props {
  image: string
  icon: IconName
  title: string
  description: string
  tag: string
  path: string
}

export default function ApplicationCard({
  image,
  icon,
  title,
  description,
  tag,
  path,
}: Props) {
  return (
    <Link to={path} className="appl-card">
      <div className="appl-card__image" style={{ backgroundImage: `url(${image})` }} />
      <div className="appl-card__content">
        <div className="appl-card__icon">
          <Icon name={icon} />
        </div>
        <Text variant="h4" withGutter>{title}</Text>
        <Text variant="small" withGutter>{description}</Text>
        <div className="appl-card__btn">
          <Button color="purple">Sækja um</Button>
        </div>
        <span className="appl-card__tag">
          {tag}
        </span>
      </div>
    </Link>
  )
}
