import React from 'react'
import {useVisible} from 'react-hooks-visible'
import {tagCanvasString} from './tagCanvasString'
import * as Types from './types/types'

export const ReactTagCanvas = (
  {
    tagCanvasOptions = {},
    tags = [],
    innerStyle = {},
    canvasHeight = 1000,
    canvasWidth = 1000,
    canvasStyle = {},
    type = 'img',
  }:
  {
    tagCanvasOptions?: Partial<Types.TagCanvasOptions>
    /** given the type is img, then tags should be img srcs */
    type?: 'img' | 'word'
    tags: Types.Tag[]
    innerStyle?: React.CSSProperties
    canvasWidth?: number
    canvasHeight?: number
    canvasStyle?: React.CSSProperties
  }
) => {
  const [ref, visible] = useVisible((vi: number) => vi > 0.3)
  
  const hasStarted = React.useRef({started: false}).current

  const supportsTouch = 'ontouchstart' in window || navigator.maxTouchPoints

  const tcOptions: Types.TagCanvasOptions = {
      textColour: '#0000',
      outlineColour: '#0000',
      reverse: true,
      depth: 1,
      wheelZoom: false,
      imageScale: 2,
      activeCursor: 'default',
      tooltip: 'native',
      initial: [0.1,-0.1],
      clickToFront: 500,
      tooltipDelay: 0,
      dragControl: supportsTouch ? true : false,
      maxSpeed: supportsTouch ? 0.01 : 0.05,
      ...tagCanvasOptions as any
    }

  
    React.useEffect(() => {
      eval(tagCanvasString)

      const optionString = JSON.stringify(tcOptions)

      eval(
        `
        console.log('starting tag canvas')
          try {
            TagCanvas.Start('myCanvas','tags')
          } catch(e) {
            document.getElementById('myCanvasContainer').style.display = 'none';
          } 
        `
      )
      hasStarted.started = true
    },[])

    // given the canvas is loaded, when it is not visible, then stop the canvas
    // given the canvas is loaded, when it is visible, then start the canvas
    React.useEffect(() => {
      if (hasStarted.started) {
        if (visible) {
          eval(`TagCanvas.Resume("myCanvas")`)
        } else {
          eval(`TagCanvas.Pause("myCanvas")`)
        }
      }
    }, [visible, hasStarted])

  const getTag = (
    {
      key,
      title,
      href = 'javascript:;', 
      imgWidth = 32,
      imgHeight = 32,
      imgSrc = ''
  }
    : Types.Tag
  ) => {
    return (
      <a 
        key={key} 
        href={href} 
        title={title}
        style={{color: 'black'}}
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
    <>
    <div ref={ref as any}>
      <div
        id="myCanvasContainer"
        style={innerStyle}
      >
        <canvas
          id="myCanvas"
          style={{width: '100%', maxWidth: '70vh', ...canvasStyle}}
          width={canvasWidth}
          height={canvasHeight}
        />
      </div>
    </div>

    <div 
      id="tags" 
      style={{
        fontSize: '70%', 
        display: 'none'
      }}
    >
      {tags.map(getTag)}
    </div>
    <h2>{Date.now()}</h2>
  </>
  )
}