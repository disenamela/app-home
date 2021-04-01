// next.config.js
const path = require('path');
const withImages = require('next-images');
module.exports = withImages({
	exclude: path.resolve(__dirname, 'public/icons'),
	webpack(config, options) {
		config.module.rules.push({
			test: /\.svg$/,
			include: path.resolve(__dirname, 'public/icons'),
			use: ["@svgr/webpack"]
		});

		return config;
	}
});
