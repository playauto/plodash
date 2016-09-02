'use strict';

// Gulp test
var gulp = require('gulp');
require('gulp-release-tasks')(gulp);
// Plugins
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var mocha = require('gulp-mocha');

var jsPaths = [
  'src/**/*.js',
  'test/**/*',
  '*.js'
];

gulp.task('test', function(){
  gulp.src('test/tests.spec.js')
    .pipe(mocha())
    .once('error', function(e){
      console.log(e);
      process.exit(1);
    });
});

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

gulp.task('deploy', ['test', 'copy', 'compress', 'tag']);