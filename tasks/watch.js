module.exports = function(grunt) {
    'use strict';

	grunt.config('watch', {
		index: {
			files: ['project/*.html'],
			tasks: ['copy:build_html',
					'less:build',
					'replace:build',
					'purifycss:build',
					'csscomb:build',
					'cssmin:build'],
			options: {
				nospawn: true
			}
		},
		styles: {
			files: ['project/assets/css/components/**/*.less'],
			tasks: ['less:build',
					'replace:build',
					'purifycss:build',
					'csscomb:build',
					'cssmin:build'],
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
		}
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
};