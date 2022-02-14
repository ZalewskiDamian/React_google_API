import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './global.css';
import { ResultContextProvider} from './contexts/ResultContextProvider';

ReactDOM.render(
<ResultContextProvider>
    <App />
</ResultContextProvider>, 
document.getElementById('root'));