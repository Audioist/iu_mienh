# iu_mienh

#Brand Book

#Style Guide

#CSS
This project is using SASS to preprocess all .css files.
 - Build css: npm `node-sass-chokidar`
 - Watch css: npm `build css`
See package.json for info about versions and more.
 - files imported using relative paths.
 ```
``import "../styles/_colors.scss";
```
 - css files are ignored in version control.
 - `run watch-css` is executed automatically with `npm start` and `run build-css` as a part of `npm run build`.