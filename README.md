# intermix-plugin-template
A template for developers of intermix plugins

**Warning**: This is under heavy development. Don't use it until intermix v0.7.0 is out (which will be in mid September 2020).

**Very important warning**: We use redux as a dev dependency while we're in dev with a local intermix build. This should be removed asap!

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