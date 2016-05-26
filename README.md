#### laravel-html5
Laravel , HTML5 , Gulp and Sass Boilerplate


#### Quick start

Clone the git repo — ```git clone https://github.com/jomaf1010/laravel-html5.git```

Change directory ``` cd laravel-html5```

Issue the following commands
```
composer install
npm install
bower install
```
Create your ```.env``` file or copy ```env.example``` to ```.env``` file


Currently task runner only support development mode

```
gulp devmode
```

##### File structure
```
/app
/bootstrap
/config
/database
/deploy
/public
  /assets <--- this is where all static files will be copied
  favicon.ico
  index.php
  web.config
/resources
  /assets
    /css <-- scss imports
    /fonts <-- fonts resources
    /images <--- images resources
    /js <--- javascript imports 
    /lib <--- all your javascript codes here
    /sass <--- all your sass codes here
    /vendor <--- all bower components resides here
  /lang
  /views
    /errors
    /landing <--- default pages here
    /partials <--- blade partials
    /templates <-- site main templates
    /vendor
/storage
/tests
/vendor
composer.json
gulpfile.js
packages.json <-- npm and 
bower.json
```
  




