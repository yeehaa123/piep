module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      api: {
        src: 'api/**/*.js'
      },
      migrations: {
        src: 'migrations/*.js'
      },
      seeds: {
        src: 'seeds/*.js'
      }
    }
  });

  grunt.registerTask('default', 'An alias of test', ['test']);

  grunt.registerTask('test', 'Lint the Javascript', [
    'jshint'
  ]);
};
