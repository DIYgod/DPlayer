var gulp        = require('gulp');
var sass        = require('gulp-sass');
var prefix      = require('gulp-autoprefixer');
var uglify      = require('gulp-uglify');
var concat      = require('gulp-concat');
var cssNano     = require('gulp-cssnano');
var rename      = require('gulp-rename');
var babel       = require("gulp-babel");
var sourcemaps  = require("gulp-sourcemaps");
var browserSync = require('browser-sync').create();

// Launch the server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: './'
        },
        startPath: '/demo'
    });
});

// Move files
gulp.task('copy', function () {
    gulp.src('src/font/*')
        .pipe(gulp.dest('dist/font'));
    gulp.src(['src/*.jpg', 'src/*.png'])
        .pipe(gulp.dest('dist'));
});

// Build js files
gulp.task('compressJS', function() {
    gulp.src(['src/*.js'])
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(uglify())
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream());
});

// Build css files
gulp.task('compressCSS', function() {
    gulp.src('src/*.scss')
        .pipe(sass())
        .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(cssNano())
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream());
});

// Watch files for changes & recompile
gulp.task('watch', function () {
    gulp.watch(['src/*.js'], ['compressJS']);
    gulp.watch(['src/*.scss'], ['compressCSS']);
    gulp.watch('demo/*.html').on('change', browserSync.reload);
    gulp.watch('demo/font/*', ['copy']);
});

// compile the project, including move font, compress js and scss, also be used to test
gulp.task('release', ['copy', 'compressJS', 'compressCSS']);

// Default task, running just `gulp` will move font, compress js and scss, launch server, watch files.
gulp.task('default', ['release', 'browser-sync', 'watch']);