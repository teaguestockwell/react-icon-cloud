import React from 'react';
import { IOptions } from './options'

export type ICloud = {
  children: React.ReactFragment,
  options?: IOptions
  containerProps?: React.HTMLAttributes<HTMLDivElement>
  canvasProps?: React.HTMLAttributes<HTMLCanvasElement>
}