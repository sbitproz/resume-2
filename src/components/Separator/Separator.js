import React from 'react'
import './Separator.css'

export const Separator = ({ height }) => {
  return (
    <div className='Separator' style={{ height }} />
  )
}

export const ThinSeparator = () => <Separator height={5} />

export const FatSeparator = () => <Separator height={12} />

