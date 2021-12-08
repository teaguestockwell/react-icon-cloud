import React from 'react'
import {tagCanvasString} from '../lib/tag_canvas_string'
import { guid } from '../utils/guid'
import { UseInViewport } from '../utils/use_in_viewport'
import {ICloud} from '../types/cloud'

let isScriptLoaded = false

const tr = (fn: () => void) => {
  try{
    fn()
  } catch(e){
    try{
      fn()
    } catch(e){
    }
  }
}

const CloudWrapped = (
  {
    options = {},
    containerProps = {},
    canvasProps = {},
    children,
    id = guid(),
  }: ICloud
) => {
  const state = React.useRef({
    canvasContainerId: 'canvas-container-' + id,
    canvasId: 'canvas-' + id,
    hasStarted: false,
  }).current
  const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
      setMounted(true)
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
      if(isVisible && mounted){

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
  return <CloudWrapped {...props} key={guid()}/>
}