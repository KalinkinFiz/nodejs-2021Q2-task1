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

# formulaAsString is a function that takes an integer n and returns the formula for (a + b)^2 as a string.
# minimumNumber is a function that finds the minimum number to insert into a list so that the sum of all the elements in the list is equal to the nearest prime number.

An example of the formulaAsString function that takes a parameter from the console and outputs the result as a line of text to a output.txt file:

```
$ [node] cmd -s 0 -i "./input.txt" -o "./output.txt" -a formulaAsString
```
```
$ [node] cmd -s 1 -i "./input.txt" -o "./output.txt" -a formulaAsString
```
```
$ [node] cmd -s 2 -i "./input.txt" -o "./output.txt" -a formulaAsString
```
```
$ [node] cmd -s -2 -i "./input.txt" -o "./output.txt" -a formulaAsString
```
```
$ [node] cmd -s 3 -i "./input.txt" -o "./output.txt" -a formulaAsString
```
```
$ [node] cmd -s 5 -i "./input.txt" -o "./output.txt" -a formulaAsString
```


# An example of the minimumNumber function, which takes as a parameter the contents of the entire input.txt file and outputs the result to the output.txt file:

```
$ [node] cmd  -s '[50, 39, 49, 6, 17, 28]' -i input.txt -o output.txt -a minimumNumber
```

# An example of the minimumNumber function that takes a json encoded array from the console until the user presses CTRL+C to exit: '[3,1,2]':

```
$ node cmd --action minimumNumber --shift '[3,1,2]'
```
