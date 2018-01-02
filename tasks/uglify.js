module.exports = function(grunt) {
    'use strict';

	grunt.config('uglify', {
    	build: {
			files: [{
				'dist/assets/js/scripts.min.js': [
					'project/assets/vendor/jquery/dist/jquery.min.js',
					'project/assets/vendor/bootstrap/js/transition.js',
					'project/assets/vendor/bootstrap/js/modal.js',
					'project/assets/js/*.js'
				]
			}]
		}
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
};
