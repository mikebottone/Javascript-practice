//clock
function updateTime(){
var now = new Date();
	months=["January", "February","March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	
	//hours minutes and seconds
	time = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
	
	//month and day
	date = months[now.getMonth()] + " " + now.getDate();	 

	//display
	document.getElementById("clock").innerHTML = date + " " + time;

	//calling function every 1000ms
	setTimeout(updateTime, 1000);
}
updateTime();


//random Number
function randNumGenerator(minNum, maxNum){
	minNum = Number(minNum);
	maxNum = Number(maxNum); 

	if (maxNum < minNum) {
	alert("The upper bound must be greater than the lower bound.");
	return 0;
	}
	else {
	return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
	}
}

