function cahngeColor(element){
    var currentColor = element.style.backgroundColor;
    if(currentColor == "red"){
        element.style.backgroundColor = "yellow";
    }
    else{
        element.style.backgroundColor = "red";
    }
}