import { v4 } from "uuid"
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
    key: v4(),
    style: {cursor: 'pointer'},
    onClick: (e:any) => {if(!aProps.href) e.preventDefault()},
    ...aProps,
  }

  return <a {...a}>
    {text}
  </a>
}