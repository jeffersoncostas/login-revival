'use strict';

let gulp = require('gulp');
let sass = require('gulp-sass');
let livereload = require('gulp-livereload');


gulp.task('default', function () {
    gulp.start(['sass', 'sass:watch']);
})


gulp.task('sass', function () {
    return gulp.src('./sass/**/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'))
        .pipe(livereload());

});

gulp.task('sass:watch', function () {
    livereload.listen();

    gulp.watch('./sass/**/*.sass', ['sass']);
});
