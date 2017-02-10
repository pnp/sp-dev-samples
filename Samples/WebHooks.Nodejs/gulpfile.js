var gulp = require('gulp'),
    ts = require('gulp-typescript'),
    sourcemaps = require('gulp-sourcemaps');

gulp.task('default', ['typescript'], () => {});

gulp.task('typescript', () => {
    var tsProject = ts.createProject('./tsconfig.json');
    return tsProject.src()
        .pipe(sourcemaps.init())
        .pipe(ts())
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest('./src/'));
});


gulp.task('watch:typescript', () => {
    gulp.watch('./src/**/*.ts', ['typescript']);
});