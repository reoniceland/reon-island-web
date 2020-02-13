import React from 'react'

import {
  useParams,
} from 'react-router-dom'


export default function ServicesPages() {
  const { serviceGroup } = useParams()

  return (
    <>
      {serviceGroup}
    </>
  )
}
