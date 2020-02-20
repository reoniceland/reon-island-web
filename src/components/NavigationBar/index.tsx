import React from 'react'

import { Link } from 'react-router-dom'
import Logo from '../../images/island-logo.png'
import { IconName } from '../../constants'
import Button from '../Button'
import IconButton from '../IconButton'

import './styles.scss'


export default function NavigationBar() {
  return (
    <nav className="nav-bar">
      <Link className="nav-bar__logo" to="/">
        <img src={Logo} alt="island.is" />
      </Link>

      <div className="nav-bar__content">
        <div className="nav-bar__mobile-actions">
          <IconButton onClick={() => console.log("FIXME: Valmynd")} variant="secondary" icon={IconName.Hamburger} />
          <IconButton onClick={() => console.log("FIXME: Innskráning")} icon={IconName.Lock} />
        </div>
        <ul className="nav-bar__action-list">
          <li>
            English
          </li>
          <li>
            <Button onClick={() => console.log("FIXME: Leita")} variant="icon" icon={IconName.Search}>Leita á vef</Button>
          </li>
          <li>
            <Button onClick={() => console.log("FIXME: Valmynd")} variant="icon" icon={IconName.Hamburger}>Valmynd</Button>
          </li>
          <li>
            <Link to="/innskraning">
              <Button onClick={() => console.log("FIXME: Innskrá")} variant="add" icon={IconName.Lock}>Innskráning</Button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
