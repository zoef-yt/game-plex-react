import { ThemeProvider, CategoryProvider, VideoProvider, LikesProvider, HistoryProvider, PlaylistProvider, WatchLaterProvider } from './index.js';

const Providers = ({ children }) => {
	return (
		<ThemeProvider>
			<CategoryProvider>
				<VideoProvider>
					<LikesProvider>
						<HistoryProvider>
							<PlaylistProvider>
								<WatchLaterProvider>{children}</WatchLaterProvider>
							</PlaylistProvider>
						</HistoryProvider>
					</LikesProvider>
				</VideoProvider>
			</CategoryProvider>
		</ThemeProvider>
	);
};

export { Providers };
