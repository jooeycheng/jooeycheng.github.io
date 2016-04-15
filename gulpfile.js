var gulp         = require('gulp');
var argv         = require('yargs').argv;
var gulpif       = require('gulp-if')
var gutil        = require('gulp-util');
var sass         = require('gulp-sass');
var cssnano      = require('gulp-cssnano');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps   = require('gulp-sourcemaps');
var browserSync  = require('browser-sync');


gulp.task('sass', function () {
  return gulp.src('./assets/sass/**/*.sass')
          .pipe(gulpif(!argv.production, sourcemaps.init()))
          .pipe(sass().on('error', sass.logError))
          .pipe(autoprefixer())
          .pipe(cssnano())
          .pipe(gulpif(!argv.production, sourcemaps.write()))
          .pipe(gulp.dest('./assets/css/'))
          .pipe(browserSync.stream());
});


gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
});


gulp.task('serve', ['sass', 'browser-sync'], function() {
  gulp.watch("./assets/sass/**/*.sass", ['sass']);
  gulp.watch(["./*.html", "./assets/js/*.js"]).on('change', browserSync.reload);
});


gulp.task('default', ['serve']);
