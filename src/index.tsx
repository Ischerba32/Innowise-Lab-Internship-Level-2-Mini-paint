import './styles/globals.scss';
import './components/UI/CustomSelect/customSelect.scss';
import 'react-toastify/dist/ReactToastify.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import store from './redux/store';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root') as HTMLElement
);
