import React from 'react'

import Icon from '../Icon'
import { Link } from 'react-router-dom'
import { IconName } from '../../constants'

import './styles.scss'


interface BlockItem {
  icon: IconName
  title: string
  path: string
}

interface BlockProps {
  item: BlockItem
}

interface Props {
  items: BlockItem[]
}

export default function ShortcutBlocks({
  items,
}: Props) {

  function Item({ item }: BlockProps) {
    return (
      <Link to={item.path} className="sc-blocks__item">
        <Icon name={item.icon} />
        <span className="sc-blocks__item__text">{item.title}</span>
      </Link>
    )
  }

  return (
    <div className="sc-blocks__wrapper">
      {items.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </div>
  )
}
