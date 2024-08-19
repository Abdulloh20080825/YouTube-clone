// VideoList.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const VideoList = ({ data }) => {
	const { thumbnails, description, channelTitle, title, publishedAt } =
		data.snippet;

	console.log(data);
	return (
		<div className='bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300'>
			<img
				src={thumbnails?.high?.url || thumbnails?.default?.url}
				alt={title}
				className='w-full h-48 object-cover'
			/>
			<div className='p-4 flex flex-col justify-between'>
				<Link to={`/video/${data.id.videoId}`}>
					<h2 className='text-lg font-semibold text-gray-900 mb-2 line-clamp-2'>
						{title}
					</h2>
					<p className='text-sm text-gray-600 mb-3 line-clamp-2'>
						{description}
					</p>
				</Link>
				<div className='flex justify-between items-center text-gray-500 text-sm'>
					<span>{channelTitle}</span>
					<span>{new Date(publishedAt).toLocaleDateString()}</span>
				</div>
			</div>
		</div>
	);
};

export default VideoList;
