import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ApiService } from '../service/api.service';
import VideoList from './VideoList';

const Search = () => {
	const [videoData, setVideoData] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		const getSearchVideos = async function () {
			const res = await ApiService.fetching(`search?part=snippet&q=${id}`);
			setVideoData(res.data.items);
			console.log(res.data.items);
		};
		getSearchVideos();
	}, [id]);

	if (!videoData) {
		return (
			<div className='mt-32 text-center text-gray-600'>
				<div>Loading...</div>
			</div>
		);
	}

	return (
		<div className='mt-32 px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
			{videoData.map((item, idx) => (
				<VideoList key={idx} data={item} />
			))}
		</div>
	);
};

export default Search;
