var gulp        = require('gulp');
var browserSync = require('browser-sync').create('dev');
var watch = require('gulp-watch');

// Static Server + watching scss/html files
gulp.task('serve', ['build'], function() {

    browserSync.init({
        server: "./dist"
    });

    gulp.start('watch');
});



