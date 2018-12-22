module.exports = function (gulp, $, browserSync) {
	gulp.task('tao-js', function () {
		let ngAnnotate = require('gulp-ng-annotate');
		return gulp.src([
				'./src/scripts/**/*.js'
			])
			.pipe($.sourcemaps.init())
			.pipe($.concat('app.js'))
			.pipe($.babel())
			.pipe(ngAnnotate())
			.pipe($.sourcemaps.write(''))
			.pipe(gulp.dest('./dist/js'));
	});
};
