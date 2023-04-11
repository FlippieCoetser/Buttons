#! /usr/bin/env node
import del from './del.mjs'
del(['./src/*.js', './src/*.map','./src/utilities/*.js','./src/utilities/*.map','./src/templates/*.js','./src/templates/*.map']);
del(['./test/*.js', './test/*.map']);
