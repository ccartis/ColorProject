
var numberOfSquares=6;
var colors = generateRandomColors(numberOfSquares);
var bodies=generateRandomColors(6);


var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var body=document.querySelectorAll("body");
var resetButton=document.querySelector("#reset");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");


easyBtn.addEventListener("click",function(){
	hardBtn.classList.remove("selected");

	easyBtn.classList.add("selected");
	numberOfSquares=3;

	colors=generateRandomColors(numberOfSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.background=colors[i];
		}else{
		    squares[i].style.display="none";
		}
		
	}
});


hardBtn.addEventListener("click",function(){

	easyBtn.classList.remove("selected");

	hardBtn.classList.add("selected");

	numberOfSquares=3;
	
	colors=generateRandomColors(numberOfSquares);

	
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0; i<squares.length; i++){
		
			squares[i].style.background=colors[i];
		    squares[i].style.display="none";
		
		
	}
})

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	// add initial colors to squares
	squares[i].style.background = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function() {
		//grab color of clicked squares
		var clickedColor = this.style.background;
		//compare color to pickedColor
		if(clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			resetButton.textContent="Play Again";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
			//body.style.background="orange";
			// changeBackground();
		} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}

function changeColors(color) {
	//loop through all squares
	for(var i = 0; i < squares.length; i++) {
		//change each color to match given color
		squares[i].style.background = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	//make an array
	var arr = [];
	//add num random colors to arr
	for(var i = 0; i < num; i++) {
		//get random color and push into arr
		arr.push(randomColor());
	}
	//return that array
	return arr;
}


// function changeBackground(){
	


// 	body.style.background="green";
// }

function randomColor() {
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}


resetButton.addEventListener("click",function(){
	// alert("CLICKED RESET BITCH");

	//generate all new colors
	colors=generateRandomColors(numberOfSquares);

	//generate all new colors for bodybackground
	bodies=generateRandomColors(6);
	//pick a new random color from
	pickedColor=pickColor();
	//change colorDisplay to match picked Color
	colorDisplay.textContent=pickedColor;
	//change colors of squares
	for(var i=0; i<squares.length; i++){

		squares[i].style.background=colors[i];
	}
	h1.style.background="#232323";

	for (var j=0; j<body.length; j++){
		body[j].style.background=bodies[j];

	}



});