<!DOCTYPE html>
<html>
<head>
	<title>Random Number Generator</title>
	 <link rel="stylesheet" href="default.css">
</head>
<body>
 <div id="clock"></div>
 <h1>Random Number Generator</h1>
<center>
<p>Generate a random number between the specified interval by selecting the interval and clicking the generate button.</p>
</center>

Interval for random number:
<div>
	<table>
		<th style="padding-right: 20px;">Lower Bound</th><th>Upper Bound</th>
		<tr>
			<td>
				<input type="number" id="minNum" style="width: 50px;"> 
			</td>
			<td>
				<input type="number" id="maxNum" style="width: 50px;"> 
			</td>

		</tr>
	</table>
</div>
<br>
<div id="clock">
The random number is: <br/>
<p id="randNum">0</p>
</div>
<br>
<button onclick="document.getElementById('randNum').innerHTML = randNumGenerator(document.getElementById('minNum').value, document.getElementById('maxNum').value)">Submit</button>

 <script src="scripts/randNum.js"></script>
</body>
</html>