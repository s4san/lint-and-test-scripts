"use strict";
var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    jasmine = require('gulp-jasmine'),
    reporters = require('jasmine-reporters');

var paths = {
    scripts : 'scripts/**/*.js',
    tests : 'tests/**/*.js'
};

gulp.task('lint', function() {
    return gulp.src([paths.scripts, paths.tests, 'gulpfile.js'])
        .pipe(jshint('jshint-config.json'))
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('test', function() {
    return gulp.src([paths.tests])
        .pipe(jasmine({verbose: true, includeStackTrace: true, reporter: new reporters.TerminalReporter()}));
});

gulp.task('watch', function() {
    gulp.watch(paths.scripts, ['lint']);
    gulp.watch(paths.tests, ['lint', 'test']);
});

gulp.task('default', ['lint', 'test']);