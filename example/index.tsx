import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {IconTag, Cloud, IconCloud, Tag, TagCanvasOptions } from '../.'
import allIcons from 'simple-icons'

// https://raw.githubusercontent.com/simple-icons/simple-icons/develop/_data/simple-icons.json
const iconSlugs = [
  'typescript',
  'javascript',
  'dart',
  'java',
  'react',
  'flutter',
  'android',
  'html5',
  'css3',
  'nodedotjs',
  'express',
  'nextdotjs',
  'prisma',
  'amazonaws',
  'postgresql',
  'firebase',
  'nginx',
  'vercel',
  'testinglibrary',
  'jest',
  'cypress',
  'docker',
  'git',
  'jira',
  'github',
  'gitlab',
  'visualstudiocode',
  'androidstudio',
  'sonarqube',
  'figma',
]


const iconTags: IconTag[] = iconSlugs.map(slug => ({
  id: slug,
  simpleIcon: allIcons.Get(slug),
}))

const wordTags: Tag[] = [
  {
    id: 0,
    title: 'Hello',
  },
  {
    id: 1,
    title: 'World',
  }
]

const imgTags: Tag[] = [
  {
    id: 0,
    title: 'Hello',
    imgSrc: 'https://openmoji.org/data/color/svg/1F44B.svg',
    imgWidth: 50,
    imgHeight: 50,
    onClick: () => alert('hello')
  },
  {
    id: 1,
    title: 'World',
    imgSrc: 'https://openmoji.org/data/color/svg/1F30D.svg',
    imgWidth: 50,
    imgHeight: 50,
  }
]


const canvasContainerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  paddingTop: 40,
}

export default function App() {
  const [background, setBackground] = React.useState<string>('#fff')

  const toggleBg = () => {
    if(background === '#fff'){
      setBackground('#000')
      return
    } 

    setBackground('#fff')
  }
  
  // https://www.goat1000.com/tagcanvas-options.php
  const tagCanvasOptions: TagCanvasOptions = {
    // activateAudio: string
    // activeCursor: string 
    // altImage: boolean
    // animTiming: 'Smooth' | 'Linear'
    // audioIcon: boolean
    // audioIconDark: boolean
    // audioIconSize: number
    // audioIconThickness: number
    // audioVolume: number
    // bgColor: null | string
    // bgOutlineThickness: number
    // bgRadius: number
    // centreFunc: any
    // centreImage: any
    clickToFront: 500,
    // decel: number
     depth: 1,
    // dragControl: boolean
    // dragThreshold: number
    // fadeIn: number
    // freezeActive: boolean
    // freezeDecel: boolean
    // frontSelect: boolean
    // hideTags: boolean
    // imageAlign: 'centre' | 'left' | 'right'
    // imageMode: null | 'image' | 'text' | 'both'
    // imagePadding: number
    // imagePosition: 'top' | 'bottom' | 'left' | 'right'
    // imageRadius: number | string
    imageScale: 2,
    // imageVAlign: 'top' | 'bottom' | 'middle'
    initial: [0.1, -0.1],
    // interval: number
    // lock: null | 'x' | 'y' | 'xy'
    // maxBrightness: number
    // maxSpeed: number
    // minBrightness: number
    // minSpeed: number
    // minTags: 0 - 200
    // noMouse: boolean
    // noSelect: boolean
    // noTagsMessage: string
    // offsetX: number
    // offsetY: number
    outlineColour: '#0000',
    // outlineDash: number
    // outlineDashSpace: number
    // outlineIncrease: number
    // outlineMethod: 'outline' | 'classic' | 'block' | 'colour' | 'size' | 'none'
    // outlineOffset: number
    // outlineRadius: number
    // outlineThickness: number
    // padding: number
    // pinchZoom: boolean
    // pulsateTime: number
    // pulstateTo: number
    // radiusX: number
    // radiusY: number
    // radiusZ: number
    // repeatTagsTags: 0 - 64
     reverse: true,
    // scrollPause: boolean
    // shadow: string
    // shadowBlur: number
    // shadowOffset: [number,number] | number[]
    // shape: 'sphere' | 'hcylinder' | 'vcylinder' | 'hring' | 'vring'
    // shuffleTags: boolean
    // splitWidth: number
    // stretchX: number
    // stretchY: number
    // textAlign: 'centre' | 'left' | 'right'
    // textColour: string
    // textFont: string
    // textHeight: number
    // textVAlign: 'top' | 'bottom' | 'middle'
    tooltip: 'native', // null | 'div'
    // tooltipClass: string
    tooltipDelay: 0,
    // txtOpt: boolean
    // txtScale: number
    // weight: boolean
    // weightFrom: any
    // weightGradient: any
    // weightMode: 'size' | 'colour' | 'both' | 'bgcolour' | 'bgoutline' | 'outline'
    // weightSize: number
    // weightSizeMax: number | null
    // weightSizeMin: number | null
    wheelZoom: false,
    // zoom: number
    // zoomMax: number
    // zoomMin: number
    // zoomStep: number
  }

  return <div
    style={{
      background,
      top: 0,
      left: 0,
      right: 0,
      height: '200vh',
      position: 'absolute',
    }}
    >

    <button onClick={toggleBg}>Toggle Theme</button>

    <IconCloud
      iconSize={42}
      minContrastRatio={background === '#fff' ? 1.2 : 2}
      canvasStyle={{}}
      canvasContainerStyle={canvasContainerStyle}
      tagCanvasOptions={tagCanvasOptions}
      backgroundHexColor={background}
      fallbackHexColor={background === '#fff' ? '#000' : '#fff'}
      tags={iconTags}
    />

    <Cloud 
      type={'word'} 
      tags={wordTags} 
      tagCanvasOptions={tagCanvasOptions}
    />

     <Cloud 
      type={'img'} 
      tags={imgTags} 
      tagCanvasOptions={tagCanvasOptions}
    />

  </div>
}

ReactDOM.render(<App />, document.getElementById('root'));
