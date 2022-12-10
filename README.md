# Typescript Template
Bundle free typescript template used to create a browser compatible es6 module, including unit tests and documentation.

### importmappings

check files for importmappings:

1. `wallaby.js`

```js
files: [
    "importmap.js",
    "src/**/*.ts",
    "node_modules/@browser-modules/dictionary/lib/**/*.js",
    "node_modules/@browser-modules/events/lib/**/*.js",
    "node_modules/@browser-modules/web.component/lib/**/*.js",
]
```

2. `importmap.js`

```js
imports: {
    "@browser-modules/dictionary":
        "./node_modules/@browser-modules/dictionary/lib/dictionary.js",
    "@browser-modules/events":
        "./node_modules/@browser-modules/events/lib/events.js", 
    "@browser-modules/web.component":
        "./node_modules/@browser-modules/web.component/lib/component.js"
}
```

3. `karma.config.js`
```js
files: [
    { pattern: "importmap.js"},
    { pattern: "./node_modules/@browser-modules/dictionary/lib/**/*.js", type: "module" },
    { pattern: "./node_modules/@browser-modules/events/lib/**/*.js", type: "module"},
    { pattern: "./node_modules/@browser-modules/web.component/lib/**/*.js", type: "module"},
]
```