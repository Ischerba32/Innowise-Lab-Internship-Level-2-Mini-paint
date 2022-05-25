import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/globals.scss';
import 'react-toastify/dist/ReactToastify.min.css';

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root') as HTMLElement
);
