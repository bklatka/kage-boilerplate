var gulp = require('gulp');
var injectPartials = require('gulp-inject-partials');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var gulpif = require('gulp-if');
var minifyCss = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');
var helpers = require('./helpers');

gulp.task('html', function(done) {
    return gulp.src('./source/*.html')
        .pipe(plumber())
        .pipe(injectPartials({
            removeTags: true,
            start: '<partial src="{{path}}">',
            end: '</partial>'
        }))
        .on('error', helpers.catchError)
        .pipe(useref())
        .pipe(gulpif('*.css', minifyCss()))
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulp.dest('./dist'));
});