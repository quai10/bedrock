##Template update

###In [quai10-template](https://github.com/quai10/quai10-template)
 1. Tag a new version (in **master** branch) with a semantic versioning number (0.1.x)
 1. Push to GitHub

###In [bedrock](https://github.com/quai10/bedrock)
 1. `composer update`
 1. Commit the newly generated *composer.lock*
 1. Tag a new version (in **quai10** branch) with a **prefixed** semantic versioning number (quai-0.1.x)
 1. Push to GitHub

###On quai10.org
 1. Connect with *quai10* user (either directly or with `sudo -i -u`)
 1. `git pull`
 1. `composer install --no-dev`
