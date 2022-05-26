import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthRoute from './components/AuthRoute';
import Draw from './components/Draw';
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

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
							<Draw />
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
