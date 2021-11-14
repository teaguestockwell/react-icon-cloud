import React from 'react';
import { IOptions } from './options'

export type ICloud = {
  // an id should be provided when the cloud is server side rendered then hydrated on the client
  id?: string | number,
  children: React.ReactFragment,
  options?: IOptions
  containerProps?: React.HTMLAttributes<HTMLDivElement>
  canvasProps?: React.HTMLAttributes<HTMLCanvasElement>
}