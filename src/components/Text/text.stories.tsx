import React from 'react'
import Text from '.'

export default {
  component: Text,
  title: 'Typography',
}

export const h1 = () => <Text variant="h1">I am H1</Text>
export const h2 = () => <Text variant="h2">I am H2</Text>
export const h3 = () => <Text variant="h3">I am H3</Text>
export const h4 = () => <Text variant="h4">I am H4</Text>
export const h5 = () => <Text variant="h5">I am H5</Text>
export const h6 = () => <Text variant="h6">I am H6</Text>
export const paragraph = () => <Text variant="p">I am a very long paragraph exmplaining lots of fun stuff</Text>
