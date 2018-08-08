import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

alert(process.env.REACT_APP_SECRET_API)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
