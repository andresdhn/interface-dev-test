const { src, dest, parallel, series, watch } = require('gulp')
const autoprefixer = require('gulp-autoprefixer')
const sass = require('gulp-sass')

const sassOptions = { outputStyle: 'compressed' }
const path = {
    js: {
        src: './src/js/*.js',
        dst: './build/js/',
    },
    css: {
        src: './src/styles/*.scss',
        dst: './build/css/',
    },
    html: {
        src: './src/html/*.html',
        dst: './build/',
    },
}

function css() {
    return src(path.css.src)
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(dest(path.css.dst))
}

function watchers() {
    watch(path.css.src, css)
}

const build = series(css, watchers)

exports.css = css
exports.watch = watchers
exports.default = build
