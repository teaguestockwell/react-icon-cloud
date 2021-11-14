import * as Types from './types/types'
import { Cloud} from './cloud'
import React from 'react'
import {hex2contrast, hex2rgb} from '@csstools/convert-colors'

export const getTags = (
  {
    tags,
    backgroundHexColor,
    iconSize,
    fallbackHexColor,
    minContrastRatio
  }:
  {
    tags: Types.IconTag[]
    backgroundHexColor: string
    iconSize: number
    fallbackHexColor: string
    minContrastRatio: number
  }
): Types.Tag[] => tags.map(t => {
  const addHash = (color:string) => color[0] === '#' ? color : `#${color}`
  const icon = t.simpleIcon
  const originalHex =  addHash(icon.hex)
  const bgHex = addHash(backgroundHexColor)
  const isAccessibleColor = hex2contrast(bgHex, originalHex) > minContrastRatio
  const rgb = isAccessibleColor ? hex2rgb(originalHex) : hex2rgb(fallbackHexColor)
  const [r,g,b] = rgb.map((percent: number) => Math.round((percent / 100) * 255)) 
  const imgSrc = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" style="fill: rgb(${r}, ${g}, ${b});" viewBox="0 0 24 24" height="${iconSize}px" width="${iconSize}px"> <title>${icon.title}</title> <path d="${icon.path}"></path> </svg>`

  const tag:Types.Tag  = {
    id: t.id,
    title: icon.title,
    imgWidth: iconSize,
    imgHeight: iconSize,
    imgSrc,
    onClick: t.onClick,
    href: t.href ?? t.simpleIcon.source
  }
  
  return tag
})

export const IconCloud = (
  {
    tagCanvasOptions = {},
    tags = [],
    canvasContainerStyle: innerStyle = {},
    canvasHeight = 1000,
    canvasWidth = 1000,
    canvasStyle = {},
    fallbackHexColor = '#fff',
    backgroundHexColor = '#000',
    iconSize = 42,
    minContrastRatio = 1
  }: Types.IconCloudProps
  
) => {

  const tags2 = getTags({
    tags,
    backgroundHexColor,
    iconSize,
    fallbackHexColor,
    minContrastRatio
  })

  return <Cloud
    tagCanvasOptions={tagCanvasOptions}
    tags={tags2}
    canvasContainerStyle={innerStyle}
    canvasHeight={canvasHeight}
    canvasWidth={canvasWidth}
    canvasStyle={canvasStyle}
    type={'img'}
  />
}