var watch = require('gulp-watch');
var gulp = require('gulp');
var browserSync = require('browser-sync').get('dev');

gulp.task('watch', function() {
    watch('source/**/*.scss', function() {
        gulp.start('sass', function() {
           browserSync.reload();
        });
    });
    watch('source/**/*.html', function() {
        gulp.start('html', function() {
            browserSync.reload();
        });
    });
    watch('source/static_files/**/*', function() {
        gulp.start('copyStatic', function() {
            browserSync.reload();
        });

    });
    watch(['source/modules/**/*.js', 'source/js/*.js'], function() {
       gulp.start('concatJs', function() {
          browserSync.reload();
       });
    });
});
