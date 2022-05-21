import { useEffect, useState, useRef } from 'react';
import './SingleVideoPage.css';
import { useVideo } from '../../Context';
import { VideoCard } from '../VideoListingPage/components/VideoCard';
const SuggestedVideos = ({ videoURLId, randomlySortedVideos }) => {
	const { videos } = useVideo();
	const scrollBar = useRef();
	const [suggestedVideo, setSuggestedVideo] = useState([]);
	const [scrollPos, setScrollPos] = useState({ positionRightNow: 0, heightRemaining: 600 });
	const VIDEOLIMIT = 5;

	const scrollHandler = (e) => {
		const target = e.target;
		setScrollPos({ positionRightNow: target.scrollTop, heightRemaining: target.scrollHeight - target.clientHeight });
	};

	useEffect(() => {
		scrollBar.current.scrollTop = 0;
		const newMustWatchVideos = videos.slice(0, VIDEOLIMIT);
		setSuggestedVideo(newMustWatchVideos.filter((video) => video._id !== videoURLId));
		setScrollPos((prev) => ({ ...prev, positionRightNow: 0 }));
	}, [videoURLId, videos]);

	useEffect(() => {
		if (videos.length - 1 > suggestedVideo.length && scrollPos.positionRightNow > scrollPos.heightRemaining - 200) {
			const newData = [...videos].slice(suggestedVideo.length + 1, suggestedVideo.length + 1 + VIDEOLIMIT);
			setSuggestedVideo((prev) => [...prev, ...newData]);
		}
	}, [scrollPos]);

	return (
		<div onScroll={scrollHandler} ref={scrollBar} className='suggestion-section'>
			{suggestedVideo.map((video, index) => {
				return <VideoCard key={video._id} video={video} index={index} />;
			})}
		</div>
	);
};
export { SuggestedVideos };
