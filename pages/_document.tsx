import { Html, Head, Main, NextScript } from "next/document";
import { ColorSchemeScript, mantineHtmlProps } from "@mantine/core";

export default function Document() {
	return (
		<Html
			lang="de"
			{...mantineHtmlProps}
		>
			<Head>
				<ColorSchemeScript />
				<meta charSet="utf-8" />
				<meta
					httpEquiv="X-UA-Compatible"
					content="IE=edge"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
