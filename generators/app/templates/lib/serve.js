var gulp = require('gulp'),
server = require('gulp-server-livereload');


gulp.task('serve',['watch'], function() {
  gulp.src('dist')
    .pipe(server({
      livereload: true,
      open: true,
    }));
});