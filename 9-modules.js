const {john, peter } = require('./4-names');
const { sayHi } = require('./5-utils');
const data = require('./6-alternative-flavor');
console.log(data);
sayHi('susan');
sayHi(john);
sayHi(peter);