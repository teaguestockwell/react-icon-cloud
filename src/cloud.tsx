import React from 'react'
import {tagCanvasString} from './tag_canvas_string'
import * as Types from './types/types'
import { nanoid } from 'nanoid'
import { UseInViewport } from './use_in_viewport'

let isTagCanvasScripLoaded = false

const CloudWrapped = (
  {
    tagCanvasOptions = {},
    tags = [],
    canvasContainerStyle = {},
    canvasHeight = 1000,
    canvasWidth = 1000,
    canvasStyle = {},
    type = 'img',
  }: Types.CloudProps
  
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

  const getTag = (
    {
      id = nanoid(),
      title,
      href, 
      imgWidth = 32,
      imgHeight = 32,
      imgSrc = '',
      onClick = () => {}
  }
    : Types.Tag
  ) => {
    return (
      <a 
        key={id} 
        href={href} 
        title={title}
        target={href ? '_blank' : undefined}
        rel={href ? 'noopener' : undefined}
        onClick={e => {
          if(!href){ 
            e.preventDefault()
          }
          onClick({
            id,
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
    <UseInViewport cb={onVisibilityChange}>
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
    </UseInViewport>
  )
}

export const Cloud = (props: Types.CloudProps) => {
  return <CloudWrapped {...props} key={nanoid()}/>
}