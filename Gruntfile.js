/*jslint node: true*/
module.exports = function (grunt) {
    'use strict';

    grunt.loadNpmTasks('grunt-jslint');
    grunt.loadNpmTasks('grunt-shipit');
    grunt.loadNpmTasks('shipit-git-update');
    grunt.loadNpmTasks('shipit-composer-simple');
    grunt.loadNpmTasks('grunt-jsonlint');

    grunt.initConfig({
        jslint: {
            Gruntfile: {
                src: 'Gruntfile.js'
            }
        },
        jsonlint: {
            manifests: {
                src: '*.json',
                options: {
                    format: true
                }
            }
        },
        shipit: {
            options: {
                servers: 'quai10@quai10.org',
                composer: {
                    noDev: true
                }
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

    grunt.registerTask('lint', ['jslint', 'jsonlint']);
    grunt.registerTask('staging', ['shipit:staging', 'update', 'composer:install']);
    grunt.registerTask('prod', ['shipit:prod', 'update', 'composer:install']);
};
