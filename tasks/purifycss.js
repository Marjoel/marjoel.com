module.exports = function(grunt) {
    'use strict';

	grunt.config('purifycss', {
    	build: {
			src: ['dist/*.html', 'project/assets/vendor/bootstrap/js/modal.js'],
			css: ['dist/assets/css/styles.min.css'],
			dest: 'dist/assets/css/styles.min.css'
		}
    });
    grunt.loadNpmTasks('grunt-purifycss');
};
