
function validateForm() 
{
	throwUpErrorMessage=false;
	
	bishIn = +mybishboshForm.bish.value;
	boshIn = +mybishboshForm.bosh.value;
	startIn = +mybishboshForm.bishboshStart.value;
	endIn = +mybishboshForm.bishboshEnd.value;
	var rowCount = document.getElementById('tabulatedBishBosh').rows.length;
	for (i=0; i < rowCount; i++)
	{
		document.getElementById("tabulatedBishBosh").deleteRow(0);
	}
	
	if (bishIn == boshIn) 
	{
		throwUpErrorMessage=true;
		errorMessage = "Whats the meaning of having the same valuse on both bish and bosh? \n Goback and change one of them!";
		alert(errorMessage);
	}
	else
	{
		if (bishIn == null || bishIn == "" ||isNaN(bishIn) ||
			boshIn == null || boshIn == "" ||isNaN(boshIn)||
			startIn == null || startIn == "" ||isNaN(startIn)||
			endIn == null || endIn == "" ||isNaN(endIn))
			{
				throwUpErrorMessage=true;
				errorMessage = "No empty fields please!!!";
			}  
			else 
			{
				if	 (bishIn > endIn)
				{
					throwUpErrorMessage=true;
					errorMessage = "Bish must be less then or equal to end value of interval!";
				}										
				else 
				{
					if	 (boshIn > endIn) 
					{
					throwUpErrorMessage=true;
					errorMessage = "Bosh must be less then or equal to end value of interval!";
					}

			}
		}
		if  (throwUpErrorMessage) 
		{
			alert(errorMessage);
			setTimeout(function(){alert("this is it read and admire")}, 2000);
			return false;
		}
		else 
		{
			bishBosh(bishIn,boshIn,startIn,endIn); 
			return true;
		}

	}
}
function numBishBosh(bishIn,boshIn,theCounter) 
{
	shitOut = "";
	
	modulobish = theCounter % bishIn == 0;
	modulobosh = theCounter % boshIn == 0;
	if (modulobish && modulobosh) 
	{
		shitOut = theCounter +  " " + "BishBosh";
	}
	else if  (modulobish) 
		{
			shitOut = theCounter +  " " + "Bish";
		}
		else if (modulobosh) 
			{
				shitOut = theCounter +  " " + "Bosh";
			}
			else 
				{
					shitOut = theCounter;
				}
	return shitOut;
}  
function createTable() 
{
	var table = document.getElementById("tabulatedBishBosh").createCaption();
	table.innerHTML = "<b>Tabulated Bish:es and Bosh:es</b>";
	return table;
}
function addRow(rowNo)
{
	var table = document.getElementById("tabulatedBishBosh");
	var row = table.insertRow(rowNo);
	row.style.borderColor="blue";
	return row;
}
function addCell(row,cellNo,cellValue)
{
	var table = document.getElementById("tabulatedBishBosh");
	var cell = row.insertCell(cellNo);
	cell.innerHTML = cellValue;
	cell.style.color="gray";
	cell.style.backgroundColor="white"; 
	if (isNaN(cellValue))
	{
		if (cellValue.lastIndexOf("BishBosh") > -1)
		{
			cell.style.color="red";
			cell.style.backgroundColor="cyan"; 
		}
		else if (cellValue.lastIndexOf("Bish") > -1) 
			{
				cell.style.color="green";
				cell.style.backgroundColor="orange"; 
			}
			else if (cellValue.indexOf("Bosh") > -1)
				{
					cell.style.color="blue";
					cell.style.backgroundColor="yellow";
				}
	}
	return cellNo++; 
}
function bishBosh(bishIn,boshIn,startIn,endIn)
{
	table = createTable();
	document.getElementById("tabulatedBishBosh").style.border = "thick solid #0000FF";
	document.getElementById("tabulatedBishBosh").style.borderColor = "red";
	rowsAdded=0;
	rowNo=0;
	cellNo=0;
	row = addRow(rowNo);
	rowNo = rowNo++;
	theCounter=0;
	for (theCounter = endIn; theCounter >= startIn; theCounter--) 
	{ 
		cellNo = addCell(row,cellNo,numBishBosh(bishIn,boshIn,theCounter));
		if ((theCounter - startIn + 1) % 6 == 0)
		{
			row = addRow(rowNo);
		}
	}
}
					//-->
