import React from 'react'

import {
  Switch,
  Route,
  useParams,
  useRouteMatch,
} from "react-router-dom"

import {
  split,
  capitalize,
  last,
  filter,
} from 'lodash'



import PageHeader from '../../components/PageHeader'
import PageContentWrapper from '../../components/PageContentWrapper'
import Text from '../../components/Text'

import Orlof from './Orlof'


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
      { text: "Barnabætur", path: "/thjonustur/fjolskyldan/barnabætur" },
      { text: "Faðerni", path: "/thjonustur/fjolskyldan/faðerni" },
      { text: "Fæðingar- og foreldraorlof", path: "/thjonustur/fjolskyldan/faedingarorlof" },
      { text: "Meðganga og fæðing", path: "/thjonustur/fjolskyldan/fæðing" },
      { text: "Nafngiftir", path: "/thjonustur/fjolskyldan/nafnagiftir" },
      { text: "Námsmenn með börn", path: "/thjonustur/fjolskyldan/námsmenn" },
      { text: "Ófrjósemi / tæknifrjóvgun", path: "/thjonustur/fjolskyldan/tæknifrjóvgun" },
      { text: "Til athugunar á meðgöngu", path: "/thjonustur/fjolskyldan/meðganga" },
      { text: "Ættleiðing", path: "/thjonustur/fjolskyldan/ættleiðing" },
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
  const { path, url } = useRouteMatch()

  const breadCrums = split(split(url, subRoute)[0], '/')
  const filteredCrums = filter(breadCrums, crum => !!crum.length)

  const pageTitle = capitalize(last(filteredCrums))

  return (
    <>
      <PageHeader breadCrums={filteredCrums} title={pageTitle} />

      <PageContentWrapper pages={tempNavContent} title={pageTitle}>
        <Switch>
          <Route exact path={`${path}/faedingarorlof`} component={Orlof} />

          <Route path="*">
            <Text variant="h2" withGutter>Síða í vinnslu</Text>
          </Route>
        </Switch>
      </PageContentWrapper>
    </>
  )
}
