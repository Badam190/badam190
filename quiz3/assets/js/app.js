var color = "yellow";
var wallet = 1100;
var converted_wallet = "0";
var conversion_rate = ["0.88", "111.67", ".69"];

function convert_currency(amount, converter) { 
converted_wallet = amount/converter;
document.getElementById("conv_wall").innerHTML = converted_wallet;
}

document.write("The currency conversion rate for Yen is " + conversion_rate[1]);

// function call and passing in wallet variable as the amount parameter
// convert_currency(wallet, conversion_rate[1]);


