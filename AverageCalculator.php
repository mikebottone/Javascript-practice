<!DOCTYPE html>
<html>
<head>
	<title>Average Calculator</title>
	 <link rel="stylesheet" href="default.css">
</head>
<body>
<div id="clock"></div>
	<h1>Average Calculator</h1>
<h3>Courses</h3>
<div id="courses">
	<div id="course">
	
	Course Name: <div class="popup" onmouseover="CoursePopup()">
				<input type="text" name="courseName" id="courseName">
				<span class="popuptext" id="myPopup">Enter a course name</span></div>
	<br> <strong>Evaluation Components: </strong>
	<br>Evaluation: <input type="text" id="eval" placeholder="Enter evaluation name">
	&nbsp &nbsp Weight: <input type="text" size="1" maxlength="2" id="weight">% 
	&nbsp &nbsp Mark: <input type="text" size="1" maxlength="3" id="mark">% 
	<br><button id="addEval" onclick="addEval()">+
		</button>

	</div>



</div>

 <script src="scripts/main.js"></script>
</body>
</html>