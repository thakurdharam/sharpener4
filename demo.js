// By using call

// var obj = {num : 2};

// var addToThis = function(a){

// 	return this.num + a;

// };

// console.log(addToThis.call(obj,3));



// By using apply

// var obj = {num : 2};

// var addToThis = function(a,b,c){

// 	return this.num + a+b+c;

// };

// var arr = [1,2,3];

// console.log(addToThis.apply(obj,arr));



// By using bind

// var obj = {num : 2};

// var addToThis = function(a,b,c){

// 	return this.num + a+b+c;

// };

// var arr = [1,2,3];

// var bound = addToThis.bind(obj);

// console.log(bound(1,2,3));



// Student with age 20

var student = {age : 20};

var addToThis = function(a){

	return this.age + a;

};

console.log(addToThis.call(student,0));