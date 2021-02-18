var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

async function css() {
  const files = [
    'node_modules/bootstrap/dist/css/bootstrap.min.css',
  ];
  return gulp.src(files).pipe(gulp.dest('mysite/staticfiles/css'))
}

// Task 2: copy jquery's assets to /_vendor/
async function js() {
  const files = [
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/bootstrap/dist/js/bootstrap.min.js'
  ];
  return gulp.src(files).pipe(gulp.dest('mysite/staticfiles/js'))
}

gulp.task('uglify', async function() {
  gulp.src('mysite/app1/js/*.js')
      .pipe(concat('app.js'))
      .pipe(uglify())
      .pipe(gulp.dest('mysite/staticfiles/js'));
});

gulp.task('default', gulp.series('uglify', css, js, async function(){
    console.log("Gulp Stared");
}));