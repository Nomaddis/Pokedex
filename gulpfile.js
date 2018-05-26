var browserSync = require("browser-sync"),
    gulp = require('gulp');
    // path = require('path'),
    reload = browserSync.reload;
var ghPages = require('gulp-gh-pages');

var config = {
    server: {
        baseDir: "./app"
    },
    tunnel: true,
    host: 'localhost',
    port: 9000,
    logPrefix: "Frontend_Devil"
};
gulp.task('browser-sync', function () {
    browserSync(config);
});
gulp.task('watch', ['browser-sync'], function(){
    // gulp.watch('less/**/*.less', ['less', browserSync.reload]);
    // gulp.watch('pug/**/*.pug', ['pug', browserSync.reload]);
    gulp.watch('app/css/**/*.css', ['autoprefixer', browserSync.reload]);
    // Other watchers
});
gulp.task('deploy', function() {
    return gulp.src('./app/**/*')
        .pipe(ghPages());
});


gulp.task('default', ['browser-sync', 'watch']);