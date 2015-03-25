module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    //--------------------------------------
    // Sass Task
    //--------------------------------------
    sass: {                              // Task 
        dist: {                            // Target 
          options: {                       // Target options 
            style: 'compressed'
          },
          files: {                         // Dictionary of files 
            '_statics/web/assets/styles/screen.css': '_statics/src/assets/styles/screen.scss'  // 'destination': 'source' 
          }
        },

        // Flag for Theme task
        theme: {
            files: {                         // Dictionary of files 
            'theme/assets/styles/screen.css': '_statics/src/assets/styles/screen.scss'  // 'destination': 'source' 
          }
        }
    },

    //--------------------------------------
    // Clean Task
    //--------------------------------------
    clean: {
        dist: {
            src: ["_statics/web/assets/**",
                  '_statics/web/*.html']
        },

        theme: {
            src: ["theme/assets/**"]
        }
    },

    //--------------------------------------
    // Copy Assets Task
    //--------------------------------------
    copy: {
        dist: {
            files: [{
                expand: true,
                cwd: '_statics/src',
                src: ['assets/images/**',
                      'assets/scripts/**/*.js'],
                dest: '_statics/web'
            }]
        },

        theme: {
            files: [{
                expand: true,
                cwd: '_statics/src',
                src: ['assets/images/**',
                      'assets/scripts/**/*.js'],
                dest: 'theme'
            }]
        },
    },

    includes: {
        build: {
            cwd: '_statics/src',
            src: [ '*.html'],
            dest: '_statics/web/'
        }
    }

  });

    if (grunt.option('all')) {
        // Run `grunt --all`
        grunt.registerTask('default', ['theme']);
    }

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-includes');

  // Default task(s).
  grunt.registerTask('default', ['clean:dist', 'copy:dist', 'sass:dist', 'includes']);
  grunt.registerTask('theme', ['clean:theme', 'copy:theme', 'sass:theme']);

};