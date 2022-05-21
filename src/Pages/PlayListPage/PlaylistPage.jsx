import './PlaylistPage.css';
import { VideoCard } from '../VideoListingPage/components/VideoCard';
import { useAuth, useModal, usePlaylist } from '../../Context';
import { useState, useEffect } from 'react';
import { AddToPlaylistIcon, DeleteIcon, ExpandLessIcon, ExpandMoreIcon } from '../../Assets/svg/AllSVG';
import { useNavigate } from 'react-router-dom';

const PlaylistPage = () => {
	const { user } = useAuth();
	const { openModal } = useModal();

	const { playlists, removeCurrentVideo } = usePlaylist();
	const createNewPlaylistHandler = () => {
		removeCurrentVideo();
		user ? openModal('PlaylistModal') : openModal('AuthModal');
	};

	return (
		<div className='app-main-content'>
			<h1 className='text-align-center'>Playlists</h1>
			{playlists.playlists === null || playlists.playlists.length < 1 ? (
				<h3 className='text-align-center'>No playlist to show</h3>
			) : (
				<div className='video-listing-section'>
					{playlists?.playlists.map((singlePlaylist) => {
						const { _id, videos, title } = singlePlaylist;
						return <SinglePlaylist key={_id} id={_id} videos={videos} name={title} />;
					})}
				</div>
			)}
			<button onClick={createNewPlaylistHandler} className='btn-fab'>
				<AddToPlaylistIcon />
				<p> Add Playlist</p>
			</button>
		</div>
	);
};

export { PlaylistPage };

const SinglePlaylist = ({ videos, name, id }) => {
	const [playlistToggle, setPlaylistToggle] = useState(true);
	const navigate = useNavigate();
	const { deleteSinglePlaylist, deleteSingleVideoFromPlaylist } = usePlaylist();

	return (
		<>
			<div className='width-100 single-playlist'>
				<div className='playlist-heading'>
					<span
						onClick={() => {
							setPlaylistToggle((prev) => !prev);
						}}
					>
						{name}({videos.length}) <span>{playlistToggle ? <ExpandMoreIcon /> : <ExpandLessIcon />}</span>
					</span>
					<DeleteIcon className='playlist-delete-icon' onClick={() => deleteSinglePlaylist(id)} />
				</div>
				<hr />
				<div className={`video-listing-section width-100 ${playlistToggle ? 'videos-hidden' : 'videos-show'}`}>
					{videos.length > 0 ? (
						videos.map((video, index) => (
							<VideoCard
								key={video._id}
								video={video}
								playListClass={'video-card-in-playlist'}
								index={index}
								canDelete={true}
								deleteOnClick={() => deleteSingleVideoFromPlaylist(video._id, id)}
							/>
						))
					) : (
						<h3 className='text-align-center'>
							Add some videos to playlist.
							<span className='btn-link' onClick={() => navigate('/videos')}>
								Videos
							</span>
						</h3>
					)}
				</div>
			</div>
		</>
	);
};
