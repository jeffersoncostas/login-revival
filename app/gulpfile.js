'use strict';

let gulp = require('gulp');
let sass = require('gulp-sass');
let livereload = require('gulp-livereload');


gulp.task('default', function () {
    gulp.start(['sass', 'sass:watch', 'html', 'js']);
})


gulp.task('sass', function () {
    return gulp.src('./sass/**/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'))
        .pipe(livereload());

});


gulp.task('html', function () {
    return gulp.src('index.html')
        .pipe(gulp.dest(''))
        .pipe(livereload());

});

gulp.task('js', function () {
    return gulp.src('./js/*.js')
        .pipe(gulp.dest(''))
        .pipe(livereload());

});


gulp.task('sass:watch', function () {
    livereload.listen();
    
    gulp.watch('./js/*.js', ['js']);
    gulp.watch('index.html', ['html']);
    gulp.watch('./sass/**/*.sass', ['sass']);
});
