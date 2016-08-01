/*jslint node: true*/
module.exports = function (grunt) {
    'use strict';

    grunt.loadNpmTasks('grunt-jslint');
    grunt.loadNpmTasks('grunt-shipit');

    grunt.initConfig({
        jslint: {
            Gruntfile: {
                src: 'Gruntfile.js'
            }
        },
        shipit: {
            quai10: {
                servers: 'quai10@quai10.org'
            }
        }
    });

    grunt.registerTask('lint', ['jslint']);
    grunt.registerTask('pull:staging', function () {
        grunt.shipit.remote('cd public_html/preprod/; git pull; composer install --no-dev', this.async());
    });
    grunt.registerTask('pull:prod', function () {
        grunt.shipit.remote('cd public_html/wordpress/; git pull; composer install --no-dev', this.async());
    });
    grunt.registerTask('staging', ['shipit:quai10', 'pull:staging']);
    grunt.registerTask('prod', ['shipit:quai10', 'pull:prod']);
};
