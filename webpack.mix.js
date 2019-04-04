let mix = require('laravel-mix');
require('laravel-mix-tailwind');

mix.js('app/vue/app.js', 'js/')
    .sass('app/sass/app.scss', 'css/')
    .tailwind()
    .setPublicPath('public/');

