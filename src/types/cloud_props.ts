import * as Types from './types'

export interface CloudProps {
  tagCanvasOptions: Types.TagCanvasOptions
  type?: 'img' | 'word'
  tags: Types.Tag[]
  innerStyle?: React.CSSProperties
  canvasWidth?: number
  canvasHeight?: number
  canvasStyle?: React.CSSProperties
}