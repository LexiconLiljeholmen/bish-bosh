function BishBosh() {
var str = "";
for(var i = 1; i < 100; i++)
    {

        if(((i%3)==0) && ((i%4)==0))str = str + " Bish - Bosh ";
        else if((i%4)==0)str = str + " Bosh ";
        else if((i%3)==0)str = str + " Bish ";
        else str = str + i + ", ";

    }
    document.getElementById('response').innerHTML = str ;
}


   function BishBoshSearch() {
var str = "";
var x = +document.getElementById("intLopp").value;
var strBish = document.getElementById("strBish").value;
var strBosh = document.getElementById("strBosh").value;
var intBish = +document.getElementById('intBish').value;
var intBosh = +document.getElementById('intBosh').value;
var intLoppStart = +document.getElementById('intLoppStart').value;

for(i = intLoppStart; i <= x; i++)
    {

        if(((i%intBish)==0) && ((i%intBosh)==0)) str = str + " "+ strBish + " - " + strBosh + " ";
        else if((i%intBosh)==0)str = str + " " + strBosh + " ";
        else if((i%intBish)==0)str = str +" " + strBish + " ";
        else str = str + i;

        if(x!=i)str = str + ", "


    }
    document.getElementById('response2').innerHTML = str ;
}
