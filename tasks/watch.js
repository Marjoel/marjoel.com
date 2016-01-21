module.exports = function(grunt) {
    'use strict';

	grunt.config('watch', {
		styles: {
			files: ['project/assets/css/components/**/*.less'],
			tasks: ['less:build','replace:build'],
			options: {
				nospawn: true
			}
		},
		scripts: {
			files: ['project/assets/js/*.js'],
			tasks: ['uglify:build'],
			options: {
				nospawn: true
			}
		},
		index: {
			files: ['project/index.html'],
			tasks: ['copy:build_index'],
			options: {
				nospawn: true
			}
		}
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
};