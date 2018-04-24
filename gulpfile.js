/////////////////////////////////////////////////////
// Gulp Dependencies
/////////////////////////////////////////////////////

var gulp = require("gulp"),
	autoprefixer = require("gulp-autoprefixer"),
	concat = require("gulp-concat"),
	jade = require('gulp-jade'),
	sass = require("gulp-sass"),
	fs = require('fs');
	uglify = require("gulp-uglify");
	cleanCSS = require('gulp-clean-css');

/////////////////////////////////////////////////////
// HTML
/////////////////////////////////////////////////////

var brands = ["Red", "blue"];


gulp.task("jade", function() {
	gulp.src('views/**/!(_)*.jade')
	.pipe(jade({
		pretty: true,
		locals: {
			posts: JSON.parse( fs.readFileSync('./views/_posts.json') )
		}
	}))
	.pipe(gulp.dest("."));
});

/////////////////////////////////////////////////////
// SASS
/////////////////////////////////////////////////////

gulp.task('sass', function () {
	gulp.src(['public/css/styles.scss'])
		.pipe(sass({
			outputStyle: "compact",
		}).on('error', sass.logError))
		.pipe(autoprefixer({browsers: ['last 2 versions'], remove: false}))
		.pipe(gulp.dest(function(file) {
			return file.base;
		}));
	});

/////////////////////////////////////////////////////
// JavaScript
/////////////////////////////////////////////////////

gulp.task("uglify", function() {
	gulp.src(["public/js/vendor/*.js", "public/js/components/*.js"])
	.pipe(concat("application.js"))
	.pipe(gulp.dest("public/js/"));
});

/////////////////////////////////////////////////////
// Watch
/////////////////////////////////////////////////////

gulp.task("watch", function() {
	gulp.watch(['public/css/**/*.scss'], ['sass']);
	gulp.watch(['public/js/**/*.js'], ['uglify']);
	gulp.watch(['views/**/*.jade'], ['jade']);
});

gulp.task("default", ["watch"], function() {

});
