require( 'dotenv' ).config();
const envConfig = process.env;

const gulp          = require( 'gulp' );
const { series, parallel } = require( 'gulp' );
const rename        = require( 'gulp-rename' );
const clean         = require( 'gulp-clean' );
const watch         = require( 'gulp-watch' );
const replace       = require( 'gulp-string-replace' );
const fs            = require( 'fs' );


const paths = {
    themePathReplace: {
        src: 'src/',
        dest: 'src/',
        fileName: '_sass-env-default.scss',
        renamedFileName: '_sass-env.scss'
    },
    publish: {
        watchSrc: [ 'build/**/*.js', 'build/', 'plugin.php', 'src/**/*.php' ],
    },
};


// PUBLISH HOWTO: 
// If you like to copy your files to another folder after build make 
// `.env` file with content 
// `PUBLISH_PATH=path_to_your_folder` ...e.g. `PUBLISH_PATH=../../../../../Applications/MAMP/htdocs/wordpress-testing/wp-content/plugins/`
// `THEME_PACKAGE_PATH=path_to_your_theme_workspace_folder` ...e.g `THEME_PACKAGE_PATH=../bsx-wordpress/`
// `VARIABLES_PATH_AND_FILE=path_inside_your_theme_to_your_scss_valiables` ...e.g. `VARIABLES_PATH_AND_FILE=src/scss/variables`
// Have a look at `publishConfig` which files to include / exclude
// and how to name your created destination folder
// 
// NOTE: within `src` all (1..n) non-negative globs must be followed by (0..n) only negative globs
const publishConfig = {
    "src": [
        "**/*",
        "!**/node_modules",
        "!**/node_modules/**", 
    ],
    "base": ".",
    "folderName": envConfig.FOLDER_NAME
};


// scss replace path to theme package
const PATH_REPLACE_PATTERN = /###THEME_PACKAGE_PATH###/g;
const VARIABLES_REPLACE_PATTERN = /###VARIABLES_PATH_AND_FILE###/g;

const themePackagePathReplace = ( cb ) => {

    return gulp.src( paths.themePathReplace.src + paths.themePathReplace.fileName )
        .pipe( replace( PATH_REPLACE_PATTERN, envConfig.THEME_PACKAGE_PATH ) )
        .pipe( replace( VARIABLES_REPLACE_PATTERN, envConfig.VARIABLES_PATH_AND_FILE ) )
        .pipe( rename( paths.themePathReplace.renamedFileName ) )
        .pipe( gulp.dest( paths.themePathReplace.dest ) )
    ;

    cb();
}

exports.replace = series(
    themePackagePathReplace,
);


// NOTE: take care at this path since you’re deleting files outside your project
const publishFullPath = envConfig.PUBLISH_PATH + ( envConfig.PUBLISH_PATH.substr( envConfig.PUBLISH_PATH.length - 1 ) == '/' ? '' : '/' ) + publishConfig.folderName;


const publishFolderDelete = ( cb ) => {

    if ( !! envConfig.PUBLISH_PATH && !! publishConfig.folderName ) {
        console.log( 'delete: ' + publishFullPath );
        return gulp.src( publishFullPath, { read: false, allowEmpty: true } )
            .pipe( clean( { force: true } ) ) // NOTE: take care at this command since you’re deleting files outside your project
        ;
    }
    else {
        // do nothing
    }

    cb();
}

const publishFolderCreate = ( cb ) => {

    if ( !! envConfig.PUBLISH_PATH && !! publishConfig.folderName ) {
        // console.log( 'create: ' + publishFullPath + ' (src: ' + publishConfig.src + ', base: ' + publishConfig.base + ')' );
        console.log( 'create: ' + publishFullPath );
        return gulp.src( publishConfig.src, { base: publishConfig.base } )
            .pipe( gulp.dest( publishFullPath ) )
        ;
    }
    else {
        // log note, do nothing
        console.log( 'Note: No publishing done since publish configuration empty.' );
    }

    cb();
}

const publish = series(
    // copy all project but `node_modules` to configured dest
    publishFolderDelete,
    publishFolderCreate,
);

exports.publish = publish;


exports.build = series(
    themePackagePathReplace,
    publish,
);


function allWatch() {
    gulp.watch( paths.publish.watchSrc, publish );
}

exports.watch = allWatch;


const justTest = ( cb ) => {
    console.log( 'Gulp test :)' );

    cb();
}

exports.test = series(
    justTest,
);