var gulp = require('gulp'),
useref = require('gulp-useref'),
gutil = require('gutil'),
fileinclude = require('gulp-file-include');

gulp.task('fileinclude', function(done) {
  gulp.src(['source/html/*.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: 'source/html/_modules'
    }))
    .pipe(gulp.dest('source/tmp')).
    on('end',done);
});


gulp.task('useref',['fileinclude'], function () {
	return (function(){
		gulp.src(['source/tmp/*.html'])
        .pipe(useref())
        .pipe(gulp.dest('dist'));
    }());
});