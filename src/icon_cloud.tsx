import * as Types from './types/types'
import { Cloud} from './cloud'
import React from 'react'
import {hex2contrast, hex2rgb} from '@csstools/convert-colors'

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
  
  const addHash = (color:string) => color[0] === '#' ? color : `#${color}`
  const icon = t.simpleIcon
  const originalHex =  addHash(icon.hex)
  const bgHex = addHash(bgColor)
  const isAccessibleColor = hex2contrast(bgHex, originalHex) > minContrast
  const rgb = isAccessibleColor ? hex2rgb(originalHex) : hex2rgb(fallbackColor)
  const [r,g,b] = rgb.map((percent: number) => Math.round((percent / 100) * 255)) 
  const imgSrc = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" style="fill: rgb(${r}, ${g}, ${b});" viewBox="0 0 24 24" height="${size}px" width="${size}px"> <title>${icon.title}</title> <path d="${icon.path}"></path> </svg>`

  return {
    id: t.id,
    title: icon.title,
    imgWidth: size,
    imgHeight: size,
    imgSrc,
    onClick: () =>{}
  }
})

export const IconCloud = (
  {
    id,
    tagCanvasOptions = {},
    tags = [],
    canvasContainerStyle: innerStyle = {},
    canvasHeight = 1000,
    canvasWidth = 1000,
    canvasStyle = {},
    fallbackHexColor,
    backgroundHexColor,
    iconSize: size,
    minContrastRatio: minContrast = 1
  }: Types.IconCloudProps
  
) => {

  const tags2 = getTags({
    tags,
    bgColor: backgroundHexColor,
    size,
    fallbackColor: fallbackHexColor,
    minContrast
  })

  return <Cloud
    id={id}
    tagCanvasOptions={tagCanvasOptions}
    tags={tags2}
    canvasContainerStyle={innerStyle}
    canvasHeight={canvasHeight}
    canvasWidth={canvasWidth}
    canvasStyle={canvasStyle}
    type={'img'}
  />
}