"use strict";

/* File: gulpfile.js */

// grab our gulp packages
var gulp = require("gulp");
var babel = require("gulp-babel");
var gutil = require("gulp-util");
var nodemon = require("gulp-nodemon");
var path = require("path");
//globs paths
const paths = {
  js: ["./**/*.js", "!dist/**", "!node_modules/**"]
};

gulp.task("default", ["server"], function () {
  gutil.log("Server files built");
});

gulp.task("babel", function () {
  return gulp.src(paths.js, { base: "." }).pipe(babel()).pipe(gulp.dest("dist"));
});

gulp.task("server", ["babel"], function () {
  nodemon({
    script: path.join("dist/src", "index.js"),
    ext: "js",
    ignore: ["node_modules/**/*.js", "dist/**/*.js"],
    tasks: ["babel"]
  });
});