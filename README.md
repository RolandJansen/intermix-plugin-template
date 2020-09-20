# intermix-plugin-template
A template for intermix plugin development.

**Warning**: This is under heavy development. Don't use it until intermix v0.7.0 is out (which will be in late September 2020).

**Very important warning**: We use redux as a dependency while we're in dev with a local intermix build. It WILL NOT WORK at this point without a local intermix npm package from the intermix master branch!

## Install

This is a template repository. You can either build another clean repository from it or do a fork (which is not how it's ment to be used but you can do it).

## Adaption

This should be changed:

* License (at least copyright infos)
* package.json (everything before *scripts*)
* Plugin class should be renamed, also in the index.ts
* README should be replaced

## Usage

To build your plugin just type

    npm run build

after this a bundled version should be present in the *dist/* folder.