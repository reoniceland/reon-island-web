import React, { useState } from 'react'
import {
  Link,
} from 'react-router-dom'
import { useDebounce } from "use-debounce/lib"
import {Collapse } from 'react-collapse'
import Icon from '../Icon'
import { IconName } from '../../constants'

import './styles.scss'

interface Props {
  searchKeys: {text: string, path: string}[]
}

export default function Search({
  searchKeys,
  }: Props) {
  const [dataValue, setDataValue] = useState('')
  const [query] = useDebounce(dataValue, 200)

  const results = searchKeys.filter(key => key.text.toLowerCase().includes(query.toLocaleLowerCase()) && query)

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDataValue(event.target.value)
  }

  return (
    <div className="search">
      <input
        className="search__input"
        type="text"
        placeholder="Leita á vefnum"
        onChange={event => handleTextChange(event)}
      />
      <Icon name={IconName.Search} />
      <Collapse isOpened={results.length > 0}>
        <ul>
        {results.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.path} >{item.text}</Link>
            </li>
          )
        })}
        </ul>
      </Collapse>
    </div>
  )
}
