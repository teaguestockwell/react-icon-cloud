import React, { useRef } from 'react'
import {useVisible} from 'react-hooks-visible'
import {tagCanvasString} from './tag_canvas_string'
import * as Types from './types/types'

let isTagCanvasScripLoaded = false

export const Cloud = (
  {
    id,
    tagCanvasOptions = {},
    tags = [],
    canvasContainerStyle = {},
    canvasHeight = 1000,
    canvasWidth = 1000,
    canvasStyle = {},
    type = 'img',
  }: Types.CloudProps
  
) => {
  const state = useRef({
    canvasContainerId: 'canvas-container-' + id,
    canvasId: 'canvas-' + id,
    hasStarted: false,
  }).current
  const [ref, visible] = useVisible((vi: number) => vi > 0.3)

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

      const options = {
        dragControl: supportsTouch ? true : false,
        maxSpeed: supportsTouch ? 0.01 : 0.05,
        ...tagCanvasOptions
      }

      try{
        eval(`TagCanvas.Start('${state.canvasId}', null, ${JSON.stringify(options)})`)
        state.hasStarted = true
      } catch (e){
        let el: HTMLElement | null = document.getElementById(state.canvasContainerId)

        if(el){
          el.style.display = 'none'
        }
        
        throw e
      }

      return () => eval(`TagCanvas.Delete('${state.canvasId}')`)

    },[])

    // it will not load canvas animations when its outside the viewport
    React.useEffect(() => {
      if (state.hasStarted) {
        if (visible) {
          eval(`TagCanvas.Resume('${state.canvasId}')`)
        } else {
          eval(`TagCanvas.Pause('${state.canvasId}')`)
        }
      }
    }, [visible, state.hasStarted])

  const getTag = (
    {
      key,
      title,
      href = 'javascript:;', 
      imgWidth = 32,
      imgHeight = 32,
      imgSrc = '',
      onClick = () => {}
  }
    : Types.Tag
  ) => {
    return (
      <a 
        key={key} 
        href={href} 
        title={title}
        onClick={e => {
          e.preventDefault()
          onClick({
            key,
            title,
            href, 
            imgWidth,
            imgHeight,
            imgSrc,
            onClick
          })
        }}
      >
        {
          type === 'img' ?

            <img 
              height={imgHeight}
              width={imgWidth}
              alt="tag" 
              src={imgSrc} 
            />
          :
            title
        }
      </a>
    )
  }

  return (
    <div ref={ref as any}>
      <div
        id={state.canvasContainerId}
        style={canvasContainerStyle}
      >
        <canvas
          id={state.canvasId}
          style={{width: '100%', maxWidth: '70vh', ...canvasStyle}}
          width={canvasWidth}
          height={canvasHeight}
        >
          {tags.map(getTag)}
        </canvas>
      </div>
    </div>
  )
}