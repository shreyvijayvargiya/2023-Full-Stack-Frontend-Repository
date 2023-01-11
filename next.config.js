const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true",
});

module.exports = (phase, defaultConfig) => {
	return {
		env: {
			REACT_APP_FIREBASE_KEY: "",
			REACT_APP_FIREBASE_DOMAIN: "",
			REACT_APP_FIREBASE_DATABASE: "",
			REACT_APP_FIREBASE_PROJECT_ID: "",
			REACT_APP_FIREBASE_STORAGE_BUCKET: "",
			REACT_APP_ID: "",
			REACT_APP_MEASUREMENT_ID: "",
		},
		experimental: {
			esmExternals: false,
		},
		images: {
			domains: ["firebasestorage.googleapis.com"],
		},
		webpack: (config) => {
			config.node = {
				fs: "empty",
				child_process: "empty",
				net: "empty",
				dns: "empty",
				tls: "empty",
			};
			return config;
		},
		...withBundleAnalyzer({}),
	};
};
