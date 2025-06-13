# BSX Blocks 2.0 (Multiple Blocks Plugin) – HowTo

This Plugin creates Markup for a compatible WordPress Theme (e.g. [BSX WordPress](https://github.com/ihniwiad/bsx-wordpress)) as custom Block Editor blocks (Gutenberg). It needs to include some of your Theme’s variables to be able to style it’s blocks in the WordPress backend. Therefore you need a `.env` file providing relative paths to your Theme.

This plugin is a *new version* of the older plugin [BSX Blocks](https://github.com/ihniwiad/wp-multi-block-plugin/)

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
    ┗ my-project-wordpress-folder
      ┗ wp-content
        ┣ themes
        ┃ ┗ bsx-wordpress
        ┗ plugins
          ┗ bsx-blocks
```

You need the following variables:

* `FOLDER_NAME` ... Name of your Plugins folder inside the WordPress Plugins folder
* `THEME_PACKAGE_PATH` ... Path to your compatible Theme folder
* `VARIABLES_PATH_AND_FILE` ... Path to your SCSS varibles file including file name (relative path inside your Theme folder)

Example:

```
FOLDER_NAME=bsx-blocks
THEME_PACKAGE_PATH=../../bsx-wordpress/
VARIABLES_PATH_AND_FILE=src/scss/variables
```

If you use a workspace outside your WordPress folder (as seen above) you will need to publish your files after each build from workspace to your WordPress Plugins folder. Please add `PUBLISH_PATH` to your `.env` so each build can publish automatically.

* `PUBLISH_PATH` ... Path to your WordPress Plugins folder

Example: 

```
PUBLISH_PATH=../../../../../../Applications/MAMP/htdocs/my-project-wordpress-folder/wp-content/plugins/
```

All your Plugin’s files except the `node_modules` will be copied to your WordPress Plugins folder (named as `bsx-blocks` folder) each time you build.

**NOTE:** Please take care at your `PUBLISH_PATH` since publishing will **delete** (before copying again) a folder **outside your workspace**.


## Install & build

* Run `npm install`
* Run `npm run build`
* Ignore `src/_sass-env.scss`, add to `.gitignore` (this file contains links to your Theme file, it has been auto-created using data from your `.env` file)


## Develop

* Use *Node 16* (`nvm use 16`).
* Use `npm run start` to watch & build your Block Editor blocks.
* If using a workspace outside your WordPress Plugins folder, open another tab in your terminal and use `npm run watch` to watch and publish your builds from workspace to your WordPress folder (for manual publish use `npm run publish`).


## Versions

### 0.1.7

* Added Block *Accordion* with *Accordion Item*.
* Added custom appender to Block *Icon List*.
* Updated `caniuse-lite`.

### 0.1.6

* Removed empty Block scripts.

### 0.1.4

* Fixed WordPress deprecations (CSS including event, removed `onSplit`).
* Fixed Block *Section* `section` (template selection).
* Multiple small fixes.

### 0.1.3

* Fix for **WordPress 6.7.1** (missing Theme styles in Block Editor).
* New Block *Background Text* `bg-text` (multiline text with colored background).
* Fixed Blocks *Rows* `column-rows` & *Row* `column-row`.

### 0.1.2

* Added deprecation migration for Block *Lazy Image* `lazy-img` from v2 to v3.
* Updated `browserlist/caniuse`.

### 0.1.1

* Fixed Blocks *Button* `button` & *Wrapper* `wrapper`.
