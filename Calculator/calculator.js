function add(){
    //alert("Button Test");
    let fn = parseFloat(document.getElementById("txtfirstnumber").value);
    let sn = parseFloat(document.getElementById("txtsecondnumber").value);
 
    document.getElementById("txtresult").value = fn + sn;
 }
 
 function remainder(){ 
 
    let fn = parseFloat(document.getElementById("txtfirstnumber").value);
    let sn = parseFloat(document.getElementById("txtsecondnumber").value);
 
    document.getElementById("txtresult").value = fn % sn;
     
 }
 
 function substract(){
    let fn = parseFloat(document.getElementById("txtfirstnumber").value);
    let sn = parseFloat(document.getElementById("txtsecondnumber").value);
 
    document.getElementById("txtresult").value = fn - sn;
 }
 
 function division(){
    let fn = parseFloat(document.getElementById("txtfirstnumber").value);
    let sn = parseFloat(document.getElementById("txtsecondnumber").value);
 
    document.getElementById("txtresult").value = fn / sn;
 }
 
 function multiplication(){
    let fn = parseFloat(document.getElementById("txtfirstnumber").value);
    let sn = parseFloat(document.getElementById("txtsecondnumber").value);
 
    document.getElementById("txtresult").value = fn * sn;
 }
 
 function exponentiation(){
    let fn = parseFloat(document.getElementById("txtfirstnumber").value);
    let sn = parseFloat(document.getElementById("txtsecondnumber").value);
 
    document.getElementById("txtresult").value = fn ** sn;
 }