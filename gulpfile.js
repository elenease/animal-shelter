"use strict";

var gulp = require("gulp");
var less = require("gulp-less");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
var rename = require("gulp-rename");
var posthtml = require("gulp-posthtml");
// var minify = require("gulp-csso");
var htmlmin = require("gulp-htmlmin");
var run = require("run-sequence");
var del = require("del");
var include = require("posthtml-include");

gulp.task("style", function() {
  gulp.src("source/less/style.less")
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest("source/css"))
    .pipe(server.stream());
});

gulp.task("serve", ["style"], function () {
  server.init({
    server: "source/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });
  // gulp.watch("source/less/*.less", ["style"]);
  gulp.watch("source/less/**/*.less", ["style"]);
  gulp.watch("source/less/blocks/*.less", ["style"]);
  gulp.watch("source/*.html").on("change", server.reload);
});

gulp.task("clean", function () {
  return del("build");
});

gulp.task("copy", function () {
  return gulp.src([
    // "source/fonts/**/*.{woff,woff2}",
    "source/img/**",
    "source/js/**"
  ], {
      base: "source"
    })
    .pipe(gulp.dest("build"));
});

gulp.task("html", function () {
  return gulp.src("source/*.html")
    .pipe(posthtml([
      include()
    ]))
    .pipe(gulp.dest("build"));
});

gulp.task("build", function (done) {
  run(
    "clean",
    "copy",
    "style",
    "html",
    done);
});
