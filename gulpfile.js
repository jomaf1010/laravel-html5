var gulp = require('gulp');
var g = require('gulp-load-plugins')();
var p = require('./package.json').options;
var run = require('run-sequence');

gulp.task('javascript',function(){
 return gulp.src(p.js.src)
     .pipe(g.include())
     .pipe(g.size({gzip:true}))
     .pipe(gulp.dest(p.dest))
     .on('error',g.util.log);
});


gulp.task('sass',function(){
 return gulp.src(p.css.src)
     .pipe(g.sass({outputStyle: 'compressed'}))
     .pipe(g.size({gzip:true}))
     .pipe(gulp.dest(p.dest))
     .on('error', g.util.log);
});

gulp.task('fonts',function() {
   return gulp.src(p.fonts.src)
       .pipe(g.size({gzip:true}))
       .pipe(gulp.dest(p.fonts.dest))
       .on('error', g.util.log);
});

gulp.task('image',function() {
    return gulp.src(p.images.src)
        .pipe(g.imagemin())
        .pipe(gulp.dest(p.images.dest))
        .pipe(g.size({gzip:true}))
        .on('error', g.util.log);
})


gulp.task('devmode',function(){
 run('javascript','image','fonts','sass','watch');
});

gulp.task('watch',function(){
 gulp.watch([ p.js.src , p.js.watch ],['javascript']);
 gulp.watch([ p.css.src , p.css.watch ],['sass']);
 gulp.watch([ p.images.src],['image']);
});