var gulp = require('gulp'),
concat = require('gulp-concat')
uglify = require('gulp-uglify');



gulp.task('concatJs', function () {
  return gulp.src('source/js/_modules/*.js')
  	.pipe(concat('source/tmp/js/global.js'))
    .pipe(gulp.dest('./'));
});

gulp.task('uglify', function() {
  return gulp.src('dist/assets/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/assets/js'));
});