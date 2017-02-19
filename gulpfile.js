var gulp = require('gulp');
var clean = require('gulp-clean');
var ts = require('gulp-typescript');
var typescript = require('typescript');
var flatten = require('gulp-flatten');
var sourcemaps = require('gulp-sourcemaps');
// var livereload = require('gulp-livereload');
var sass = require('gulp-sass');
var tsp = ts.createProject('tsconfig.json');


gulp.task('templates', function() {
    return gulp.src([
        'app/**/*.html'
    ]).pipe(gulp.dest('./build/app'));
});

gulp.task('dependencies', function() {
    return gulp.src([
        'dependencies/**/**'
    ]).pipe(gulp.dest('./build/libs'));
});

gulp.task('copy', ['templates', 'dependencies'], function() {
    return gulp.src([
        'index.html'
    ]).pipe(gulp.dest('./build'));
});

gulp.task('sass', ['sass-components'], function() {
    return gulp.src('app/styles/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./build'));
});

gulp.task('sass-components', function() {
    return gulp.src('app/components/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./build/app/components'));
});

gulp.task('clean', function() {
    return gulp.src(['build/*'], {
        read: false
    }).pipe(clean());
});

gulp.task('build', function() {
    var tsr = gulp.src('app/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(ts(tsp));

    tsr.dts.pipe(gulp.dest('build/app'));

    return tsr.js
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('build/app'));
});

gulp.task('default', ['copy', 'sass', 'build'], function() {
    // livereload.listen();
    gulp.watch('app/**/*.ts', ['build']);

    gulp.watch([
        'app/**/*.html',
        'index.html',
        'dependencies/**/**',
        'app/**/*.ts'
    ], ['copy']);

    gulp.watch([
        'app/components/**/*.scss',
        'app/styles/main.scss'
    ], ['sass']);

});
