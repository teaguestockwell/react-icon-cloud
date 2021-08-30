import * as Types from './types'

export interface IconTag {
  simpleIconSlug:string
  hexColorOverride?:string
}

export interface IconTagCanvasProps extends Omit<Types.ReactTagCanvasProps, 'tags' | 'type'> {
  tags: IconTag[]
  fallbackHexColor: string,
  backgroundHexColor: string,
  size: number,
  minContrast: number,
}