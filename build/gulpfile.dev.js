'use strict';

const gulp = require("gulp");
const path = require("path");

gulp.task("dev-server", function () {
  gulp.series("build");

  const browserSync = require("browser-sync").create();
  const output = path.resolve(__dirname, "../dist");
  browserSync.init({
      server: {
          baseDir: output,
      }
  });

  gulp.watch("./src/**/*", { delay: 200 }, gulp.series("build"));
  gulp.watch(`${output}/**/*`).on("change", browserSync.reload);
});