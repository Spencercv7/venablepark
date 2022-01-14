import GlobalStyle from "../style/GlobalStyle";
import Theme from "../style/Theme";

import { ThemeProvider } from "styled-components";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<ThemeProvider theme={Theme}>
				<GlobalStyle />
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}

export default MyApp;
