//EX1_ARRAY
var a= [1,2,3,4,5];
a.push(7);
console.log(a);
a.splice(0,1);
console.log(a);
a[0]=9;
console.log(a);

//EX2_OBJECT
var b= {name: "Linh",
        age: 22,
        FavMov: "Parasite"};
b.FavMov = "Jurassic World";
// OR b["FavMov" = "Jurassic World"];
console.log(b);

