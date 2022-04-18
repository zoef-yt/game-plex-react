import { AuthProvider } from './AuthContext/AuthContext.jsx';
import { ThemeProvider, CategoryProvider, VideoProvider, LikesProvider, HistoryProvider, PlaylistProvider, WatchLaterProvider } from './index.js';
import { ModalProvider } from './ModalContext/ModalContext.jsx';

const Providers = ({ children }) => {
	return (
		<ThemeProvider>
			<AuthProvider>
				<ModalProvider>
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
				</ModalProvider>
			</AuthProvider>
		</ThemeProvider>
	);
};

export { Providers };
