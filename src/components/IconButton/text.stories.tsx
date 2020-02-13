import React from 'react'
import IconButton from '.'
import { IconName } from '../../constants'

export default {
  component: IconButton,
  title: 'Buttons',
}

const onClickBtn = () => console.log("Click")

export const primary = () => <IconButton onClick={onClickBtn} icon={IconName.Lock} />

export const primaryDisabled = () => <IconButton onClick={onClickBtn} icon={IconName.Lock} disabled />

export const secondary = () => <IconButton onClick={onClickBtn} icon={IconName.Hamburger} variant="secondary" />

export const secondaryDisabled = () => <IconButton onClick={onClickBtn} icon={IconName.Hamburger} variant="secondary" disabled />

