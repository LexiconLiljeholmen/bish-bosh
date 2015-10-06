
function Loop() {
	var str = "";
for(var i=1;i<=100;i++)
{
	if (((i%3)==0)&&((i%4)==0)) str=str + " Bish-Bosh, "
	else if ((i%4)==0) str=str + " Bosh, ";
	else if ((i%3)==0) str=str + " Bish, ";
	else str=str + i + ", ";
}
document.getElementById('bishbosh').innerHTML=str;
}

function readLoop() {
	var loops=document.getElementById('inLoop').value;
	var bishTal=document.getElementById('inBish').value;
	var boshTal=document.getElementById('inBosh').value;
	var str = "";
	for(var i=1;i<=loops;i++)
	{
		if (((i%bishTal)==0)&&((i%boshTal)==0)) str=str + " Bish-Bosh, "
		else if ((i%boshTal)==0) str=str + " Bosh, ";
		else if ((i%bishTal)==0) str=str + " Bish, ";
		else str=str + i + ", ";
	}
document.getElementById('bishbosh2').innerHTML=str;
}