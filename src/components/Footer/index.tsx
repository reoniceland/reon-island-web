import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import Logo from '../../images/island-logo-inverted.png'
import Container from '../Container'
import Icon from '../Icon'
import { IconName } from '../../constants'
import Collapsable from '../Collapsable'

import './styles.scss'


export default function Footer() {
  const contactContent = [
    {
      icon: IconName.Phone,
      text: "Sími 515 - 5300",
      href: "#",
    },
    {
      icon: IconName.Att,
      text: "island@island.is",
      href: "mailto:island@islan.is",
    },
    {
      icon: IconName.Facebook,
      text: "Facebook síða",
      href: "https://facebook.com/",
    },
  ]

  const linksContent = [
    {
      title: "Yfirlit",
      links: [
        { text: "Innskráning", path: "/" },
        { text: "Þjónustur", path: "/" },
        { text: "Samráðsgátt", path: "/" },
        { text: "Heilsuvera", path: "/" },
        { text: "Eigin stillingar", path: "/" },
        { text: "English", path: "/" },
      ],
    },
    {
      title: "Ísland.is",
      links: [
        { text: "Um Ísland.is", path: "/" },
        { text: "Stafrænt Ísland", path: "/" },
        { text: "Opin gögn", path: "/" },
        { text: "Mannanöfn", path: "/" },
        { text: "Undirskriftalistar", path: "/" },
        { text: "Opnir reikningar", path: "/" },
      ],
    },
    {
      title: "Hjálp",
      links: [
        { text: "Leita á síðu", path: "/" },
        { text: "Hafa samband", path: "/" },
        { text: "Algengar spurningar", path: "/" },
        { text: "Fyrirvari", path: "/" },
        { text: "Kökuskilmálar", path: "/" },
      ],
    },
  ]

  const [linkContentOpen, setLinkContentOpen] = useState<{ [i: number]: boolean }>({ ...linksContent.map(() => false) })

  return (
    <div className="footer">
      <Container>
        <div className="footer__top">
          <div className="footer__top-left">
            <Link to="/">
              <img className="footer__logo" src={Logo} alt="island.is" />
            </Link>
            <div className="footer__contact">
              {contactContent.map((contactInfo, index) => (
                <a key={index} href={contactInfo.href} className="footer__contact__item">
                  <Icon name={contactInfo.icon} />
                  {contactInfo.text}
                </a>
              ))}
            </div>
          </div>
          <div className="footer__links footer__links--mobile">
            {linksContent.map((chapter, cIndex) => (
              <div key={cIndex} className="footer__link-chapter">
                <button
                  className={`footer__link-chapter__btn ${linkContentOpen[cIndex] && "footer__link-chapter__btn--isActive"}`}
                  onClick={() => setLinkContentOpen({ ...linkContentOpen, [cIndex]: !linkContentOpen[cIndex] })}
                >
                  {chapter.title}
                  <Icon name={IconName.IndicatorDown} />
                </button>
                <Collapsable isOpen={linkContentOpen[cIndex]}>
                  <div className="footer__link-collapsable">
                    {chapter.links.map((link, lIndex) => (
                      <Link key={lIndex} to={link.path} className="footer__link-item">
                        {link.text}
                      </Link>
                    ))}
                  </div>
                </Collapsable>
              </div>
            ))}
          </div>
          <div className="footer__links footer__links--desktop">
            {linksContent.map((chapter, cIndex) => (
              <div key={cIndex} className="footer__link-chapter">
                <span className="footer__link-chapter__title">{chapter.title}</span>
                {chapter.links.map((link, lIndex) => (
                  <Link key={lIndex} to={link.path} className="footer__link-item">
                    {link.text}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="footer__bottom">
          <span className="footer__bottom__text">
            Fyrirvari Leitast verður við að hafa réttar upplýsingar á vef island.is en ekki er unnt að ábyrgjast að það sé ávallt svo.
          </span>
          <span className="footer__bottom__text">
            © Ísland.is
          </span>
        </div>
      </Container>
    </div>
  )
}
