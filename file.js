function myfunction(){
    let Amount=document.getElementById("Amount").value
    let From=document.getElementById("demo1").value
    let To=document.getElementById("demo2").value
    let Result;
    if (From ==="USA" && To ==="VND") {
        Result = "Result: " + (Amount * 23000) + " Đ";
    }
    else if (From ==="VND"&& To==="USA"){
        Result = "Result: "+ (Amount / 23000) + " $";
    }
    else if (From ==="VND") {
        Result = "Result: " + Amount + " Đ"
    } else {
        Result = "Result: " + Amount + " $"
    }
    document.getElementById("Result").innerHTML = Result;
}

