import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
//import Counter from './component/counter';
import Counters from './component/counters';

ReactDOM.render(<Counters />, document.getElementById('root'));

serviceWorker.unregister();
