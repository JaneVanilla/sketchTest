'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');


sass.compiler = require('node-sass');

gulp.task('sass', function () {
    return gulp.src('scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('scss/*.scss', ['sass']);
});

gulp.task('cssnano', function () {
    return gulp.src('css/style.css')
        .pipe(cssnano())
        .pipe(gulp.dest('minify'));
});

gulp.task('default', ['sass','cssnano','sass:watch'], function () {
    return gulp.src('css/style.css')
        .pipe(autoprefixer({
            overrideBrowserslist:  ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('css'));
});
