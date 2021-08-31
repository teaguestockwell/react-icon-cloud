import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {IconTag, Cloud, IconCloud, Tag, TagCanvasOptions } from '../.'
import {v4} from 'uuid'

const App = () => {
  const [state, setState] = React.useState(true)

  const options1: TagCanvasOptions = {
    textColour: state ? 'black' : 'blue',
    outlineColour: '#0000',
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: 'default',
    tooltip: 'native',
    initial: [0.1,-0.1] as any,
    clickToFront: 500,
    tooltipDelay: 0,
  }

  const tags1: Tag[] = [
    {
      id: 0,
      title: 'Hello',
    },
    {
      id: 1,
      title: 'World',
    }
  ]

  const options2: TagCanvasOptions = {
    textColour: state ? 'blue' : 'black',
    outlineColour: '#0000',
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: 'default',
    tooltip: 'native',
    initial: [0.1,-0.1] as any,
    clickToFront: 500,
    tooltipDelay: 0,
  }


  const tags2: Tag[] = [
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

  const tags3: IconTag[] = [
    {
      id: 0,
      simpleIconSlug: 'react'
    },
    {
      id: 1,
      simpleIconSlug: 'nodedotjs'
    },
    {
      id: 2,
      simpleIconSlug: 'typescript'
    },
    {
      id: 3,
      simpleIconSlug: 'javascript'
    },
  ]
  return (
    <div>
      <Cloud id={'word'} type={'word'} tags={tags1} key={v4()} tagCanvasOptions={options1}/>
      <Cloud id={'img'} type={'img'} tags={tags2} key={v4()} tagCanvasOptions={options2}/>
      <IconCloud id={'icon'} minContrastRatio={1} iconSize={50} backgroundHexColor={'#fff'} fallbackHexColor={'#000'} tags={tags3} key={v4()} tagCanvasOptions={options1}/>
      <button onClick={() => setState(!state)}>toggle</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
