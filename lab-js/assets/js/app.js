//function
//alert('hello js');

//variables
var animal = "cat"; //string
var checking_account = 0;
var age = 16; //number
var clothing = ["shirts", "socks", "pants"]; //array
var winner = false; //boolean 
// here used to be var marni_shirt = 1000 but we put those values inside of HTML


// alert(age);  //dont put quotes because then itll think its a string 
//alert(clothing[1]);

// this pop thing is pretty annoying and theres a better way of doing 
// it and debugging your code and its called CONSOL. LOG

console.log(winner);
 
  	// <div class="content">
  		// <div class="value"> </div>
  	// </div> 


 //functions: 

 //this is how you declare (create, set-up) a function 
 //2 step process - defining the function and then 

 function print_text(text) {
 	 $('.value').html(text); 
 // that is jquery and will be connected to css by the quotations - putting it inside the function will make 
 // it disappear at first but thats only the first step
// we can actually code inside the console, we can call the function so write print_text(age);
// text is a variable
// dollar sign function is a jquery thing and it is defined inside of the file that is on the HTML file
 }

 // charge_cc(marni_shirt);
 function charge_cc(item_value) {
 	//pass in the var (the item which will be marni_shirt) that you wanted
 	alert('you will be charge ' + item_value);
 	alert('your checking account balance is ' + checking_account);

 	if (checking_account < item_value) {
 		if (checking_account < 1) {
 			alert('you have no money ');
 	}
 	//by saying item instead of O or another numerical value, it is specifying that it is less than the 
 	// item at any given time
 	// if we want the if statement to be false ... move the alerts into the else statement
 		else {
 			checking_account = checking_account - item_value;
	}
 		alert('charge successful ');
 	//taking the variables and subtracting them from eachother but we need to store the values as well
 		alert('checking balance is ' + checking_account);
 	}
}

 	// hypothetical example: what do we need to know: the value of the thing we are 
 	//buying and the checking account balance


 $('.item').click(function() {
 	//need to define item 

 	var item_value = $(this).data('value'); // specifically this item is what this is
 	charge_cc(item_value);
 	//do something

 });

// _____________________________
// //if statements - you can put if statements inside of if statements 
// if (age > 12) {
// 	alert('you are cool!'); //if the age value is over 12
// } else if (age > 7) { 
// 	alert('how about finding dory'); // if the age value is smaller than 7 this will pop up
// } else { 
// 	alert('youre nice');
// } //if the age value is under 7 this will pop up 


// debugger; //need to have console open for it to run, it freezes the state of our application








 //can not use dashes, only underscores