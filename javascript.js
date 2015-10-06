		function validateForm() 
		{
			throwUpErrorMessage=false;
			
			bishIn = +mybishboshForm.bish.value;
			boshIn = +mybishboshForm.bosh.value;
			startIn = +mybishboshForm.bishboshStart.value;
			endIn = +mybishboshForm.bishboshEnd.value;
			
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
							errorMessage = "bish must be less then or equal to end value of interval!";
						}										
						else 
						{
							if	 (boshIn > endIn) 
							{
							throwUpErrorMessage=true;
							errorMessage = "bish must be less then or equal to end value of interval!";
							}
	
					}
				}
				if  (throwUpErrorMessage) 
				{
					alert(errorMessage);
					return false;
				}
				else {
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
			return row;
		}
		function addCell(row,cellNo,cellValue)
		{
			var table = document.getElementById("tabulatedBishBosh");
			var cell = row.insertCell(cellNo);
			cell.innerHTML = cellValue;
			return cellNo++; 
		}

		function bishBosh(bishIn,boshIn,startIn,endIn)
		{
				table = createTable();
				rowsAdded=0;
				rowNo=0;
				cellNo=0;
				row = addRow(rowNo);
				rowNo = rowNo++;
				theCounter=0;
				for (theCounter = startIn; theCounter <= endIn; theCounter++) 
				{ 
					console.log(numBishBosh(bishIn,boshIn,theCounter));
					cellNo = addCell(row,cellNo,numBishBosh(bishIn,boshIn,theCounter));
					if (cellNo % 3 == 0)
					{
						row = addRow(rowNo);
					}
				}
		}