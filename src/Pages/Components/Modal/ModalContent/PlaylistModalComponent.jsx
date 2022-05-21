import React, { useState, useEffect } from 'react';
import { useModal, usePlaylist } from '../../../../Context';
import './PlaylistModalComponent.css';
const PlaylistModalComponent = () => {
	const { closeModal } = useModal();
	const { playlists, createPlaylist, currentVideo } = usePlaylist();
	const [playlistTitle, setPlaylistTitle] = useState('');

	const creatNewPlaylistHandler = () => {
		playlistTitle.length > 1
			? (createPlaylist({
					playlist: {
						title: playlistTitle,
					},
			  }),
			  currentVideo === null && closeModal(),
			  setPlaylistTitle(''))
			: null;
	};
	return (
		<div className='modal-card flex-column align-items-center space-evenly' onClick={(e) => e.stopPropagation()}>
			{currentVideo !== null && (
				<div className='modal-playlist-container'>
					{playlists?.playlists?.length > 0 &&
						playlists?.playlists.map((singlePlaylist) => {
							return (
								<SinglePlaylistTile
									key={singlePlaylist._id}
									playlistId={singlePlaylist._id}
									title={singlePlaylist.title}
									playlist={singlePlaylist}
								/>
							);
						})}
				</div>
			)}

			<div className='create-playlist-form'>
				<input className='text-field' type='text' value={playlistTitle} onChange={(e) => setPlaylistTitle(e.target.value)} />
				<button onClick={creatNewPlaylistHandler} className='btn btn-primary'>
					Create New Playlist
				</button>
				{playlistTitle.length < 1 && <p>*TextField cannot be empty</p>}
			</div>
		</div>
	);
};

export { PlaylistModalComponent };

const SinglePlaylistTile = ({ playlistId, title, playlist }) => {
	const { currentVideo, postVideoToSinglePlaylist, deleteSingleVideoFromPlaylist } = usePlaylist();
	const addVideoToPlaylistHandler = (vid, playlistId) => {
		postVideoToSinglePlaylist(vid, playlistId);
	};
	const isVideoInPlaylist = playlist.videos.findIndex((vid) => vid._id === currentVideo._id) === -1 ? false : true;

	return (
		<div
			className={`modal-single-playlist-pills ${isVideoInPlaylist ? 'modal-single-playlist-pills-active' : ''}`}
			onClick={() => {
				!isVideoInPlaylist
					? addVideoToPlaylistHandler(currentVideo, playlistId)
					: deleteSingleVideoFromPlaylist(currentVideo._id, playlistId);
			}}
		>
			{title}
		</div>
	);
};
