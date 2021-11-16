import React from "react"
import { v4 } from "uuid"

export const renderImg = (
  {
    aProps = {},
    imgProps = {},
  }: {
    aProps?: React.DetailedHTMLProps<React.AllHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
    imgProps?: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>
  }
) => {
  const a = {
    key: v4(),
    style: {cursor: 'pointer'},
    onClick: (e:any) => {if(!aProps.href) e.preventDefault()},
    ...aProps,
  }

  const i = {
    ...imgProps,
  }

  return <a {...a}>
    <img {...i}/>
  </a>
}