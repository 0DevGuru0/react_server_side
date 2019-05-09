const PresetEnv         = require('postcss-preset-env'),
    fontMagic           = require('postcss-font-magician'),
    Normalize           = require('postcss-normalize'),
    flexBoxFixes        = require('postcss-flexbugs-fixes'),
    cssNano             = require('cssnano'),
    autoPrefixer        = require('autoprefixer'),
    nested              = require('postcss-nested'),
    resembleImage       = require('postcss-resemble-image').default,
    mediaQueryPacker    = require("css-mqpacker"),
    pxtorem             = require('postcss-pxtorem');
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
                'ie 8',
                'ie 9'
            ]
        }),
        fontMagic({ foundries: ['google'] }),
        flexBoxFixes(),
        Normalize(),
        cssNano(),
        resembleImage(),
        pxtorem(),
        mediaQueryPacker(),
        autoPrefixer(),
        nested()
    ]
}