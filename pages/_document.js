/* eslint-disable @next/next/next-script-for-ga */
import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { createGetInitialProps } from "@mantine/next";
import { ServerStyleSheets as MaterialUiServerStyleSheets } from "@material-ui/core/styles";

const getInitialProps = createGetInitialProps();

export default class MyDocument extends Document {
	static getInitialProps = getInitialProps;
	constructor() {
		super();
	}
	render() {
		return (
			<Html lang="en">
				<Head>{/* Add your meta tags here */}</Head>
				<body
					style={{
						margin: 0,
						WebkitFontSmoothing: "antialiased",
					}}
				>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

MyDocument.getInitialProps = async (ctx) => {
	const materialUiSheets = new MaterialUiServerStyleSheets();
	const originalRenderPage = ctx.renderPage;
	ctx.renderPage = () =>
		originalRenderPage({
			enhanceApp: (App) => (props) =>
				materialUiSheets.collect(<App {...props} />),
		});

	const initialProps = await Document.getInitialProps(ctx);

	return {
		...initialProps,
		styles: [
			...React.Children.toArray(initialProps.styles),
			materialUiSheets.getStyleElement(),
		],
	};
};
