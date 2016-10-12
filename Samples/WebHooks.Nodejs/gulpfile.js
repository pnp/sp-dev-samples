var gulp = require('gulp'),
    ts = require('gulp-typescript'),
    sourcemaps = require('gulp-sourcemaps');

gulp.task('default', ['typescript'], () => {});

gulp.task('typescript', () => {
    gulp.src('./src/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(ts())
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest('./src/'));
});


gulp.task('watch:typescript', () => {
    gulp.watch('./src/**/*.ts', ['typescript']);
});