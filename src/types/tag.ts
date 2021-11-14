import React from "react";

export interface Tag {
  href?: string 
  id?: string | number
  title: string
  imgWidth?: number
  imgHeight?: number
  imgSrc?: string
  onClick?: (tag: Tag) => any
}