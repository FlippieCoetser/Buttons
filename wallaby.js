module.exports = function(wallaby) {
    return {
        files: [
            "importmap.js",
            "src/**/*.ts",
            "node_modules/@browser-modules/dictionary/lib/**/*.js",
            "node_modules/@browser-modules/events/lib/**/*.js",
            "node_modules/@browser-modules/web.component/lib/**/*.js",
        ],
        tests: [
            "test/*.ts"
        ],
        filesWithNoCoverageCalculated: [
            'node_modules/@browser-modules/dictionary/lib/dictionary.js'
        ], 
        compilers: {
            '**/*.ts': wallaby.compilers.typeScript({
                "module": "es2020",
                "target": "es2020",
                "sourceMap": true,
                "inlineSources": true
            })
        }
    };
}