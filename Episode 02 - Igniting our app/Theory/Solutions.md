## `Theory assignment solution :`

## What is `NPM` ?

NPM is like a tool that helps developers to manage the packages, it's like a big collection of tools and building blocks that makes it easier to create a cool stuff on the internet.
PS: `Node package manager is not a full form of NPM` (It stands for anything but not a abbreviation for node package manager)

## What is `Parcel/Webpack`? Why do we need it?

- `parcel`: Parcel is a tool that helps web developers bundle all the different files and code for a website or app together in a way that makes it faster to load and run. It's really easy to set up and works well for simple projects.

- `Webpack`: Webpack is another tool that does a similar job but gives developers more control over how things are bundled. It's more powerful and flexible, which makes it a good choice for complex projects where customization is important.

## What is `.parcel-cache`?

`.parcel-cache` is used by parcel(bundler) to reduce the building time. It stores information about your project when parcel builds it, so that when it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch. It's a key reason why parcel can be so fast in development mode.

## What is `npx` ?

`npx` is a tool that is used to execute the packages. It comes with the npm, when you installed npm above 5.2.0 version then automatically npx will installed. It is an npm package runner that can execute any package that you want from the npm registry without even installing that package.

## What is `difference` between `dependencies` vs `devDependencies`

`Dependencies` should contain library and framework in which your app is built on, needs to function effectively. such as `Vue`, `React`, `Angular`, `Express`, `JQuery` and etc. `DevDependencies` should contain modules/packages a developer needs during development. such as, `parcel`, `webpack`, `vite`, `mocha`. These packages are necessary only need while you are developing your project, not necessary on production.

## What is `Tree Shaking`?

`Tree shaking` is process of removing the unwanted code that we do not use while developing the application. In computing, tree shaking is a dead code elimination technique that is applied when optimizing code.

## What is `Hot Module Replacement`?

`HMR` is designed to make the development process smoother and more efficient by allowing you to see changes in your code immediately without having to manually refresh the entire page.

## List down your `favorite 5 superpowers of Parcel` and `describe any 3` of them in your own words.

`superpowers of parcel`:
- `HMR (Hot module replacement)` - parcel allows to see changes in the code immediately without having to manually refresh the entire page.
- `Diagnostic` - parcel make errors looks beautiful with some color and it indicates the exact line where the error is occured.
- `Tree shaking` - parcel removes the unwanted code(dead code) that we do not use while developing the application.
- `Image optimization`
- `Differential bundling`

## What is `.gitignore`? What should `we add` and `not add` into it?

`gitignore` is a text file that holds which files or folders needs to be ignored in a project during commit to the repository. any files or folder that can be regenerated in our app needa to be added in the `gitignore` file, `package.json` and `package-lock.json` files should not be included in the gitignore file.

The entries in this file can also follow a matching pattern.
```
* is used as a wildcard match
/ is used to ignore pathnames relative to the .gitignore file
# is used to add comments to a .gitignore file
```
This is an example of what the .gitignore file could look like:
```
# Ignore Mac system files
.DS_store

# Ignore node_modules folder
node_modules

# Ignore all text files
*.txt

# Ignore files related to API keys
.env

# Ignore SASS config files
.sass-cache
```

## What is the `difference` between `package.json` and `package-lock.json`

- `package.json` : file constains the basic information of the project in JSON format, for ex: name, author, version, description etc..

- `package-lock.json` : file maintains all the version of the data which has been upgrated and It records the same version of the installed packages which allows to reinstall them. Future installs will be capable of building identical description tree.

## Why should I not modify `package-lock.json`?

The file contains the information about the dependencies and their versions used in the project. Deleting it would cause dependencies issues in the production environment. So don't modify it, It's being handled automatically by NPM.

## What is `node_modules` ? Is it a `good idea to push that on git`?

When you run npm install they are downloaded from the web and copied into the node_modules folder and Nodejs is trained to look for them there when you import them (without a specific path). `Don't push node_modules` in github because it contains lots of files(more than 100 MB), it will cost you memory space.

## What is the `dist` folder?

The `/dist` folder contains the minimized version of the source code. The code present in the `/dist` folder is actually the code which is used on production web applications. Along with the minified code, the `/dist` folder also comprises of all the compiled modules that may or may not be used with other systems.

## What is `browserlists`?

`Browserlist `is a tool that allows to us tell react that what are the browser that our project/app should support, for that we need to modify `package.json`.

`Ex`: 

In the package.json we need to modify like below: 

```
"browserslist" : [
    "last 2 version"  
]
```

- PS : it always good to mention like `"last 2 version" `so it will support all the browsers for the last 2 versions
