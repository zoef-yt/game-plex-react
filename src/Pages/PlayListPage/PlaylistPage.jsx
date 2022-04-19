import './PlaylistPage.css';
import { VideoCard } from '../VideoListingPage/components/VideoCard';
import { usePlaylist } from '../../Context';
import { useState } from 'react';
import { ExpandLessIcon, ExpandMoreIcon } from '../../Assets/svg/AllSVG';

const PlaylistPage = () => {
	const { playlist } = usePlaylist();
	return (
		<div className='app-main-content'>
			<h1 className='text-align-center'>Playlists</h1>
			{playlist && playlist.length < 1 ? (
				<h3 className='text-align-center'>No playlist to show</h3>
			) : (
				<div className='video-listing-section'>
					{playlist.map((singlePlaylist) => {
						const { _id, videos, name } = singlePlaylist;
						return <SinglePlaylist key={_id} videos={videos} name={name} />;
					})}
				</div>
			)}
		</div>
	);
};

export { PlaylistPage };

const SinglePlaylist = ({ videos, name }) => {
	const [playlistToggle, setPlaylistToggle] = useState(true);
	return (
		<div className='width-100 single-playlist'>
			<h3
				className='playlist-heading'
				onClick={() => {
					setPlaylistToggle((prev) => !prev);
				}}
			>
				{name}({videos.length}) <span>{playlistToggle ? <ExpandMoreIcon /> : <ExpandLessIcon />}</span>
			</h3>
			<hr />
			<div className={`video-listing-section width-100 ${playlistToggle ? 'videos-hidden' : 'videos-show'}`}>
				{videos.map((video, index) => (
					<VideoCard key={video._id} video={video} playListClass={'video-card-in-playlist'} index={index} />
				))}
			</div>
		</div>
	);
};
