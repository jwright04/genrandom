# GenRandom
[![travis build](https://img.shields.io/travis/jwright04/genrandom.svg?style=flat-square)](https://travis-ci.org/jwright04/genrandom/builds)
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](https://en.wikipedia.org/wiki/MIT_License)
[![codecov](https://codecov.io/gh/jwright04/genrandom/branch/master/graph/badge.svg)](https://codecov.io/gh/jwright04/genrandom)
[![version](https://img.shields.io/npm/v/genrandom.svg?style=flat-square)](http://npm.im/genrandom)
[![downloads](https://img.shields.io/npm/dm/genrandom.svg?style=flat-square)](http://npm-stat.com/charts.html?package=genrandom&from=2016-08-11)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)




## Description

genrandom (generate random) is a (numeric or alpha numeric) generator by length and segments — Edit

### Installation

```
npm install genrandom --save
```


### Import
```
import { rNumber, rNumChar } from 'genrandom'
```

### Usage Examples
#### Return a random number n characters long
```
rNumber(10) // <= 8210706073
```

```
typeof rNumber(10) // <= number
```

#### Return a string of random numbers with multiple segments
```
rNumber(3, 3, 10) // <= 615-807-8046602819
```

```
typeof rNumber(3, 3, 10) // <= string
```
#### Return a string containing numbers and characters
```
rNumChar(10) // <= wUDMJd1BRH
```

```
typeof rNumChar(10) // <= string
```

#### Return a string containing numbers and characters with multiple segments
```
rNumChar(10, 2, 3) // <= mW13MGs4Vh-pq-Itb
```

```
typeof rNumChar(10, 2, 3) // <= string
```

#### Return a string containing characters only
```
rChar(5) // <= JdgBR
```

```
typeof rChar(5) // <= string
```

#### Return a string containing characters with multiple segments
```
rChar(5, 6, 3) // <= izMEm-TmeOFQ-JPH
```

#### Return a string containing letters, numbers, and symbols
```
rNumCharSymbol(5) // <= 8V!<#
```

#### Return a string containing letters, numbers, and symbols with segments
```
rNumCharSymbol(5, 8, 12) // <= +<GPE-OHf3aS&&-kh)@IhYVdD2}
```

### Using genrandom in a browser
Include the genrandom script into your html:

```
'<script src="https://unpkg.com/genrandom/dist/genrandom.umd.js"></script>'
``` 

or use the minified version

```
'<script src="https://unpkg.com/genrandom/dist/genrandom.umd.min.js"></script>'
```

Call it:

```
'<script>
     var newRandomNumber = genrandom.rNumber(10, 5, 8);
     console.log("Random Number", newRandomNumber); // <= 2374867366-80085-23113014
</script>'
```

### Coming...
Random Name Generation


### Improvements and Bugs
If you find any issues or see something that can be improved?
<https://github.com/jwright04/genrandom/issues>


### License
MIT
