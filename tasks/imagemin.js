module.exports = function(grunt) {
    'use strict';

	grunt.config('imagemin', {
    	build: {
			options: {
				optimizationLevel: 7
			},
			files: [
				{
					expand: true,
					cwd: 'project/assets/images/', 
					src: ['*.{png,jpg,gif}'],
					dest: 'dist/assets/images/'
				}
			]
		}
    });
    grunt.loadNpmTasks('grunt-contrib-imagemin');
};