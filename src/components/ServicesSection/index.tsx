import React from 'react'

import Text from '../Text'
import Container from '../Container'
import TitleWrapper from '../TitleWrapper'
import ServiceCard from '../ServiceCard'
import ServiceCardsWrapper from '../ServiceCardsWrapper'
import { IconName } from '../../constants'

import './styles.scss'


export default function ServicesSection() {
  const cardsContent = [
    {
      icon: IconName.Law,
      title: "Almannaöryggi og lög",
      links: [{ text: "Sakavottorð einstaklings", linkTo: "" }, { text: "Tilkynna ólöglegt efni", linkTo: "/" }],
      linkTo: "/",
    },
    {
      icon: IconName.Graph,
      title: "Atvinnulíf og viðskipti",
      links: [{ text: "Heimagisting", linkTo: "/" }, { text: "Stofna nýtt einkahlutafélag", linkTo: "/" }],
      linkTo: "/",
    },
    {
      icon: IconName.Wheelchair,
      title: "Fatlað fólk og öryrkjar",
      links: [{ text: "Umsókn um ummönnunargreiðslur", linkTo: "/" }, { text: "Endurnýja lyfseðil", linkTo: "/" }],
      linkTo: "/",
    },
    {
      icon: IconName.Plane,
      title: "Ferðalög og samgöngur",
      links: [{ text: "Stafrænt ökuskírteini", linkTo: "/" }, { text: "Útgáfa vegabréfs undir 18 ára", linkTo: "/" }],
      linkTo: "/",
    },
    {
      icon: IconName.Wallet,
      title: "Fjármál",
      links: [{ text: "Bóka tíma hjá lækni", linkTo: "/" }, { text: "Endurnýja lyfseðil", linkTo: "/" }],
      linkTo: "/",
    },
    {
      icon: IconName.User,
      title: "Fjölskyldan",
      links: [{ text: "Barnabætur", linkTo: "/þjónustur/fjölskylda/barnabætur" }, { text: "Fæðingar- og foreldraorlof", linkTo: "/þjónustur/fjölskyldan/fæðingarorlof" }],
      linkTo: "/",
    },
    {
      icon: IconName.Graph,
      title: "Heilsa",
      links: [{ text: "Bóka tíma hjá lækni", linkTo: "/" }, { text: "Endurnýja lyfseðil", linkTo: "/" }],
      linkTo: "/",
    },
    {
      icon: IconName.Graph,
      title: "Húsnæði og heimili",
      links: [{ text: "Bóka tíma hjá lækni", linkTo: "/" }, { text: "Endurnýja lyfseðil", linkTo: "/" }],
      linkTo: "/",
    },
  ]

  return (
    <div className="services">
      <Container>
        <TitleWrapper btnText="Sjá allt" linkTo="/þjónustur">
          <Text variant="h2">Allar þjónustur</Text>
        </TitleWrapper>

        <ServiceCardsWrapper>
          {cardsContent.map(({ icon, title, links, linkTo }, index) => (
            <ServiceCard
              key={index}
              icon={icon}
              title={title}
              links={links}
              linkTo={linkTo}
            />
          ))}
        </ServiceCardsWrapper>
      </Container>
    </div>
  )
}
