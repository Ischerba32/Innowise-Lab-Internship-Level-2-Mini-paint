import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/globals.scss';
import './components/Select/customSelect.scss';
import 'react-toastify/dist/ReactToastify.min.css';
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root') as HTMLElement
);
