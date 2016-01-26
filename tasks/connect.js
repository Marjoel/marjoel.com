module.exports = function(grunt) {
    'use strict';

	grunt.config('connect', {
    	server: {
			options: {
				port: 1992,
				base: 'dist/'
			}
		}
    });
    grunt.loadNpmTasks('grunt-contrib-connect');
};