module.exports = function (grunt) {

    grunt.initConfig({
        jasmine_node: {
            options: {
                forceExit: true,
                match: '.',
                matchall: false,
                extensions: 'js',
                specNameMatcher: 'spec'
            },
            all: ['spec/MockSpec']
        }
    });

    grunt.loadNpmTasks('grunt-restful-mock');
    grunt.loadNpmTasks('grunt-jasmine-node');
    grunt.registerTask('test', ['jasmine_node']);
    grunt.registerTask('default', ['test']);

};