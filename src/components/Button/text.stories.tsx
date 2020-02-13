import React from 'react'
import Button from '.'

export default {
  component: Button,
  title: 'Buttons',
}

const onClickBtn = () => console.log("Click")

export const primary = () => <Button onClick={onClickBtn}>Halda áfram</Button>

export const primaryDisabled = () => <Button onClick={onClickBtn} disabled>Halda áfram</Button>

export const secondary = () => <Button onClick={onClickBtn} variant="secondary">Halda áfram</Button>

export const secondaryDisabled = () => <Button onClick={onClickBtn} variant="secondary" disabled>Halda áfram</Button>

export const close = () => <Button onClick={onClickBtn} variant="close">Loka</Button>

export const add = () => <Button onClick={onClickBtn} variant="add">Veita umboð</Button>
