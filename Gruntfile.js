/*jslint node: true*/
module.exports = function (grunt) {
    'use strict';

    grunt.loadNpmTasks('grunt-jslint');
    grunt.loadNpmTasks('grunt-shipit');
    grunt.loadNpmTasks('shipit-git-update');

    grunt.initConfig({
        jslint: {
            Gruntfile: {
                src: 'Gruntfile.js'
            }
        },
        shipit: {
            options: {
                servers: 'quai10@quai10.org',
                postUpdateCmd: 'composer install --no-dev'
            },
            staging: {
                deployTo: '/home/quai10/public_html/preprod/',
                branch: 'develop'
            },
            prod: {
                deployTo: '/home/quai10/public_html/wordpress/',
                branch: 'master'
            }
        }
    });

    grunt.registerTask('lint', ['jslint']);
    grunt.registerTask('staging', ['shipit:staging', 'update']);
    grunt.registerTask('prod', ['shipit:prod', 'update']);
};
