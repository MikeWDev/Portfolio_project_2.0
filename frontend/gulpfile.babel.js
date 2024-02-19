const { src, dest, watch, series } = require("gulp");

const sass = require("gulp-sass")(require("sass"));

function buildStyles() {
  return src("./src/Styles/App.scss")
    .pipe(sass())
    .pipe(dest("./src/Styles/Css"));
}

function watchTask() {
  watch(["./src/Styles/app.scss"], buildStyles);
}

exports.default = series(buildStyles, watchTask);
