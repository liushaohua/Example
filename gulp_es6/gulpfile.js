const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const cssnano = require('gulp-cssnano');
const concat = require('gulp-concat');
const browserify = require('gulp-browserify');
const source = require('vinyl-source-stream');
const clean = require('gulp-clean');

// 编译并压缩js
gulp.task('convertJS', function(){
  return gulp.src('app/**/*.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('debug/'))
})

// 合并并压缩css
gulp.task('convertCSS', function(){
  return gulp.src('app/**/*.css')
    .pipe(gulp.dest('debug'));
})

// 监视文件变化，自动执行任务
gulp.task('watch', function(){
  gulp.watch('app/**/*.css', ['convertCSS']);
  gulp.watch('app/**/*.js', ['convertJS', 'scripts']);
})


gulp.task('eto5', function() {
    gulp.src('debug/js/*.js')
	.pipe(browserify({
	  insertGlobals : true,
	  debug : !gulp.env.production
	}))
	.pipe(gulp.dest('debug/js'))
});

gulp.task('packdist', function() {
    return gulp.src('debug/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
});

gulp.task('start', ['convertJS', 'convertCSS', 'browserify', 'watch']);
gulp.task('start2', ['convertJS','eto5','watch']);
gulp.task('dist', ['packdist']);