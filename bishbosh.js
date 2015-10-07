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


function BishBosh2() 
{
    var bish = document.getElementById('bish').value;    // Hämtar värdena från input-rutorna
    var bosh = document.getElementById('bosh').value;
    var range = document.getElementById('range').value;
    var output = "";
    
    if ((bish < 1) || (bosh < 1 ) || (range < 1))
    {
      document.getElementById('div2').style.display = "block"; 
      document.getElementById('div2').innerHTML = "Siffrorna måste vara 1 eller större. Försök igen";
    }
    else
    {
      for(var i = 1; i <= range; i++)          // Loopar 'range' antal varv och kollar om i är delbart med 'bish' eller 'bosh'
      {
        if (i % (bish*bosh) == 0)              // Motsvarar koll om i är delbart med BÅDE bish och bosh
        {
          output += "Bish-Bosh";   
        }
        else if (i % bish == 0)
        {
          output += "Bish";   
        }
        else if (i % bosh == 0)
        {
          output += "Bosh";   
        }  
        else
        {
          output += i.toString();
        }
        if (i != range)                       // Lägger till kommatecken, utom för sista siffran i loopen.
        {
        output += ", ";
        }  

      }
    
      document.getElementById('div1').style.display = "block"; // Visar dolda div:s som har display:none från början
      document.getElementById('div2').style.display = "block"; 
      document.getElementById('div2').innerHTML = output;      // Skriver ut den ihopslagna strängen i div:en "testdiv"
    }  
}



    
    /* document.write(output + ", ");

     document.getElementById("div1").innerHTML = output + " "; 

     console.log(output + " "); */
    