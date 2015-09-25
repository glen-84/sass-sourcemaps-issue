import gulp from "gulp";
import sourcemaps from "gulp-sourcemaps";
import sass from "gulp-sass";

let cssSrc = "src/**/*.scss";
let cssDest = "dist";

gulp.task("default", () => {
    return gulp.src(cssSrc)
        .pipe(sourcemaps.init({debug: true}))
        .pipe(sass().on("error", sass.logError))
        .pipe(sourcemaps.write(".", {debug: true}))
        .pipe(gulp.dest(cssDest));
});