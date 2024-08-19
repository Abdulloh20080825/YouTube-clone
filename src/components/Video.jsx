import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AiFillLike } from 'react-icons/ai';
import { ApiService } from '../service/api.service';
import moment from 'moment';
import VideoList from './VideoList';
import SuggestedVideo from './SuggestedVideo';

const Video = () => {
	const [video, setVideo] = useState(null);
	const [suggestedVideo, setSuggestedVideo] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		const getVideoData = async () => {
			try {
				const res = await ApiService.fetching(`videos?part=snippet&id=${id}`);
				setVideo(res.data.items[0]);
				const suggectedVideo = await ApiService.fetching(
					`search?part=snippet&relatedToVideoId=${id}&type=video`
				);
				setSuggestedVideo(suggectedVideo.data.items);
				console.log(suggectedVideo);
			} catch (err) {
				setError('Failed to load video data.');
				console.error(err);
			} finally {
				setLoading(false);
			}
		};
		getVideoData();
	}, [id]);

	console.log(video);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>{error}</div>;

	const { channelTitle, description, publishedAt, title } =
		video?.snippet || {};

	const { likeCount, viewCount } = video?.statistics || {};

	return (
		<div className='mt-64 h-full px-10 flex space-x-10'>
			<div className='w-2/3'>
				<iframe
					className='w-full h-[600px] rounded object-cover'
					src={`https://www.youtube.com/embed/${id}`}
					title='YouTube video'
				></iframe>
				<div className='mt-4'>
					<p className='font-bold text-2xl'>{title}</p>
					<div className='flex justify-between items-center'>
						<h2 className='text-lg font-bold'>{channelTitle}</h2>
						<div className='flex items-center space-x-2 text-xl bg-slate-200 py-1 px-3 rounded-xl'>
							<AiFillLike />
							<p>{likeCount}</p>
						</div>
					</div>
					<div className='bg-slate-100 rounded-xl py-2 px-3 mt-5'>
						<p className='text-sm text-gray-600'>
							{moment(publishedAt).format('DD MMM YYYY')}
						</p>
						<p className='text-sm mt-2 tracking-wider'>{description}</p>
					</div>
				</div>
			</div>
			<div className='space-y-5 h-screen overflow-scroll'>
				{suggestedVideo?.map((item, idx) => (
					<SuggestedVideo data={item} key={idx} />
				))}
			</div>
		</div>
	);
};

export default Video;
