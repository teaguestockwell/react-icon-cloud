import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {ReactTagCanvas } from '../.'

const tags = [
  {
    key: 0,
    title: 'hello'
  },
  {
    key: 1,
    title: Date.now().toString()
  }
]

const App = () => {
  return (
    <div>
      <ReactTagCanvas  type={'word'} tags={tags}/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
