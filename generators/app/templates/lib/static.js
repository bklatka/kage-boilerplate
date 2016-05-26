var gulp = require('gulp');

gulp.task('copyStatic',function(){
  return gulp.src('source/static_files/*')
    .pipe(gulp.dest('dist/assets/static_files'));
});