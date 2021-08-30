import React from 'react'

export interface Options {
  name: string
}

export const ReactTagCanvas = (options: Options) => {
  return (
    <div>{options.name}</div>
  )
}