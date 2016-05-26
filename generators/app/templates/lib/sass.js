var gulp = require('gulp'),
sass = require('gulp-sass'),
minifyCss = require('gulp-minify-css'),
concatCSS = require('gulp-concat-css'),
rename = require('gulp-rename');



gulp.task('sass', function(done) {
  gulp.src('source/css/*.scss')
    .pipe(sass())
    .pipe(concatCSS("main.css"))
    .pipe(gulp.dest('source/tmp/css'))
    .on('end',done);
});
// .pipe(minifyCss({
//       keepSpecialComments: 0
//     }))
//     .pipe(rename({ extname: '.min.css' }))
