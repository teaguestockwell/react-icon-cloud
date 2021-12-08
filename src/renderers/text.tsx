import { guid } from "../utils/guid"
import React from "react"

export const renderText = (
  {
    text,
    aProps = {},
  }: {
    text:string
    aProps?: React.DetailedHTMLProps<React.AllHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
  }
) => {
  const a = {
    key: guid(),
    style: {cursor: 'pointer'},
    onClick: (e:any) => {if(!aProps.href) e.preventDefault()},
    ...aProps,
  }

  return <a {...a}>
    {text}
  </a>
}