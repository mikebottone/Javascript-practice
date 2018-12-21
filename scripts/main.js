
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

//Popup
function CoursePopup() {
  
  if (document.getElementById('courseName').value=="") {
	var popup = document.getElementById("myPopup");
  	popup.classList.toggle("show");
  }
  else{
  	var popup = document.getElementById("myPopup");
  	popup.classList.toggle("hide");
  }
}


//adding an evaluation field
function addEval(){
	var newLine = document.createElement("br");
	var eval = document.createElement("input");
	eval.setAttribute("type", "text");
	eval.setAttribute("placeholder", "Enter evaluation name");

	var weight = document.createElement("input");
	weight.setAttribute("type", "text");
	weight.setAttribute("maxlength", 2);
	weight.setAttribute("size",1);

	var mark = document.createElement("input");
	mark.setAttribute("type", "text");
	mark.setAttribute("maxlength", 3);
	mark.setAttribute("size",1);


	var evalLabel = document.createElement("label");
	var	evalNode = document.createTextNode("Evaluation: ");
	evalLabel.appendChild(evalNode);

	var weightLabel = document.createElement("label");
	var	weightNode = document.createTextNode("Weight: ");
	weightLabel.appendChild(weightNode);

	var	markLabel = document.createElement("label");
	var	markNode = document.createTextNode("Mark: ");
	markLabel.appendChild(markNode);

	var percent = document.createElement("label");
	var percentNode = document.createTextNode("%");
	percent.appendChild(percentNode);


	var element = document.getElementById("course");
	var child = document.getElementById('addEval');
	
	element.insertBefore(evalLabel,child);
	element.insertBefore(eval,child);
	element.insertBefore(weightLabel,child);
	element.insertBefore(weight,child);
	element.insertBefore(percent,child);
	element.insertBefore(markLabel,child);	
	element.insertBefore(mark,child);
	
	element.insertBefore(newLine,child);
	
}
