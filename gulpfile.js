var gulp        = require('gulp');
var sass        = require('gulp-sass');
var browserSync = require('browser-sync').create();

//Compile sass into CSS
gulp.task('sass', function(){
    return gulp.src('app/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'));
})
// static server & watching scss / html files
gulp.task('serve', function(){
    browserSync.init({
        server: './app'
    });
    gulp.watch('app/scss/*.scss', ['sass']);

})