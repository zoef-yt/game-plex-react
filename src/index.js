import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { App } from './App';
import { makeServer } from './server';
import { Providers } from './Context/Providers';

// Call make Server
makeServer();

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Providers>
				<App />
			</Providers>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root'),
);
