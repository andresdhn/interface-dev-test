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

function js() {
    return src(path.js.src).pipe(dest(path.js.dst))
}

function css() {
    return src(path.css.src)
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(dest(path.css.dst))
}

function html() {
    return src(path.html.src).pipe(dest(path.html.dst))
}

function watchers() {
    watch(path.js.src, js)
    watch(path.css.src, css)
    watch(path.html.src, html)
}

const build = series(parallel(js, css, html), watchers)

exports.css = css
exports.html = html
exports.watch = watchers
exports.default = build
