function BishBosh() 
{
    for(var i = 1; i <= 100; i++)
    {
      var output = "";

      if (i % 12 == 0)
      {
        output += "Bish-Bosh";   
      }
      else if (i % 3 == 0)
      {
        output += "Bish";   
      }
      else if (i % 4 == 0)
      {
        output += "Bosh";   
      }  
      else
      {
        output += i.toString();
      }
     
     /* if (i == 100)
     {
      document.write(output);
     }
     else document.write(output + ", ");

     /* document.getElementById("div1").innerHTML = output + " "; */

     console.log(output + " ");
    }
}