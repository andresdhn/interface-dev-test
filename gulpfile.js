const { src, dest, parallel, series, watch } = require('gulp')
const autoprefixer = require('gulp-autoprefixer')
const sass = require('gulp-sass')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

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
    imgs: {
        src: './src/images/*.{jpg,png,gif}',
        dst: './build/images/',
    },
}

function js() {
    return src(path.js.src)
        .pipe(
            babel({
                presets: ['@babel/preset-env'],
            })
        )
        .pipe(uglify())
        .pipe(dest(path.js.dst))
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

function images() {
    return src(path.imgs.src).pipe(dest(path.imgs.dst))
}

function watchers() {
    watch(path.js.src, js)
    watch(path.css.src, css)
    watch(path.html.src, html)
}

const build = series(parallel(js, css, html, images), watchers)

exports.css = css
exports.html = html
exports.watch = watchers
exports.default = build
