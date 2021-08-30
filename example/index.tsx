import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {ReactTagCanvas, Tag, TagCanvasOptions } from '../.'
import {v4} from 'uuid'

const App = () => {
  const [state, setState] = React.useState(true)

  const supportsTouch =  'ontouchstart' in window || navigator.maxTouchPoints

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
    dragControl: supportsTouch ? true : false,
    maxSpeed: supportsTouch ? 0.01 : 0.05,
  }

  const tags1: Tag[] = [
    {
      key: 0,
      title: 'Hello',
    },
    {
      key: 1,
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
    dragControl: supportsTouch ? true : false,
    maxSpeed: supportsTouch ? 0.01 : 0.05,
  }


  const tags2: Tag[] = [
    {
      key: 0,
      title: 'Hello',
      imgSrc: 'https://openmoji.org/data/color/svg/1F44B.svg',
      imgWidth: 50,
      imgHeight: 50,
    },
    {
      key: 1,
      title: 'World',
      imgSrc: 'https://openmoji.org/data/color/svg/1F30D.svg',
      imgWidth: 50,
      imgHeight: 50,
    }
  ]
  return (
    <div>
      <ReactTagCanvas type={'word'} tags={tags1} key={v4()} tagCanvasOptions={options1}/>
      <ReactTagCanvas type={'img'} tags={tags2} key={v4()} tagCanvasOptions={options2}/>
      <button onClick={() => setState(!state)}>toggle</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
