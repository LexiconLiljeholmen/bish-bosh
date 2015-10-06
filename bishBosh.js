var firstNumber = 1;
var toNumber = 100;
var printOut = "";
var printOut1 = "";
var printOut2 = "";
var printOut3 = "";
var printOut4 = "";
var printOut5 = "";
var printOut6 = "";
var printOut7 = "";
var printOut8 = "";
var printOut9 = "";
var printOut10 = "";

for (i = firstNumber; i < toNumber; i++) {
    if (i == 11) {
        printOut1 = printOut
        printOut = "";
    }
    if (i == 21) {
        printOut2 = printOut
        printOut = "";
    }
    if (i == 31) {
        printOut3 = printOut
        printOut = "";
    }
    if (i == 41) {
        printOut4 = printOut
        printOut = "";
    }
    if (i == 51) {
        printOut5 = printOut
        printOut = "";
    }
    if (i == 61) {
        printOut6 = printOut
        printOut = "";
    }
    if (i == 71) {
        printOut7 = printOut
        printOut = "";
    }
    if (i == 81) {
        printOut8 = printOut
        printOut = "";
    }
    if (i == 91) {
        printOut9 = printOut
        printOut = "";
    }

    if (((i % 3) == 0) && ((i % 4) == 0)) printOut += "BISH-BOSH ";
    else if ((i % 3) == 0) printOut += "bish ";
    else if ((i % 4) == 0) printOut += "Bosh ";
    else printOut += i + " ";
}
document.getElementById('line1').innerHTML = printOut1;
document.getElementById('line2').innerHTML = printOut2;
document.getElementById('line3').innerHTML = printOut3;
document.getElementById('line4').innerHTML = printOut4;
document.getElementById('line5').innerHTML = printOut5;
document.getElementById('line6').innerHTML = printOut6;
document.getElementById('line7').innerHTML = printOut7;
document.getElementById('line8').innerHTML = printOut8;
document.getElementById('line9').innerHTML = printOut9;
document.getElementById('line10').innerHTML = printOut;

//for (i = nextNumber; i < maxNumber; i++) {
//if ((i % 3) && (i % 4)) printOut += i + " ";
//else if (i % 4) printOut += "bish ";
//else printOut += "Bosh ";
// else printOut += "BISH-BOSH ";