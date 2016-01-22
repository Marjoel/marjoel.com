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
					'project/assets/bower_components/sanitize-css/dist/sanitize.min.css',
					'project/assets/bower_components/bootstrap/less/bootstrap.less',
					'project/assets/bower_components/font-awesome/less/font-awesome.less',
					'project/assets/bower_components/roboto-fontface/css/roboto-fontface.less',
					'project/assets/css/components/base/variables.less',
					'project/assets/css/components/base/base.less',
					'project/assets/css/components/elements/*.less',
					'project/assets/css/components/components/*.less'
				]
			}
		}
    });
    grunt.loadNpmTasks('grunt-contrib-less');
};