module.exports = function(grunt) {
  grunt.initConfig({
     pkg: grunt.file.readJSON('package.json'),
 mock: {
    options: {
      // Task-specific options go here. 
    },
    your_target: {
      // Target-specific file lists and/or options go here. 
    },
  },
    jasmine : {
      src : 'src/**/*.js',
      options : {
        specs : 'spec/**/*.js'
      }
    }
 });

  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-restful-mock');
  grunt.registerTask('test', ['jasmine']);
  grunt.registerTask('default', ['test']);
};