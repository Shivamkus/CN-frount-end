// var arr = [56, 78, 70, 45, 70];
// console.log(arr);
var sec = 1;
function sayHello(){
    console.log("After" , sec);
    sec++;
    if(sec == 6){
        //stop//
        clearInterval(id);
    }
}
var id = setInterval(sayHello,1000);