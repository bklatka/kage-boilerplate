var gulp = require('gulp');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var sassGlob = require('gulp-sass-glob');
var helpers = require('./helpers');
var browserSync = require('browser-sync');

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("source/css/main.scss")
        .pipe(sassGlob())
        .pipe(plumber())
        .pipe(sass({errLogToConsole: true}))
        .on('error', helpers.catchError)
        .pipe(gulp.dest("dist/assets/css"))
        .pipe(browserSync.stream());

});