import React from 'react';
import { Link } from 'react-router-dom';

const SuggestedVideo = ({ data }) => {
	const { thumbnails, description, channelTitle, title, publishedAt } =
		data.snippet;

	return (
		<div className='bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex'>
			<img
				src={thumbnails?.high?.url || thumbnails?.default?.url}
				alt={title}
				className='w-40 object-cover flex-none'
			/>
			<div className='p-4 flex flex-col justify-between'>
				<Link to={`/video/${data.id.videoId}`}>
					<h2 className='text-xl font-bold text-gray-800 mb-2 line-clamp-2'>
						{title}
					</h2>
					<p className='text-sm text-gray-600 mb-4 line-clamp-3'>
						{description}
					</p>
				</Link>
				<div className='flex justify-between items-center text-gray-500 text-xs'>
					<span className='font-medium'>{channelTitle}</span>
					<span>{new Date(publishedAt).toLocaleDateString()}</span>
				</div>
			</div>
		</div>
	);
};

export default SuggestedVideo;
