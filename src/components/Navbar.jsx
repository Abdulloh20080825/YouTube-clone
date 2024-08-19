import React, { useState } from 'react';
import { logo } from '../constants/logo';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
	const [search, setSearch] = useState('');
	const navigate = useNavigate();
	const serachVideosHandler = async (e) => {
		e.preventDefault();
		navigate(`search/${search}`);
		setSearch('');
	};

	return (
		<div className='fixed top-0 w-full flex justify-between items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg z-50'>
			<div className='cursor-pointer'>
				<Link to={'/'}>
					<img
						src={logo}
						alt='Logo'
						width={150}
						className='hover:opacity-80 transition-opacity duration-200'
					/>
				</Link>
			</div>
			<form className='relative w-1/2' onSubmit={serachVideosHandler}>
				<input
					type='search'
					placeholder='Search videos'
					className='w-full p-3 pl-5 pr-10 rounded-full border-none outline-none font-medium text-lg shadow-inner text-gray-700 transition duration-200'
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
				<button
					type='submit'
					className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700'
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={2}
						stroke='currentColor'
						className='w-6 h-6'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M21 21l-4.35-4.35M17 11A6 6 0 1111 5a6 6 0 016 6z'
						/>
					</svg>
				</button>
			</form>
		</div>
	);
};

export default Navbar;
