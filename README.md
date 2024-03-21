# BSX Blocks – HowTo

This Plugin creates Markup for a compatible WordPress Theme (e.g. [BSX WordPress](https://github.com/ihniwiad/bsx-wordpress)) as custom Block Editor (Gutenberg) Blocks. It needs to include some of your Theme’s variables to be able to style it’s blocks in the WordPress backend. Therefore you need a `.env` file providing relative paths to your Theme in your workspace.


## Create `.env`

Example workspace setting (using publishing from workspace to WordPress):

```
...
  ┗ workspace
    ┗ my-project
      ┣ bsx-wordpress
      ┗ bsx-blocks
...
  ┗ htdocs
    ┗ my-projects-wordpress
      ┗ wp-content
        ┣ themes
        ┃ ┗ bsx-wordpress
        ┗ plugins
          ┗ bsx-blocks
```

You need the following variables:

* `FOLDER_NAME` ... Name of your Plugins folder in 
* `THEME_PACKAGE_PATH` ... Path to your compatible Theme folder
* `VARIABLES_PATH_AND_FILE` ... Path to your SCSS varibles file including file name (relative path inside your Theme folder)

Example:

```
FOLDER_NAME=bsx-blocks
THEME_PACKAGE_PATH=../../bsx-wordpress/
VARIABLES_PATH_AND_FILE=src/scss/variables
```

If you use a workspace outside your WordPress folder (as seen above) you will need to publish after building from workspace to your WordPress folder. Please add to `.env` so each build will publish automatic:

* `PUBLISH_PATH` ... Path to your WordPress Plugins folder

Example: 

```
PUBLISH_PATH=../../../../../../Applications/MAMP/htdocs/wordpress-testing/wp-content/plugins/
```

All of this Plugin’s files but `node_modules` will be copied to your WordPress plugins folder (as `bsx-blocks` folder) each time you build.

**NOTE:** Please take care since publishing will **delete** (and copy again) a folder **outside your workspace** each time you build or change.


## Install & build

* Run `npm install`
* Run `npm run build`
* Ignore `src/_sass-env.scss`, add to `.gitignore` (this file contains links to your Theme file, it has been auto-created using data from your `.env` file)


## Develop

* use `npm run start` to watch & build custom Block Editor blocks
* if using a workspace outside your WordPress folder, open another tab in your terminal and use `npm run watch` to publish your builds from workspace to your WordPress folder

