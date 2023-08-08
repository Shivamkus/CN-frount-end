// var a = 10;
// var b =34;
// var c = a+b;
// console.log(c);

function element(){
    var a ="shivam ";
    var b = "kushwah";
    var c = a+b;
    console.log(c)
    
}
element();

var v =Math.sqrt(25);
console.log(v);

function squre(){
    var a = 3;
    var b = a*a;
    console.log( "squre of " +a +" is "+b);
}
squre();

function outer(){
  var a = "in outer function \n";

    function inner(){
         var b = "in inner function \n";
         console.log(a,b);

    }
    inner();
    console.log(a);

}
outer();