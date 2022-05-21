import { AuthProvider } from './AuthContext/AuthContext.jsx';
import { FilterProvider } from './FilterContext/FilterContext.jsx';
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
										<WatchLaterProvider>
											<FilterProvider>{children}</FilterProvider>
										</WatchLaterProvider>
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
