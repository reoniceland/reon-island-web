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
    page: { text: "Almannaöryggi og lög", path: "/" },
  },
  {
    page: { text: "Atvinnulíf og viðskipti", path: "/" },
  },
  {
    page: { text: "Fatlað fólk og öryrkjar", path: "/" },
  },
  {
    page: { text: "Ferðalög og samgöngur", path: "/" },
  },
  {
    page: { text: "Fjármál", path: "/" },
  },
  {
    page: { text: "Fjölskyldan", path: "/þjónustur/fjölskyldan" },
  },
  {
    page: { text: "Heilsa", path: "/" },
  },
  {
    page: { text: "Húsnæði og heimili", path: "/" },
  },
  {
    page: { text: "Internetið og öryggi", path: "/" },
  },
  {
    page: { text: "Íslendingar í útlöndum", path: "/" },
  },
  {
    page: { text: "Menntun og rannsóknir", path: "/" },
  },
  {
    page: { text: "Samfélagið og réttindi", path: "/" },
  },
]

export default function ServicesPages() {
  const { subRoute } = useParams()
  const { url } = useRouteMatch()

  const breadCrums = split(split(url, subRoute)[0], '/')
  const filteredCrums = filter(breadCrums, crum => !!crum.length)

  const pageTitle = capitalize(last(filteredCrums))

  return (
    <>
      <PageHeader breadCrums={filteredCrums} title={pageTitle} />
      <PageContentWrapper pages={tempNavContent} title={pageTitle}>
        <Text variant="h2" withGutter>Þjónustu síða</Text>
      </PageContentWrapper>
    </>
  )
}
