module.exports = function(grunt) {
    'use strict';

	grunt.config('less', {
		build: {
			options: {
				compress: true,
				cleancss: true,
				yuicompress: false,
				optimization: 2
			},
			files: {
				'dist/assets/css/styles.min.css': [
					'project/assets/vendor/sanitize-css/dist/sanitize.min.css',
					'project/assets/vendor/bootstrap/less/bootstrap.less',
					'project/assets/vendor/font-awesome/less/font-awesome.less',
					'project/assets/vendor/roboto-fontface/css/roboto-fontface.less',
					'project/assets/css/base/variables.less',
					'project/assets/css/base/base.less',
					'project/assets/css/elements/*.less',
					'project/assets/css/components/*.less'
				]
			}
		}
    });
    grunt.loadNpmTasks('grunt-contrib-less');
};
