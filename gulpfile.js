// Gulp
var gulp = require('gulp');

// Plugins
var eslint = require('gulp-eslint');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

var jsPaths = [
  'src/**/*.js',
  'test/**/*',
  '*.js'
];

gulp.task('lint-js', function() {
  return gulp.src(jsPaths)
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('copy', function() {
  return gulp.src('src/lodash-addons.js')
    .pipe(gulp.dest('dist'));
});

gulp.task('compress', function() {
  return gulp.src('src/lodash-addons.js')
    .pipe(uglify())
    .pipe(rename('lodash-addons.min.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['lint-js']);
gulp.task('pre-commit', ['default']);

gulp.task('deploy', ['copy', 'compress']);