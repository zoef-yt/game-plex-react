const VideoPlayer = (props) => {
	return (
		<div className='video-player'>
			<iframe
				src={`https://www.youtube.com/embed/${props.id}?&autoplay=1`}
				frameBorder='0'
				allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
				allowFullScreen
			></iframe>
		</div>
	);
};
export { VideoPlayer };
