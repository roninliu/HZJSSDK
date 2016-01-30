const gulp = require("gulp");
const babel = require("gulp-babel");
const eslint = require('gulp-eslint');

gulp.task("default", function() {
	return gulp.src("src/*.js")
		.pipe(eslint({
			envs: [
				'browser', 'es6'
			]
		}))
		.pipe(eslint.format())
		.pipe(eslint.failAfterError())
		.pipe(babel())
		.pipe(gulp.dest("build"));
})