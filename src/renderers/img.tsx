import React from "react"
import { guid } from "../utils/guid"

/**
 * Used to create a tag for the Cloud component
 * @param options.aProps Attributes passed to the underlying anchor element
 * @param options.imgProps Attributes passes to the underlying img element
 * @returns A tag component to be rendered as a child of the Cloud component
 */
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
    key: guid(),
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