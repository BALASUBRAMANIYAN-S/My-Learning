// function Name(w) {
//    return `My name is : ${w}`;
// }

// function NameTwo(w, callback) {
//    const result = Name(w); 
//    console.log(result);
// }

// NameTwo("Bala", Name); 


function First(){     {/* Function console */}
    console.log("This IS a Call Back Function")
}

function two(test){    {/* This is a higher oder function */}
test()
}

two(First);   {/*send a Function as a Arguments This is call CallBack Function*/}