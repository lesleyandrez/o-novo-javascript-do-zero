var gulp = require('gulp');
var browserSync = require('browser-sync').create();

/**
* Static Server + watching less/html files
*/
gulp.task('serve', function(){

  browserSync.init({
    server: "./src",
    files: ["./src/**/*.html"]
  });

  gulp.watch("src/js/__bundle.js").on('change', browserSync.reload);

});

gulp.task('default', ['serve']);
