import React, { useEffect, useState } from 'react';
import Category from '../components/Category';
import { category } from '../constants/category';
import { ApiService } from '../service/api.service';
import VideoList from '../components/VideoList';

const Main = () => {
	const [selectCategory, setSelectCategory] = useState('New');
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		const getVideoData = async function () {
			const res = await ApiService.fetching(
				`search?part=snippet&q=${selectCategory}`
			);
			setVideos(res.data.items);
		};
		getVideoData();
	}, [selectCategory]);

	return (
		<div className='flex'>
			<div className='overflow-y-auto w-32 sm:w-64 h-screen bg-gray-800 text-white p-4 fixed top-0'>
				<div className='space-y-7 pt-24 '>
					{category.map((item, idx) => (
						<Category
							key={idx}
							data={item}
							setSelectCategory={setSelectCategory}
						/>
					))}
				</div>
			</div>
			<div className='	3ml-32 sm:ml-64 mt-28 p-4 text-black text-2xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
				{videos.map((item, idx) => (
					<VideoList key={idx} data={item} />
				))}
			</div>
		</div>
	);
};

export default Main;
