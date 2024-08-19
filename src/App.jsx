import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Video from './components/Video';

const App = () => {
	return (
		<>
			<Navbar />
			<Routes>
				<Route index element={<Main />} />
				<Route path='/search/:id' element={<Search />} />
				<Route path='/video/:id' element={<Video />} />
			</Routes>
		</>
	);
};

export default App;
