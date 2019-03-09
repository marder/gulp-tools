# gulp-tools

## Installation

```bash
npm install --save-dev @rammbulanz/gulp-tools
# or
yarn add --dev @rammbulanz/gulp-tools
```


## Use

```javascript

const { litHtml, litCss } = require("@rammbulanz/gulp-tools");

gulp.task("build:css", function () {
    return gulp.src('*.css')
        .pipe(litCss())
        .pipe(gulp.dest('.'));
});

```