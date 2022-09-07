const gulp = require('gulp')
const { parallel, series, src, dest } = gulp

const uglifycss = require('gulp-uglifycss')
const uglify = require('gulp-uglify')
const htmlmin = require('gulp-htmlmin')
const concat = require('gulp-concat')
const rename = require('gulp-rename')

function js(callback) {
    src('./src/**/*.js')
        .pipe(uglify())
        .pipe(rename({suffix: ".min"}))
        .pipe(gulp.dest('build'))
        
    return callback()
}

function css(callback) {
    src('./src/**/*.css')
        .pipe(uglifycss({ uglyComments: true}))
        .pipe(concat('style.min.css'))
        .pipe(dest('build'))

    return callback()
}

function html(callback) {
    src('./src/**/*.html')
        .pipe(htmlmin({collapseWhitespace: true, removeComments: true}))
        .pipe(rename({suffix: ".min"}))
        .pipe(dest('build'))

    return callback()
}

function img(callback) {
    src('./imagens/**/*.svg')
        .pipe(dest('build/imagens'))

    return callback()
}

module.exports.default = series(html, js, css, img)
