import React from 'react'
import Text from '../../components/Text'
import ApplicationCard from '../../components/ApplicationCard'
import { IconName } from '../../constants'
import FamilyImage from '../../images/family.png'


export default function Orlof() {
  return (
    <>
      <Text variant="h2" withGutter>Fæðingar- og foreldraorlof</Text>

      <Text variant="p" withGutter isContained>
        Við fæðingu, ættleiðingu og varanlegt fóstur barns eiga foreldrar rétt á launuðu orlofi.
        Þeir fá greiðslur eða styrk úr Fæðingarorlofssjóði, eftir því hver staða þeirra á vinnumarkaði er.
      </Text>

      <Text variant="h3" withGutter>Umsóknir</Text>

      <ApplicationCard
        image={FamilyImage}
        icon={IconName.Family}
        title="Sækja um greiðslur í fæðingarorlofi"
        description="Hægt er að sækja um greiðslur í fæðingarorlof hér rafrænt. Umsókn þarf að vera búið að skila síðasta lagi sex vikum fyrir áætlaðan fæðingardag."
        tag="Rafræn umsókn"
        path="/"
      />
    </>
  )
}
