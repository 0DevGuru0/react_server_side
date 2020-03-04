const PresetEnv = require("postcss-preset-env");
// const fontMagic = require("postcss-font-magician");
const Normalize = require("postcss-normalize");
const flexBoxFixes = require("postcss-flexbugs-fixes");
const cssNano = require("cssnano");
const autoPrefixer = require("autoprefixer");
const nested = require("postcss-nested");
const resembleImage = require("postcss-resemble-image").default;
const pxtorem = require("postcss-pxtorem");

module.exports = {
	plugins: [
		PresetEnv({
			stage: 3,
			browsers: [
				"last 2 version",
				"> 1%",
				"maintained node versions",
				"not dead",
				"cover 99.5%",
				"ie 8",
				"ie 9"
			]
		}),
		// fontMagic({ foundries: ['google'] }),
		flexBoxFixes(),
		Normalize(),
		cssNano(),
		resembleImage(),
		pxtorem(),
		autoPrefixer(),
		nested()
	]
};
