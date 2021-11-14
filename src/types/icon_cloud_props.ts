import * as Types from './types'

export interface IconCloudProps extends Omit<Types.CloudProps, 'tags' | 'type'> {
  tags: Types.IconTag[]
  fallbackHexColor?: string,
  backgroundHexColor?: string,
  iconSize?: number,
  minContrastRatio?: number,
}