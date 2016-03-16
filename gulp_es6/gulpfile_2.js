const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const cssnano = require('gulp-cssnano');
const concat = require('gulp-concat');
const browserify = require('browserify');
const browserify2 = require('gulp-browserify');
const source = require('vinyl-source-stream');

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
    .pipe(cssnano())
    .pipe(gulp.dest('debug/'));
})

// 监视文件变化，自动执行任务
gulp.task('watch', function(){
  gulp.watch('app/**/*.css', ['convertCSS']);
  gulp.watch('app/**/*.js', ['convertJS', 'browserify']);
})

gulp.task('scripts', function() {
    gulp.src('debug/**/*.js')
        .pipe(browserify2({
          insertGlobals : true,
          debug : !gulp.env.production
        }))
        .pipe(gulp.dest('debug/'))
});

gulp.task('u222', function() {
    return gulp.src('debug/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/'))
});

gulp.task('start2', ['convertJS','scripts','u222']);








