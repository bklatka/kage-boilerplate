var gulp = require('gulp'),
concat = require('gulp-concat'),
uglify = require('gulp-uglify');
var babel = require('gulp-babel');


gulp.task('concatJs', function () {
  return gulp.src(['source/modules/**/*.js', 'source/js/*.js'])
  	.pipe(concat('main.js'))
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('dist/assets/js'));
});

gulp.task('uglify', function() {
  return gulp.src('dist/assets/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/assets/js'));
});