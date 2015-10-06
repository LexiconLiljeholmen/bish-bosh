/* Javascript Christina K
* 
* 
*/

function reStart () {
var loopStart = 100;	
var nummer1 = 3;
var nummer2 = 4;
//document.getElementById("looptal")=noll;
document.getElementById("shownumbers").innerHTML="";
document.getElementById("looptal").value=loopStart;
document.getElementById("tal1").value=nummer1;
document.getElementById("tal2").value=nummer2;
}

function bishBosh (){

var nummerNu = 0;
var nummerArray = ["start"];
var node = document.createElement("nummerlista");
var loopMax = document.getElementById("looptal").value;
var talet1 = document.getElementById("tal1").value;
var talet2 = document.getElementById("tal2").value;


for (var i = 0; i < loopMax; i++){
	nummerNu = i + 1;
	 namnare1 = nummerNu % talet1;
	 namnare2 = nummerNu % talet2;

	if ((namnare1 == 0) && (namnare2 == 0)){
		if (i != (loopMax-1)) textNode = document.createTextNode("Bish-Bosh, ");		
		else  textNode =  document.createTextNode("Bish-Bosh");
		node.appendChild(textNode);
		document.getElementById("shownumbers").appendChild(textNode);
	}
	else if ((namnare1 == 0) && (namnare2!=0)) {
		if (i != (loopMax-1)) textNode = document.createTextNode("Bish, ");
		else  textNode =  document.createTextNode("Bish");
		node.appendChild(textNode);
		document.getElementById("shownumbers").appendChild(textNode);
	}
	else if ((namnare1 != 0) && (namnare2==0)) {
		if (i != (loopMax-1)) textNode = document.createTextNode("Bosh, ");
		else textNode = document.createTextNode("Bosh");
		node.appendChild(textNode);
		document.getElementById("shownumbers").appendChild(textNode);
	}
	else {
		//var x = nummerNu.toString();
		textNode =  document.createTextNode(nummerNu);
		node.appendChild(textNode);
		document.getElementById("shownumbers").appendChild(textNode);
		if (i != (loopMax-1)) {
			var kommaspace = ", ";
			textNode = document.createTextNode(kommaspace);
			node.appendChild(textNode);
			document.getElementById("shownumbers").appendChild(textNode);
			}
		}

	}
}

function rensaVisning () {
	document.getElementById("testoutput").innerHTML="";
}

function bishBoshTest (){

var nummerNu = 0;
var loopMax = 100; //fr form
var namnare1 = 0; //fr form
var namnare2 = 0; //fr form
var nummerArray = ["start"];
var node = document.createElement("nummerlista");

for (var i = 0; i < loopMax; i++){
	nummerNu = i + 1;
	 namnare1 = nummerNu % 3;
	 namnare2 = nummerNu % 4;

	if ((namnare1 == 0) && (namnare2 == 0)){
		if (i != (loopMax-1)) textNode = document.createTextNode("Bish-Bosh, ");		
		else  textNode =  document.createTextNode("Bish-Bosh");
		node.appendChild(textNode);
		document.getElementById("testoutput").appendChild(textNode);
	}
	else if ((namnare1 == 0) && (namnare2!=0)) {
		if (i != 99) textNode = document.createTextNode("Bish, ");
		else  textNode =  document.createTextNode("Bish");
		node.appendChild(textNode);
		document.getElementById("testoutput").appendChild(textNode);
	}
	else if ((namnare1 != 0) && (namnare2==0)) {
		if (i != 99) textNode = document.createTextNode("Bosh, ");
		else textNode = document.createTextNode("Bosh");
		node.appendChild(textNode);
		document.getElementById("testoutput").appendChild(textNode);
	}
	else {
		textNode =  document.createTextNode(nummerNu);
		node.appendChild(textNode);
		document.getElementById("testoutput").appendChild(textNode);
		if (i != 99) {
			var kommaspace = ", ";
			textNode = document.createTextNode(kommaspace);
			node.appendChild(textNode);
			document.getElementById("testoutput").appendChild(textNode);
			}
		}

	}
}
