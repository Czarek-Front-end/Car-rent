const gulp = require('gulp');
const sass = require('gulp-sass');

const cssDest = 'style';
const cssInputFile = 'source/style.scss';

gulp.task('buildcss', function() {
    return gulp.src(cssInputFile)
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(gulp.dest(cssDest));
})