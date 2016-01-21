module.exports = function(grunt) {
    'use strict';

	grunt.config('replace', {
    	build: {
			src: ['dist/assets/css/styles.min.css'],
            overwrite: true,
            replacements: [{
				from: '../fonts/fontawesome',
				to: '/assets/fonts/font-awesome/fontawesome'
			},
			{
				from: '?v=4.5.0',
				to: ''
			},
			{
				from: '../fonts/Roboto-',
				to: '/assets/fonts/font-roboto/Roboto-'
			}]
		}
    });
    grunt.loadNpmTasks('grunt-text-replace');
};

