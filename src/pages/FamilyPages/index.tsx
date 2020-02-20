import React from 'react'

import {
  useParams,
  useRouteMatch,
} from 'react-router-dom'
import {
  split,
  capitalize,
  last,
  filter,
} from 'lodash'

import PageHeader from '../../components/PageHeader'
import PageContentWrapper from '../../components/PageContentWrapper'
import Text from '../../components/Text'


// FIXME: Replace with real content
const tempNavContent = [
  {
    page: { text: "Andlát", path: "/" },
    subPages: [
      { text: "Lorem ipsum", path: "/" },
    ],
  },
  {
    page: { text: "Barneignir", path: "/" },
    subPages: [
      { text: "Barnabætur", path: "/þjónustur/fjölskyldan/barnabætur" },
      { text: "Faðerni", path: "/þjónustur/fjölskyldan/faðerni" },
      { text: "Fæðingar- og foreldraorlof", path: "/þjónustur/fjölskyldan/fæðingarorlof" },
      { text: "Meðganga og fæðing", path: "/þjónustur/fjölskyldan/fæðing" },
      { text: "Nafngiftir", path: "/þjónustur/fjölskyldan/nafnagiftir" },
      { text: "Námsmenn með börn", path: "/þjónustur/fjölskyldan/námsmenn" },
      { text: "Ófrjósemi / tæknifrjóvgun", path: "/þjónustur/fjölskyldan/tæknifrjóvgun" },
      { text: "Til athugunar á meðgöngu", path: "/þjónustur/fjölskyldan/meðganga" },
      { text: "Ættleiðing", path: "/þjónustur/fjölskyldan/ættleiðing" },
    ],
  },
  {
    page: { text: "Börn & unglingar", path: "/" },
    subPages: [
      { text: "Lorem ipsum", path: "/" },
    ],
  },
  {
    page: { text: "Dagvist", path: "/" },
    subPages: [
      { text: "Lorem ipsum", path: "/" },
    ],
  },
  {
    page: { text: "Hjúskapur og sambúð", path: "/" },
    subPages: [
      { text: "Lorem ipsum", path: "/" },
    ],
  },
  {
    page: { text: "Ólíkar fjölskyldur", path: "/" },
    subPages: [
      { text: "Lorem ipsum", path: "/" },
    ],
  },
  {
    page: { text: "Umsóknir", path: "/" },
    subPages: [
      { text: "Lorem ipsum", path: "/" },
    ],
  },
]

export default function FamilyPages() {
  const { subRoute } = useParams()
  const { url } = useRouteMatch()

  const activePage = last(split(url, '/'))

  const breadCrums = split(split(url, subRoute)[0], '/')
  const filteredCrums = filter(breadCrums, crum => !!crum.length)

  const pageTitle = capitalize(last(filteredCrums))

  return (
    <>
      <PageHeader breadCrums={filteredCrums} title={pageTitle} />
      <PageContentWrapper pages={tempNavContent} title={pageTitle}>
        {activePage === "fæðingarorlof" ? (
          <>
            <Text variant="h2" withGutter>Fæðingar- og foreldraorlof</Text>
            <Text variant="p" withGutter isContained>
              Við fæðingu, ættleiðingu og varanlegt fóstur barns eiga foreldrar rétt á launuðu orlofi.
              Þeir fá greiðslur eða styrk úr Fæðingarorlofssjóði, eftir því hver staða þeirra á vinnumarkaði er.
            </Text>
          </>
        ) : <Text variant="h2" withGutter>Síða í vinnslu</Text>}
      </PageContentWrapper>
    </>
  )
}
