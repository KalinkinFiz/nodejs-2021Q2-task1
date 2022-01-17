## Node.js basics. variant eight CLI tool (CMD tool)

### Downloading and installing NPM modules

```
$ git clone https://github.com/zxcdead1nside/nodejs-2021Q2-task1.git
```

```
$ cd -cli-tool
```

```
$ npm i
```

### (optional) Installing the application as an NPM module

```
$ [sudo] npm i -g ./
```

### Usage example:

CLI tool accept 2 options:

1.  -s, --shift: a shift
2.  -a, --action: an action dashatize/strictEqual

Return a string with a hyphen under a certain condition:

```
$ [node] cmd -s 274 -a dashatize
```

Inversion of an array:

``` 
$ [node] cmd -s '[6, 5, 4, 3, 2, 1]' -a strictEqual
```
