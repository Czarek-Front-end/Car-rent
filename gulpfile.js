const gulp = require('gulp');
const sass = require('gulp-sass');

const cssDest = 'style';
const cssInputFile = 'source/style.scss';
const watchedFiles = 'source/**/*.scss';


gulp.task('buildcss', function() {
    return gulp.src(cssInputFile)
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(gulp.dest(cssDest));
});

gulp.task('watch', function(){
    gulp.watch(watchedFiles, gulp.series('buildcss'));
});
