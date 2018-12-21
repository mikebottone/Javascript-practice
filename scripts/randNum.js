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

function randNumGenerator(minNum, maxNum){
	return Math.floor(Math.random() * (maxNum - minNum) ) + minNum;
}