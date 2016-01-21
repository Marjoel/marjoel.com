module.exports = function(grunt) {
    'use strict';

	grunt.config('uglify', {
    	build: {
			files: [{
				'dist/assets/js/scripts.min.js': [
					'project/assets/bower_components/jquery/dist/jquery.min.js',
					'project/assets/bower_components/bootstrap/js/transition.js',
					'project/assets/bower_components/bootstrap/js/modal.js',
					'project/assets/js/*.js'
				]
			}]
		}
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
};