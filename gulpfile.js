const {src, dest, series, watch} = require ( 'gulp' )
const sass = require('gulp-sass')(require('sass'))
const csso = require('gulp-csso')
const concat = require('gulp-concat')
const del = require('del')
const fileinclude = require('gulp-file-include')
const htmlmin = require('gulp-htmlmin')
const uglify = require('gulp-uglify')
const terser = require('gulp-terser')
const sync = require('browser-sync').create()


function styles(){
    return src('./src/sass/**/*.sass')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(csso())
    .pipe(concat('style.css'))
    .pipe(dest('./app/css/'))
}

function html(){
    return src('./src/*.html')
    .pipe(fileinclude({
        prefix: '@@',
    }))
    .pipe(htmlmin({
        collapseWhitespace: true
    }))
    .pipe(dest('./app/'))
}
function vendors(){
    return src('./src/css/*.css')
    .pipe(dest('./app/css/vendors'))
}

function imgs(){
    return src('./src/img/*.*')
    .pipe(dest('./app/images/'))
}

function js(){
    return src('./src/js/*.js')
    .pipe(terser())
    .pipe(dest('./app/js/'))
}
function clear(){
    return del('app')
} 


function serve(){
    sync.init({
        server: 'app/'
    })
    watch('./src/**/*.html', series(html)).on('change', sync.reload)
    watch('./src/sass/**/*.sass', series(styles)).on('change', sync.reload)
    watch('./src/img/*.*', series(imgs)).on('change', sync.reload)
    watch('./src/js/*.js', series(js)).on('change', sync.reload)
}
exports.clear = clear
exports.html = html
exports.styles = styles
exports.build = series(clear, styles, vendors, html, imgs, js)
exports.serve = series(clear, styles, vendors, html, imgs, js, serve)   