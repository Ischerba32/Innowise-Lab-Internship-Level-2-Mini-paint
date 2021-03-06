import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AuthRoute from './components/AuthRoute';
import Canvas from './pages/Canvas';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
	return (
		<Router>
			<Routes>
				<Route
					path='/'
					element={
						<AuthRoute>
							<Home />
						</AuthRoute>
					}
				></Route>
				<Route
					path='/draw'
					element={
						<AuthRoute>
							<Canvas />
						</AuthRoute>
					}
				></Route>
				<Route path='/signin' element={<SignIn />}></Route>
				<Route path='/signup' element={<SignUp />}></Route>
			</Routes>
		</Router>
	);
}

export default App;
