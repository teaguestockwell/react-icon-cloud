import React from 'react'
import {tagCanvasString} from './tag_canvas_string'
import { nanoid } from 'nanoid'
import { UseInViewport } from './use_in_viewport'
import {ICloud} from './types/cloud'

let isScriptLoaded = false

const tr = (fn: () => void) => {
  try{
    fn()
  } catch(e){
    if(process.env.NODE_ENV === 'development'){
      console.error(e)
    }
  }
}

const CloudWrapped = (
  {
    options = {},
    containerProps = {},
    canvasProps = {},
    children
  }: ICloud
) => {
  const state = React.useRef({
    canvasContainerId: 'canvas-container-' + nanoid(),
    canvasId: 'canvas-' + nanoid(),
    hasStarted: false,
  }).current

    React.useEffect(() => {
      return () => tr(() => {
        eval(`TagCanvas.Delete('${state.canvasId}')`)
      })
    },[])

    const supportsTouch = typeof window !== 'undefined' ? 'ontouchstart' in window || navigator.maxTouchPoints : false
    const ops = JSON.stringify({
      dragControl: supportsTouch ? true : false,
      maxSpeed: supportsTouch ? 0.01 : 0.05,
      textFont: null,
      textColour: null,
      ...options
    })

    // it will not load canvas animations when its outside the viewport
    const onVisibilityChange = (isVisible: boolean) => tr(() => {
      if(isVisible){

        if(!isScriptLoaded){
          eval(tagCanvasString)
          isScriptLoaded = true
        }

        if(state.hasStarted){
          eval(`TagCanvas.Resume('${state.canvasId}')`)
        } else {
          try{
            eval(`TagCanvas.Start('${state.canvasId}', null, ${ops})`)
            state.hasStarted = true
          } catch (e) {
            const el = document.getElementById(state.canvasContainerId)
            
            if(el){
              el.style.display = 'none' 
            }

            throw e
          }
        }
      } else {
        if(state.hasStarted){
          eval(`TagCanvas.Pause('${state.canvasId}')`)
        }
      }
    })

  return (
    <UseInViewport cb={onVisibilityChange}>
      <div
        id={state.canvasContainerId}
        {...containerProps}
      >
        <canvas
          id={state.canvasId}
          style={{width: '100%', maxWidth: '70vh'}}
          width={1000}
          height={1000}
          {...canvasProps}
        >
          {children}
        </canvas>
      </div>
    </UseInViewport>
  )
}

export const Cloud = (props: ICloud) => {
  return <CloudWrapped {...props} key={nanoid()}/>
}