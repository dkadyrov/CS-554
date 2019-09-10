var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
//convert scss files to css
gulp.task('sass',function(){
return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'])
  .pipe(sass())
  .pipe(gulp.dest('src/css'))
  .pipe(browserSync.stream());
});
//move js files to the src
gulp.task('js',function(){
return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js','node_modules/popper.js/dist/popper.min.js', 'node_modules/jquery/dist/jquery.min.js' ])
  .pipe(gulp.dest('src/js'))
  .pipe(browserSync.stream());
});
//server implementation
gulp.task('serve',['sass'],function(){
  browserSync.init({
  server:"./src"
});
gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'], ['sass']);
  
   gulp.watch('src/*.html').on('change', browserSync.reload);
});
//start server
gulp.task('default',['js','serve']);