'use strict';

// Gulp test
var gulp = require('gulp');

// Plugins
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

var jsPaths = [
  'src/**/*.js',
  'test/**/*',
  '*.js'
];

gulp.task('copy', function() {
  return gulp.src('src/ptg-lodash.js')
    .pipe(gulp.dest('dist'));
});

gulp.task('compress', function() {
  return gulp.src('src/ptg-lodash.js')
    .pipe(uglify())
    .pipe(rename('ptg-lodash.min.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('deploy', ['copy', 'compress']);