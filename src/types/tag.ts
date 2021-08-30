export interface Tag {
  href?: string 
  key: string | number
  title: string
  imgWidth?: number
  imgHeight?: number
  imgSrc?: string
  onClick?: (tag: Tag) => any
}