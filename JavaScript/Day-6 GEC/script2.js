/**
var a=1;
let b=2;
{
    c=3;
    console.log("Inside a scope");
    console.log(a);
    console.log(b)
    console.log(c)
}
console.log("Outside a scope")
console.log(a)
console.log(b)
console.log(c)  */


// var a=1;
//     {
//         b=3;
//         console.log("Inside a scope")
//         console.log(a)
//         console.log(b)
//     }
// let b=2;     
// console.log("Outside a scope")
// console.log(a)
// console.log(b)





console.log("start");
var a = 1;
let b = 2;
const c = 3;

{
  var d = 40;
  b = 20;
  const c = 30;
  e = 40;
  console.log("Inside a scope");
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
  console.log(e);
}
console.log("Outside a scope");
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log("end");

