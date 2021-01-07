const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
    const files = [
        './dist/homeschool/runtime.js',
        './dist/homeschool/polyfills.js',
        './dist/homeschool/main.js',
    ]
    await fs.ensureDir('elements')
    await concat(files, 'elements/analytics-counter.js');
    await fs.copyFile('./dist/angular-elements/styles.css', 'elements/styles.css')
    await fs.copy('./dist/angular-elements/assets/', 'elements/assets/')
})()