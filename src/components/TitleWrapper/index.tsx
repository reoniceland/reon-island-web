import React from 'react'

import Icon from '../Icon'
import { IconName } from '../../constants'
import { Link } from 'react-router-dom'

import './styles.scss'


interface Props {
  btnText: string
  linkTo: string
  children: React.ReactNode
}

export default function TitleWrapper({
  btnText,
  linkTo,
  children,
}: Props) {
  return (
    <div className="title-wrapper">
      {children}
      <Link to={linkTo} className="title-wrapper__link">
        {btnText}
        <Icon name={IconName.ArrowRight} />
      </Link>
    </div>
  )
}
