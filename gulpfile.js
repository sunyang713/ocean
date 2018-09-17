var gulp = require('gulp')
// var less = require('gulp-less')
// var babel = require('gulp-babel')
// var concat = require('gulp-concat')
// var uglify = require('gulp-uglify')
// var rename = require('gulp-rename')
// var cleanCSS = require('gulp-clean-css')
// var del = require('del')

/* 
 * Not all tasks need to use streams, a gulpfile is just another node program
 * and you can use all packages available on npm, but it must return either a
 * Promise, a Stream or take a callback and call it
 */
export function clean() {
  // You can use multiple globbing patterns as you would with `gulp.src`,
  // for example if you are using del 2.0 or above, return its promise
  return del([ 'assets' ])
}

export function lol() {
  // return gulp.src('../src/client')
  //   .pipe(buildClient(fs))
  //   .pipe(uglify())
  //   .pipe(gulp.dest('lol'))
}

// export function styles() {
//   return gulp.src('src/ui/build')
//     .pipe(buildStyle(fs))
//     .pipe(uglify())
//     .pipe(purify())
//     .pipe(gulp.dest('loll'))
// }





// use gulp for this, not webpack
// function copyPublicFolder() {
//   fs.copySync(paths.appPublic, paths.appBuild, {
//     dereference: true,
//     filter: file => file !== paths.appHtml,
//   })
// }
