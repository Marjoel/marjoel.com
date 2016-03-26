module.exports = function(grunt) {
    'use strict';

	grunt.config('copy', {
		build_html: {
			files: [{
				expand: true,
				cwd: 'project/',
				src : ['*.html'],
				dest: 'dist/'
			}]
		},
		build: {
			files: [{
				expand: true,
				cwd: 'project/',
				src : ['*.html','.htaccess','robots.txt'],
				dest: 'dist/'
			},
			{
				expand: true,
				cwd: 'project/assets/bower_components/font-awesome/fonts',
				src : ['*.*'],
				dest: 'dist/assets/fonts/font-awesome/'
			},
			{
				expand: true,
				cwd: 'project/assets/bower_components/roboto-fontface/fonts',
				src : ['*.*'],
				dest: 'dist/assets/fonts/font-roboto/'
			}]
		}
    });
    grunt.loadNpmTasks('grunt-contrib-copy');
};
