#!/usr/bin/env node
let fs=require("fs")
const dir_files=require("../lib/index").dir_files;

dir_files(fs);