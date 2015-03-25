# Basic Project Example

> Example of using grunt to disperse assets

## Installation

```
1. Clone the repo
2. run 'npm install' in your command line to install grunt plugins. You will probably need your npm command line for Windows
3. run 'grunt' in your command line to build the project.

```

### Grunt Commands

```
+ grunt : will build your _static project
+ grunt theme : will disperse your _static assets to your theme directory
+ grunt --all : will run both tasks at the same time

```

### Directories

_statics            // static version of the site
----/src            // precompiled source code
--------/assets     // site assets
--------/includes   // html includes

----/web            // compiled version of statics. Doesn't include .scss or html includes

----/theme         // theme templates/asset files for whatever CMS you're working in