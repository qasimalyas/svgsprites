var gulp = require('gulp');
var svgSprite = require('gulp-svg-sprite');

gulp.task('sprites', function() {

	// Basic configuration example 
	var config = {
		mode: {
			css: {		// Activate the «css» mode 
				render: {
					css: true	// Activate CSS output (with default options) 
				}
			}
		}
	};

	return 
		gulp.src('*.svg')
			.pipe(svgSprite(config))
			.pipe(gulp.dest('out'));
});