const { src, dest, parallel, task } = require('gulp');
var gzip = require('gulp-gzip');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-cssmin');
const htmlmin = require('gulp-htmlmin');

var pipeline = require('readable-stream').pipeline;
var fs = require('fs');

task('compresscss', function (done) {
  src('./dist/*.css')
    .pipe(cssmin())
    .pipe(dest('./dist/'));
  done()
});

task('compresshtml', function (done) {
  src('./dist/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('./dist/'));
  done()
});

const html = task("compresshtml");
const css = task("compresscss");

exports.default = parallel(html, css);