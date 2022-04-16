import React from 'react';
import { NavLink } from 'react-router-dom';
import { HalfMoonIcon, SunIcon } from '../../../Assets/svg/AllSVG';
import { useTheme } from '../../../Context';

import './Navbar.css';
function Navbar() {
	const { theme, toggleTheme } = useTheme();
	return (
		<nav className='navbar-mobile'>
			<div className='navbar'>
				<NavLink className='navbar-brand ' to='/'>
					<h1>Game Plex</h1>
				</NavLink>
				<input type='search' className='text-field' placeholder='Search For Games' />
				<div className='navbar-cta'>
					<div className='flex-column' onClick={toggleTheme}>
						{theme === 'dark' ? <SunIcon className='header-icon ' /> : <HalfMoonIcon className='header-icon' />}
					</div>
					<div className='profile-modal-holder'>
						<div className='avatar avatar-sm '>ZS</div>
						<div className='profile-modal'>
							<li>My Profile</li>
							<hr />
							<li>My Playlist</li>
							<hr />
							<li>Watch Later</li>
							<hr />
							<li>Liked Videos</li>
							<hr />
							<li>Logout 😞</li>
						</div>
					</div>
				</div>
			</div>
			<input type='search' className='text-field mobile-searchbar' placeholder='Search For Games' />
		</nav>
	);
}

export { Navbar };
