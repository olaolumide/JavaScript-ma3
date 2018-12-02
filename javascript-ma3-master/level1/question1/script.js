//Use RegEx to validate form
document.getElementById("send").addEventListener("click", function(){
	var inputInfo = document.getElementsByTagName("input");
	document.getElementById("formError").innerHTML = "";
	
	for (i=0; i < inputInfo.length; i++){
		var inputData = inputInfo[i].value;
		
		var realPatterns = new RegExp ( inputInfo[i].pattern);
		
		var checking = realPatterns.test(inputData);
	
		if ( checking === false){
			document.getElementById("formError").innerHTML += inputInfo[i].name + "	is incorrect <br>";
		}
	}
}) ;