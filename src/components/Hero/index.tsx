import React from 'react'

import Text from '../Text'
import Container from '../Container'
import Icon from '../Icon'
import { IconName } from '../../constants'
import ShortcutBlocks from '../ShortcutBlocks'

import './styles.scss'


export default function Hero() {
  const searchKeys = [
    "Fæðingarorlof",
    "Endurnýja lyfseðil",
    "Heimagisting",
    "Stofna nýtt einkahlutafélag",
    "Stafrænt ökuskírteini",
    "Afskrá ökutæki",
  ]

  return (
    <div className="hero">
      <div className="hero__image" />
      <div className="hero__content">
        <div className="hero__header">
          <Container position="leftHalf">
            <Text variant="h1" inverted>
              Ísland.is er upplýsinga- og þjónustuveita opinberra aðila
              <span className="hero__header__bold">
                á Íslandi<span className="hero__header__bold--red">.</span>
              </span>
            </Text>
          </Container>
        </div>
        <Container position="leftHalf">
          <div className="hero__search">
            <input
              className="hero__search__input"
              type="text"
              placeholder="Leita á vefnum"
            />
            <Icon name={IconName.Search} />
          </div>
          <div className="hero__keywords-wrapper">
            {searchKeys.map((keyword, index) => (
              <button key={index} className="hero__keyword">
                {keyword}
              </button>
            ))}
          </div>
          <Text variant="h5" withGutter>Flýtileiðir</Text>
          <ShortcutBlocks
            items={[
              {
                icon: IconName.User,
                title: "Heilsugæsla",
                path: "/",
              },
              {
                icon: IconName.User,
                title: "Fjölskyldan",
                path: "/þjónustur/fjölskyldan",
              },
              {
                icon: IconName.User,
                title: "Atvinna",
                path: "/",
              },
              {
                icon: IconName.User,
                title: "Heimilið",
                path: "/",
              },
              {
                icon: IconName.User,
                title: "Fyrirtæki",
                path: "/",
              },
              {
                icon: IconName.User,
                title: "Ökutækið",
                path: "/",
              },
            ]}
          />
        </Container>
      </div>
    </div>
  )
}
