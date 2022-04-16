import React from 'react';
import './Home.css';
function Home() {
	return (
		<div className='app-main-content home-body'>
			{/* //!TODO THE IFRAME WILL BE EXTRACTED AND WILL BE USED AS AND COMPONENT IN THE NEXT PR */}
			<iframe
				className='home-iframe'
				src='https://www.youtube.com/embed/CPhsVcNBKJ0?playlist=CPhsVcNBKJ0&autoplay=1&loop=1&showinfo=0&rel=0'
				title='Test Video'
				frameBorder='0'
				allow='accelerometer; autoplay; clipboard-write; gyroscope; picture-in-picture'
				allowFullScreen
			></iframe>

			<section className='home-category-section'>
				<h1>All Categories</h1>
				<hr />
				<div className='categories-listing'>
					<div className='category-card'>
						<h3>Gameplay's</h3>
						<img src='https://cdn1.epicgames.com/offer/cbd5b3d310a54b12bf3fe8c41994174f/EGS_VALORANT_RiotGames_S1_2560x1440-160cacc798ef1693cc0a339e869f1761'></img>
						<button className='btn btn-primary'>Watch Now!</button>
					</div>
					<div className='category-card'>
						<h3>Vlogs</h3>
						<img src='https://cdn1.epicgames.com/offer/cbd5b3d310a54b12bf3fe8c41994174f/EGS_VALORANT_RiotGames_S1_2560x1440-160cacc798ef1693cc0a339e869f1761'></img>
						<button className='btn btn-primary'>Watch Now!</button>
					</div>
					<div className='category-card'>
						<h3>FPS</h3>
						<img src='https://cdn1.epicgames.com/offer/cbd5b3d310a54b12bf3fe8c41994174f/EGS_VALORANT_RiotGames_S1_2560x1440-160cacc798ef1693cc0a339e869f1761'></img>
						<button className='btn btn-primary'>Watch Now!</button>
					</div>
					<div className='category-card'>
						<h3>Storyline</h3>
						<img src='https://cdn1.epicgames.com/offer/cbd5b3d310a54b12bf3fe8c41994174f/EGS_VALORANT_RiotGames_S1_2560x1440-160cacc798ef1693cc0a339e869f1761'></img>
						<button className='btn btn-primary'>Watch Now!</button>
					</div>
					<div className='category-card'>
						<h3>Lifestyle</h3>
						<img src='https://cdn1.epicgames.com/offer/cbd5b3d310a54b12bf3fe8c41994174f/EGS_VALORANT_RiotGames_S1_2560x1440-160cacc798ef1693cc0a339e869f1761'></img>
						<button className='btn btn-primary'>Watch Now!</button>
					</div>
					<div className='category-card'>
						<h3>Podcast</h3>
						<img src='https://cdn1.epicgames.com/offer/cbd5b3d310a54b12bf3fe8c41994174f/EGS_VALORANT_RiotGames_S1_2560x1440-160cacc798ef1693cc0a339e869f1761'></img>
						<button className='btn btn-primary'>Watch Now!</button>
					</div>
					<div className='category-card'>
						<h3>Scary Games</h3>
						<img src='https://cdn1.epicgames.com/offer/cbd5b3d310a54b12bf3fe8c41994174f/EGS_VALORANT_RiotGames_S1_2560x1440-160cacc798ef1693cc0a339e869f1761'></img>
						<button className='btn btn-primary'>Watch Now!</button>
					</div>
					<div className='category-card'>
						<h3>Rage Moments</h3>
						<img src='https://cdn1.epicgames.com/offer/cbd5b3d310a54b12bf3fe8c41994174f/EGS_VALORANT_RiotGames_S1_2560x1440-160cacc798ef1693cc0a339e869f1761'></img>
						<button className='btn btn-primary'>Watch Now!</button>
					</div>
				</div>
			</section>
		</div>
	);
}

export { Home };
