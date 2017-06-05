"use strict";

const gulp = require('gulp');
// js压缩插件
const uglify = require('gulp-uglify');
// 合并的插件
const concat = require('gulp-concat');
// css插件
const cssnano = require('gulp-cssnano');
// html插件
const htmlmin = require('gulp-htmlmin');

// 第一个参数是任务名(随便起),第二个参数是回调函数
// js文件压缩
gulp.task('script',function(){
    // 文件入口
    gulp.src('./src/index.js')
    // 管道(过滤器)
    .pipe(uglify())
    // 文件出口
    .pipe(gulp.dest('./dist'))
})
// css文件压缩、合并
gulp.task('css',function(){
    gulp.src(['./css/base.css','./css/index.css'])
    .pipe(concat('index.css'))
    .pipe(cssnano())
    .pipe(gulp.dest('./dist'))
})

// html文件压缩
gulp.task('html',function(){
    gulp.src('./index.html')
    .pipe(htmlmin({collapseWhitespace:true,minifyJS:true,minifyCSS:true}))
    .pipe(gulp.dest('./dist'))
})

// watch监听文件的变化
// 第一个参数是监听的文件名，第二个参数任务名
gulp.task('watch',function(){
    gulp.watch(['./index.html','./css','./src/index.js'],['script','css','html'])
})

// run方法
gulp.task('run',function(){
    gulp.run('script','html','css')
})



