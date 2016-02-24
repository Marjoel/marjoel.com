module.exports = function(grunt) {
    'use strict';
	
    grunt.loadTasks('tasks/');
	
    grunt.registerTask	('prod',
							['clean:build',
								'less:build',
								'uglify:build',
								'copy:build',
								'imagemin:build',
								'replace:build',
								'htmlmin:build',
								'purifycss:build', 
								'csscomb:build',
								'cssmin:build' // using this because minify of purifycss is not working
							]
						);
	
	grunt.registerTask('dev', ['concurrent:dev']);
	
	grunt.registerTask('start', ['prod','connect:server:keepalive']);
};
