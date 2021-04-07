function money() {
    let a = document.getElementById("inPut").value;
let b = document.getElementById("to").value;
let c = document.getElementById("from").value;
result = a*b/c;
document.getElementById("Result").innerHTML= result ;
}