const { src, dest, watch, series } = require("gulp");

const sass = require("gulp-sass")(require("sass"));

function buildStyles() {
  return src("./src/Scss/App.scss").pipe(sass()).pipe(dest("./src/Scss/Css"));
}

function watchTask() {
  watch(["./src/**/*.scss"], buildStyles);
}

exports.default = series(buildStyles, watchTask);
