# AngularMxGraphDemo

This project shows how to integrate mxGraph to Angular 10 project
following this post on stackoverflow.com

https://stackoverflow.com/questions/49922708/how-to-integrate-mxgraph-with-angular-4


## How to use

### This project require a custom build of mxGraph library, follow this instruction to clone mxgraph

```
$ cd AngularMxGraphDemo
$ git clone https://github.com/ViksYelapale/mxgraph2
$ cd mxgraph2
$ npm install
$ cd ../demoapp
$ npm install --save ../mxgraph2
$ npm install --save lgleim/mxgraph-typings 
$ npm install

```

After this step complete, mxgraph2 folder should be at the same level as demoapp

# Then run the demo app 
```
$ cd ../demoapp
$ npm install
$ npm start
```

# Keep mxgraph up to date

Add upstream repository to the official github repo
```
$ git remote add upstream https://github.com/jgraph/mxgraph
```

Fetch latest changes
```
$ git fetch --all
```

# TODO
Examples of mxgraph are in javascript
I'll keep adding more example when I successfully convert them to typescript.
