import React from 'react'
import InputField from '.'

export default {
  component: InputField,
  title: 'Inputs',
}

// default has been changed to basic
export const basic = () => <InputField label="Netfang" type="email" name="frontpage" disabled={false}/>

export const disabled = () => <InputField label="Netfang" type="email" name="frontpage" disabled={true}/>
