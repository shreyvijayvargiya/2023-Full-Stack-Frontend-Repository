import React, { useEffect } from "react";
import { theme } from "utils/theme";
import { Provider } from "react-redux";
import { ThemeProvider } from "@material-ui/core/styles";
import { Body } from "modules";
import { store, persistor } from "redux/store";
import { PersistGate } from "redux-persist/integration/react";
import app from "utils/firebase";
import "tailwindcss/tailwind.css";
import "react-toastify/dist/ReactToastify.css";
import { QueryClientProvider, QueryClient } from "react-query";
import "../styles.css";
import { MantineProvider } from "@mantine/core";

function MyApp({ Component, pageProps }) {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				refetchOnWindowFocus: false,
				refetchOnMount: false,
				staleTime: 24 * 60 * 60 * 1000, // in milliseconds
			},
		},
	});
	useEffect(() => {
		const jssStyles = document.querySelector("#jss-server-side");
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles);
		}
	}, []);

	return (
		<QueryClientProvider client={queryClient}>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<ThemeProvider theme={theme}>
						<MantineProvider withGlobalStyles withNormalizeCSS>
							<Body pageProps={pageProps}>
								<Component {...pageProps} />
							</Body>
						</MantineProvider>
					</ThemeProvider>
				</PersistGate>
			</Provider>
		</QueryClientProvider>
	);
}

export default MyApp;
