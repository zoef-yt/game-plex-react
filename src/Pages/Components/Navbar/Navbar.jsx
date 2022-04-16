import { NavLink, useNavigate } from 'react-router-dom';
import { HalfMoonIcon, SunIcon } from '../../../Assets/svg/AllSVG';
import { useTheme } from '../../../Context';

import './Navbar.css';
const Navbar = () => {
	const { theme, toggleTheme } = useTheme();
	return (
		<nav className='navbar-mobile'>
			<div className='navbar'>
				<NavLink className='navbar-brand ' to='/'>
					<h1>Game Plex</h1>
				</NavLink>
				<input type='search' className='text-field' placeholder='Search For Games' />
				<div className='navbar-cta'>
					<NavLink to='/videos'>
						<h5 className='header-icon'>Videos</h5>
					</NavLink>
					<div className='flex-column' onClick={toggleTheme}>
						{theme === 'dark' ? <SunIcon className='header-icon' /> : <HalfMoonIcon className='header-icon' />}
					</div>
					<div className='profile-modal-holder'>
						<div className='avatar avatar-sm not-selectable '>ZS</div>
						<div className='profile-modal not-selectable '>
							<ProfileModalLink text='My Profile' navigateTo={'/'} />
							<ProfileModalLink text='My Playlist' navigateTo={'/my-playlists'} />
							<ProfileModalLink text='Liked Videos' navigateTo={'/my-liked'} />
							<ProfileModalLink text='History' navigateTo={'/my-history'} />
							<ProfileModalLink text='Watch Later' navigateTo={'/my-watch-later'} />
							<li>Logout 😞</li>
						</div>
					</div>
				</div>
			</div>
			<input type='search' className='text-field mobile-searchbar' placeholder='Search For Games' />
		</nav>
	);
};

export { Navbar };

const ProfileModalLink = ({ text, navigateTo }) => {
	const navigate = useNavigate();
	return (
		<>
			<li onClick={() => navigate(navigateTo)}>{text}</li>
			<hr />
		</>
	);
};
