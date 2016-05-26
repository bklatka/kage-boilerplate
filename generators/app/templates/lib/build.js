var gulp = require('gulp');


gulp.task('build',['sass','concatJs','fileinclude','copyStatic'],function(done){
	gulp.start('useref');
});