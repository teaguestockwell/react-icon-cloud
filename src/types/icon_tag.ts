import { Tag } from "..";
export interface IconTag {
  simpleIcon: any
  id?: string | number
  hexColorOverride?:string
  href?: string
  onClick?: (tag: Tag) => any
}