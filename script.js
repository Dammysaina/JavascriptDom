// var showText = document.getElementById('name').innerHTML;
// var Text = document.getElementById('story').style.backgroundColor = "red";
// Text = document.getElementById('story').style.color = "green";
// var entername = document.getElementById('enter_name').innerHTML;
// alert(entername);
// alert(showText);
// alert(Text);
// var name = document.getElementById("enter_name").value = "dami";
// var email = document.getElementById("enter_email").value = "dam@yahoo.com";
// var password = document.getElementById("enter_password").value = "12345678";

// // alert(name);
// alert(email);
// alert(password);


// if (name != "Ola"){
// 	alert("wrongUser!") 
// }
// else {
// 	alert("Valid User")
// }
// if (password != 12345678){
// 	alert("wrong password");
// }
// else {
// 	alert("valid password");

// 	}
// var inputTag = document.getElementsByTagName("input");

// inputTag[0].value = "sola";
// inputTag[1].value = "daaaa@yahoo.com";
// inputTag[2].value = "efqdef"


function changeColor(){
	var square = document.getElementById('square')
	square.style.backgroundColor = "blue";
}
changeColor()

function reverseColor(){
	var square = document.getElementById('square')
	square.style.backgroundColor = "yellow";
}
reverseColor()

function clickMe(){
	alert ("You clicked me")
}

function clickMe(){
	var square = document.getElementById('square');
	square.style.backgroundColor = "red";
}
// var inputTag = document.getElementsByTagName("input");

// function validateFields(){
// if (inputTag[0].value === ""){
// 	alert("please enter a name");
// }
// else if (inputTag[1].value === ""){
// 	alert("please enter password");
// }
// else if (inputTag[1].value != "12345678"){
// 	alert("Wrong password");
// }
// else {
// 	alert("welcome");
// }
// }
// validateFields();


// function showname1(){
// 	document.write("damilola" + "<br>")
// };
// function showname2(){
// 	document.write("adediran")
// }
// showname1();
// setTimeout (showname2, 5000);

// var timer = 0;
// function count(){
// 	document.write(timer + "<br>");
// 	if (timer = 5){
// 		clearInterval(timer)
// 	}
// 	timer++;
// }
// setInterval(count, 1000);
// // clearInterval(count(30));
var currentTime = document.getElementById("displaycurrenttime");

function showDate(){
var date = new Date();
currentTime.innerHTML = date;
 }
 setInterval(showDate, 1000)