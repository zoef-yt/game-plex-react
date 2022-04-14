import { ThemeProvider, CategoryProvider, VideoProvider } from './index.js';

const Providers = ({ children }) => {
	return (
		<ThemeProvider>
			<CategoryProvider>
				<VideoProvider>{children}</VideoProvider>
			</CategoryProvider>
		</ThemeProvider>
	);
};

export { Providers };
