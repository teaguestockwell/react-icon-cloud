import React, { useRef } from 'react'
import {useVisible} from 'react-hooks-visible'
import {tagCanvasString} from './tag_canvas_string'
import * as Types from './types/types'
import {v4} from 'uuid'

let isTagCanvasScripLoaded = false

export const Cloud = (
  {
    tagCanvasOptions = {},
    tags = [],
    innerStyle = {},
    canvasHeight = 1000,
    canvasWidth = 1000,
    canvasStyle = {},
    type = 'img',
  }: Types.CloudProps
  
) => {
  const state = useRef({
    canvasContainerId: 'canvas-container-' + v4(),
    canvasId: 'canvas-' + v4(),
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
      try{
        eval(`TagCanvas.Start('${state.canvasId}', null, ${JSON.stringify(tagCanvasOptions)})`)
        state.hasStarted = true
      } catch (e){
        (document.getElementById(state.canvasContainerId) as any).style.display = 'none'
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
        style={innerStyle}
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