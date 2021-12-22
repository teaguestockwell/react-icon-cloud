import { guid } from "../utils/guid"
import React from "react"

/**
 * Used to create a tag for the Cloud component
 * @param options.aProps Attributes passed to the underlying anchor element
 * @param options.text The text to render
 * @returns A component that can be rendered as a tag inside the Cloud component
 */
export const renderText = (
  {
    aProps = {},
    text,
  }: {
    aProps?: React.DetailedHTMLProps<React.AllHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
    text:string
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