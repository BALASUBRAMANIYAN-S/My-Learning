const mark= prompt("Enter Your Mark") ;

if(mark >=35){
    if (mark <= 100 && mark >= 80) {
    alert("You're A Grade Mark is : ", mark);
}
else if (mark < 80 && mark >= 60 ){
    alert("You're B Grade")
}
else if (mark < 60 && mark >= 45){
    alert("You're C Grade")
}
else if (mark < 45 ){
    alert("You're U Grade")
}
}
else{
    alert("You're Failed ")
}