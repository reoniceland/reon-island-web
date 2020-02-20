import React from 'react'
import './styles.scss'

interface InputProps {
  label: string
  name: string,
  type: 'text' | 'email' | 'password' | 'number'
  disabled: boolean
}

export default function InputField({
  type,
  name,
  label,
  disabled,
}: InputProps) {

  return (
    <div className={`input-${type}`}>
      <label htmlFor={name} className={`input-${type}__label`}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        className={`input-${type}__input input-${type}__input${disabled ? '--disabled' : '--active'}`}
        disabled={disabled}
      />
    </div>
  )
}
