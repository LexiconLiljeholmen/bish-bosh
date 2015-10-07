
function bishbosh()
{
    var minValue = 1;
    var maxValue = 300;

    var bishboshString = "<h4>Resultat:</h4>";
    var found = false;                      // have we found a bish or a bosh, or maybe both?

    var start = +document.getElementById("start").value;
    var stopp = +document.getElementById("stopp").value;
    var bish = +document.getElementById("bish").value;
    var bosh = +document.getElementById("bosh").value;

    var valueValidity = (((start < minValue) || (start > maxValue)) ||
        ((stopp < start) || (stopp < minValue) || (stopp > maxValue)) ||
        ((bish < minValue) || (bish > maxValue)) ||
        ((bosh < minValue) || (bosh > maxValue)));

    if (valueValidity) {
        bishboshString = "Använd giltiga värden, tack.";
    }
    else {

        for (var i = start; i <= stopp; i++) {    // loop all the numbers looking for bish&bosh

            if (i % bish == 0) {                // divides with bish
                bishboshString += "Bish";
                found = true;
            }
            if (i % bosh == 0) {                // divides with bosh
                if (found) {                    // (got both bish & bosh)
                    bishboshString += "-";
                }

                bishboshString += "Bosh";
                found = true;
            }

            if (!found) {                       // we found neither bish nor bosh, use the number
                bishboshString += i.toString();
            }

            if (i < stopp) {                   // as long as we're not at the very last number, add a comma and space
                bishboshString += ", ";
            }


            found = false;                      // prepare for next turn in the loop...

        }
    }
    document.getElementById('bishbosh').innerHTML = bishboshString;     // print the full bish bosh string
}