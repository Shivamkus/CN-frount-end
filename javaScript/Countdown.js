sec = 10;
function sayHello() {
    console.log("shivam" ,sec);
    sec--;
    if(sec == 0){
            console.log("Time up")
        
        // stop//
        clearInterval(id);
    }
}

var id = setInterval(sayHello, 1000)