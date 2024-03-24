// input
document.getElementById("clear").onclick = function (){
    document.getElementById("statement").innerHTML = ""
}
//  Result
document.getElementById("output").onclick = function (){
    document.getElementById("result").innerHTML = ""
}

   // concatenation 
   document.getElementById("concatenation").onclick = function () {

    let message = "Any Type of Text in this String"
    let userName = "Abdul Raheem Janjua"
    let banger = "!"
    let sum = (message + " " + userName + banger)
    document.getElementById("statement").innerHTML = '<p>"Any Type of Text in this String" + " " + "Abdul Raheem Janjua" + "!"</p>'
    document.getElementById("result").innerHTML = sum;
}
// ask name from user 
document.getElementById("ask-number").onclick = function(){
    let firstName = prompt("please enter your first name")
    let lastName = prompt("please enter your last name")
    let fullName = `${firstName} ${lastName}`
    document.getElementById("statement").innerHTML = `first name = ${firstName} <br> last name = ${lastName} <br> full name = first name + last name`
    document.getElementById("result").innerHTML = `full name = ${fullName}`
}
// comparison operator 
document.getElementById("operators").onclick = function (){

    let num1 = +prompt("please enter first number")
    let num2 = +prompt("please enter second number")
    if (num1 === num2){
        document.getElementById("statement").innerHTML = "num1 == num2"
        document.getElementById("result").innerHTML = "<span class='text-info'>Condition is true;<span/>"
    }
    else {
        document.getElementById("statement").innerHTML = "num1 !== num2"
        document.getElementById("result").innerHTML = "<span class='text-danger'>Condition is false;</span."
    }
}
// if else if
document.getElementById("if-else").onclick = function (){
    document.getElementById("statement").innerHTML = " ";
    let marks = +prompt("please enter your marks")
    if (marks >= 90){
        document.getElementById("result").innerHTML = "<span class='text-success'>Congratulations! you got A+ Grade</span> "
    }
    else if (marks >=80){
        document.getElementById("result").innerHTML = "<span class='text-info'>Congratulations! you got A Grade</span>"
    }
    else if (marks >=70){
        document.getElementById("result").innerHTML = "<span class='text-warning'>you got B Grade</span>"
    }
    else {
        document.getElementById("result").innerHTML = "<span class='text-danger'>You Are Fail.;</span>"
    }
}

// sets of conditions 
document.getElementById("testing").onclick = function (){
    document.getElementById("statement").innerHTML = " ";
    let age = prompt("please enter your age")
    let weight = prompt("please enter your weight")
    if (age <= 10 && weight <= 25) {
        document.getElementById("result").innerHTML = "You are a baby!"
    }
    else if (age <= 18 && weight <= 50) {
        document.getElementById("result").innerHTML = "you are Young boy"
    }
    else if (age <= 25 && weight <= 60) {
        document.getElementById("result").innerHTML = "you are a youngman and fatty"
    }
    else if (age <= 30 && weight <= 59) {
        document.getElementById("result").innerHTML = "you are a youngman and healthy"
    }
    else {
        document.getElementById("result").innerHTML = "you are a Senior Citizen"
    }

}
// if statement nested 
document.getElementById("if-nested").onclick = function(){
    let userName = prompt("please enter user name")
    if(userName === "Abdul Raheem Janjua"){
        let password = prompt("please enter password")
        if(password == 468){
            document.getElementById("result").innerHTML = "<span style='color:green; text-transform:capitalize;'>you are successfully logged in</span>"
        }
        else{
            document.getElementById("result").innerHTML = `<span class='text-danger'>${password}</span> is incorrect password. <br> correct password is <span class='text-success'>468</span>`
        }
    }
    else{
        document.getElementById("result").innerHTML = `<span class='text-danger'>${userName} </span> is incorrect user name. <br> correct user name is <span class='text-success'> "Abdul Raheem Janjua"</span>`
    }
}
// login 
document.getElementById("login").onclick = function (){
    document.getElementById("statement").innerHTML = " ";
    let userName = prompt("please enter username")
    let passWord = +prompt("please enter password")
    if (userName === "Abdul Raheem Janjua" && passWord === 123456 ){
        document.getElementById("form").innerHTML = `<span style='color:green; font-weight:bold;'>${userName}</span>`
        document.getElementById("result").innerHTML = `<span style='color:green; text-transform:capitalize;'>you are successfully logged in</span>`
    }
    else {
        document.getElementById("result").innerHTML = "Try using correct username and a password"
    }

}
