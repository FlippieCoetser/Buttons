#! /usr/bin/env node
import del from './del.mjs'
del(['./lib/*.js', './lib/*.d.ts','./lib/utilities/*.js','./lib/utilities/*.d.ts']);
