const gulp = require('gulp');
const concat = require('gulp-concat');
const terser = require('gulp-terser');
const sourcemaps = require('gulp-sourcemaps');
const jsPath = 'js/*.js';    
function copyJs() {
    return src('js/*.js').pipe(gulp.dest('dist'));   
}

function jsTask() {
    return gulp.src(jsPath)
    .pipe(sourcemaps.init())
    .pipe(concat('all.js'))
    .pipe(terser())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/assets/js'));
}

exports.default = copyJs;
exports.jsTask = jsTask;