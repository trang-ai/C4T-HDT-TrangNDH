var a = [1,2,3,4,5,6,5]
// console.log(a[0]);
// console.log(a.length)
//console.log(a.indexOf(5))
// var menu = ["A","B"]

// add item to array
var arr = ["a","b","c","d","e"];
arr.push("f");
console.log(arr)

// delete  item 
var b = ["a","b","c","d"];
var c = b.indexOf("a")
delete b[c];
console.log(b)
//delete item
var e = [1,2,3,4,5,6,7];
e.splice(2,1);
console.log(e)

// replace item
var d= [1,2,3,4,5];
d.splice(2,2,8,9);
console.log(d)
// change item
var f=[1,2,3,4,5];
f[0]= 100;
console.log(f)

//arr.exercise2.2
var hobbies=["a","b","c"];
hobbies.push("d")
console.log(hobbies)

//arr.exercise2.3
var hobby=["a","b","c"];
var d= prompt("Enter a hobby");
hobby.push(d);
console.log(hobby)

//arr
