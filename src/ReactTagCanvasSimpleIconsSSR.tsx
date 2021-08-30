import simpleIcons from 'simple-icons'
import * as Types from './types/types'
import { ReactTagCanvas} from './ReactTagCanvas'
import React from 'react'
import {hex2contrast, hex2rgb} from '@csstools/convert-colors'
import { v4 } from 'uuid'

export const getTags = (
  {
    tags,
    bgColor,
    size,
    fallbackColor,
    minContrast = 1
  }:
  {
    tags: Types.IconTag[]
    bgColor: string
    size: number
    fallbackColor: string
    minContrast: number
  }
): Types.Tag[] => tags.map(t => {
  const icon = simpleIcons.get(t.simpleIconSlug)
  
  const addHash = (color:string) => color[0] === '#' ? color : `#${color}`

  if(!icon){
    throw new Error(`Icon ${t.simpleIconSlug} is not a simple icon`)
  }

  const originalHex =  addHash(icon.hex)
  const bgHex = addHash(bgColor)
  const isAccessibleColor = hex2contrast(bgHex, originalHex) > minContrast
  const rgb = isAccessibleColor ? hex2rgb(originalHex) : hex2rgb(fallbackColor)
  const [r,g,b] = rgb.map((percent: number) => Math.round((percent / 100) * 255)) 
  const imgSrc = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" style="fill: rgb(${r}, ${g}, ${b});" viewBox="0 0 24 24" height="${size}px" width="${size}px"> <title>${icon.title}</title> <path d="${icon.path}"></path> </svg>`

  return {
    key: v4(),
    title: icon.title,
    imgWidth: size,
    imgHeight: size,
    imgSrc,
    onClick: () =>{}
  }
})

export const ReactTagCanvasSimpleIconsSSR = (
  {
    tagCanvasOptions = {},
    tags = [],
    innerStyle = {},
    canvasHeight = 1000,
    canvasWidth = 1000,
    canvasStyle = {},
    fallbackHexColor,
    backgroundHexColor,
    size,
    minContrast = 1
  }: Types.IconTagCanvasProps
  
) => {

  const tags2 = getTags({
    tags,
    bgColor: backgroundHexColor,
    size,
    fallbackColor: fallbackHexColor,
    minContrast
  })

  return <ReactTagCanvas
    tagCanvasOptions={tagCanvasOptions}
    tags={tags2}
    innerStyle={innerStyle}
    canvasHeight={canvasHeight}
    canvasWidth={canvasWidth}
    canvasStyle={canvasStyle}
    type={'img'}
  />
}