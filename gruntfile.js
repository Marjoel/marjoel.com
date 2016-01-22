module.exports = function(grunt) {
    'use strict';
	
    grunt.loadTasks('./tasks');
	
	grunt.registerTask('dev', ['concurrent:dev']);
	
    grunt.registerTask	('prod',
							['clean:build',
								'less:build',
								'uglify:build',
								'copy:build',
								'replace:build',
								'htmlmin:build',
								'purifycss:build', 
								'cssmin:build' // using this because minify of purifycss is not working
							]
						);
};
