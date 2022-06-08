import React from 'react'
import {hex2contrast, hex2rgb} from '@csstools/convert-colors'
import {guid} from '../utils/guid'
import {addHash} from '../utils/add_hash'

/**
 * Used to create a tag for the Cloud component
 * @param options.aProps Attributes passed to the underlying anchor element
 * @param options.bgHex The string hex of the background the icon will be rendered on. Ex: '#fff'. Used to determine if the min contrast ratio for the icons default color will be met
 * @param options.fallbackHex The color of the icon if the minContrastRatio is not met Ex: '#000'
 * @param options.icon The simple icon object you would like to render. Ex: import icon from "simple-icons/icons/javascript";
 * @param options.imgProps Attributes passes to the underlying img element
 * @param options.minContrastRatio 0 - 21 The min contrast ratio between icon and bgHex before the fallbackHex will be used for the icon color
 * @param options.size The size in px of the icon
 * @returns A component that can be rendered as a tag inside the Cloud component
 */
export const renderSimpleIcon = ({
  aProps = {},
  bgHex = '#fff',
  fallbackHex = '#000',
  icon,
  imgProps = {},
  minContrastRatio = 1,
  size = 42,
}: {
  aProps?: React.DetailedHTMLProps<
    React.AllHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >
  bgHex?: string
  fallbackHex?: string
  icon: any
  imgProps?: React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >
  minContrastRatio?: number
  size?: number
}) => {
  const originalHex = addHash(icon.hex)
  const bgHexHash = addHash(bgHex)
  const fallbackHexHash = addHash(fallbackHex)
  const isAccessibleColor =
    hex2contrast(bgHexHash, originalHex) > minContrastRatio
  const rgb = isAccessibleColor
    ? hex2rgb(originalHex)
    : hex2rgb(fallbackHexHash)
  const [r, g, b] = rgb.map((percent: number) =>
    Math.round((percent / 100) * 255)
  )
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

  return (
    <a {...a}>
      <img {...i} />
    </a>
  )
}
