import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ReactTagCanvas } from '../.';

const App = () => {
  return (
    <div>
      <ReactTagCanvas name={'hello'} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
