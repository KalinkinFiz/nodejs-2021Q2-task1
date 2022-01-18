## Node.js basics. Variant six CLI tool (CMD tool)

## Run app

```
$ git clone https://github.com/AndreyPrishivalko/nodejs-2021Q2-task1.git
```

```
$ cd nodejs-2021Q2-task1
```

```
$ npm i
```

### Usage example:

CLI tool accept 4 options (short alias and full name):

1.  -s, --shift: a shift
2.  -i, --input: an input file
3.  -o, --output: an output file
4.  -a, --action: an action formulaAsString/minimumNumber

Encode input.txt to output.txt with shift 7:

```
$ node cmd -s 7 -i "./input.txt" -o "./output.txt" -a formulaAsString
```

```
$ node cmd -s '[6, 5, 4, 3, 2, 1]' -i "./input.txt" -o "./output.txt" -a minimumNumber
```

Decode input.txt to output.txt with shift 7:

```
$ node cmd  --shift '[6, 5, 4, 3, 2, 1]' --input input.txt --output output.txt --action minimumNumber
```

Decode stdin to stdout with shift 7:

```
$ node cmd --action minimumNumber --shift '[6, 5, 4, 3, 2, 1]'
```
