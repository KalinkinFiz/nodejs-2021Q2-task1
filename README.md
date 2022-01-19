## Node.js basics. Variant three CLI tool (CMD tool)

## Run app

```
$ git clone https://github.com/EgorPavlovich/nodejs-2021Q2-task1/tree/VariantThree
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
4.  -a, --action: an action dup/sortOddsOnly

#### Read an array from an input.txt file by converting the array using a dup function and outputting the result to output.txt:

```
$ [node] cmd -i "./input.txt" -o "./output.txt" -a dup
```

#### Read an array from an input.txt file by converting the array using a sortOddsOnly function and outputting the result to output.txt:

```
$ [node] cmd --input input.txt --output output.txt --action sortOddsOnly
```

#### Reading an array from the console and transforming it with a dup function and outputting the result to the console:

```
$ [node] cmd --action dup
```

#### Reading an array from the console and transforming it with a sortOddsOnly function and outputting the result to the console:

```
$ [node] cmd --action sortOddsOnly
```
