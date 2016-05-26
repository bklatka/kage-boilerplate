var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('watch', function () {
  //CSS
  watch('source/css/*.scss', function (){
    gulp.start(['sass','fileinclude','useref']);
  });

  //HTML
  watch(['source/html/*.html','source/html/_modules/*.html'],function(){
  	gulp.start(['fileinclude','useref']);
  });

  //JS
  watch(['source/js/_modules/*.js'],function(){
    gulp.start(['copyJs','fileinclude','useref']);
  });

  //STATIC FILES
  watch(['source/static_files/*'],function(){
    gulp.start(['copyStatic']);
  });
});
