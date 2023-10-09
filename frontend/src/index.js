import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Layout from './pages/Layout';
import NoPage from './pages/NoPage';
import Create from './pages/Create';

import './styles/index.css';

export default function App() {
  return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout />} >
				  <Route index element={<Home />} />
				  <Route path='/create' element={<Create />} />
				  <Route path='*' element={<NoPage />} />
        </Route>
			</Routes>
		</BrowserRouter>
	);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
