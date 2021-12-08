import React from 'react'
import {hex2contrast, hex2rgb} from '@csstools/convert-colors'
import { guid } from '../utils/guid'

export const renderSimpleIcon = (
  {
    icon,
    bgHex = '#fff',
    minContrastRatio = 1,
    fallbackHex = '#000',
    aProps = {},
    imgProps = {},
    size = 42,
  }: 
  {
    icon:any,
    bgHex?:string
    minContrastRatio?:number
    fallbackHex?:string
    aProps?:  React.DetailedHTMLProps<React.AllHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
    imgProps?: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>
    size?:number
  }
  ) => {
    const addHash = (color:string) => color[0] === '#' ? color : `#${color}`
    const originalHex =  addHash(icon.hex)
    const bgHexHash = addHash(bgHex)
    const fallbackHexHash = addHash(fallbackHex)
    const isAccessibleColor = hex2contrast(bgHexHash, originalHex) > minContrastRatio
    const rgb = isAccessibleColor ? hex2rgb(originalHex) : hex2rgb(fallbackHexHash)
    const [r,g,b] = rgb.map((percent: number) => Math.round((percent / 100) * 255)) 
    const imgSrc = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" style="fill: rgb(${r}, ${g}, ${b});" viewBox="0 0 24 24" height="${size}px" width="${size}px"> <title>${icon.title}</title> <path d="${icon.path}"></path> </svg>`

    const a = {
      key: guid(),
      title: icon.title,
      style: {cursor: 'pointer'},
      ...aProps,
    }

    const i = {
      height: size,
      width: size,
      alt: icon.title,
      src: imgSrc,
      ...imgProps,
    }

    return <a {...a}>
      <img {...i}/>
    </a>
}