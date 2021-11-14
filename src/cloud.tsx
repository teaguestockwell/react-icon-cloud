import React from 'react'
import {tagCanvasString} from './tag_canvas_string'
import { nanoid } from 'nanoid'
import { UseInViewport } from './use_in_viewport'
import {ICloud} from './types/cloud'

let isTagCanvasScripLoaded = false

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
       // load global instance of tag canvas script
       if(!isTagCanvasScripLoaded){
        eval(tagCanvasString)
        isTagCanvasScripLoaded = true
      }
    },[])

    // start the local instance of tag canvas
    React.useEffect(() => {
      const supportsTouch = 'ontouchstart' in window || navigator.maxTouchPoints

      const ops = {
        dragControl: supportsTouch ? true : false,
        maxSpeed: supportsTouch ? 0.01 : 0.05,
        textFont: null,
        textColour: null,
        ...options
      }

      try{
        eval(`TagCanvas.Start('${state.canvasId}', null, ${JSON.stringify(ops)})`)
        state.hasStarted = true
      } catch (e){
        let el: HTMLElement | null = document.getElementById(state.canvasContainerId)

        if(el){
          el.style.display = 'none'
        }
      }

      return () => eval(`TagCanvas.Delete('${state.canvasId}')`)

    },[])

    // it will not load canvas animations when its outside the viewport
    const onVisibilityChange = (isVisible: boolean) => {
      if (state.hasStarted) {
        if (isVisible) {
          eval(`TagCanvas.Resume('${state.canvasId}')`)
        } else {
          eval(`TagCanvas.Pause('${state.canvasId}')`)
        }
      }
    }

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