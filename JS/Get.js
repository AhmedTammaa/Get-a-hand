var n1 =[];
var n2 =[];
for (var i=0;i<25;i++){
    n1[i] = "Project " + i;
}
for (var i=0;i<25;i++){
    n2[i]= " Description" +i;
}
//document.getElementById("browsecontent").innerHTML+= "<input type= " + '"Search"' + ' Placeholder="Search"> <\input>';
document.getElementById("browsecontent").innerHTML+= '<table align="center" id="table"><tr><th>Project title</th><th>Project description</th><th>bid</th></tr><tr><th>Get A hand</th><th> Create an awesome looking website</th><th><input type="submit" value="bid now"></th></tr>';
yes(n1);
function yes(theArray){

 // output the subscript and value of each array element
for ( var i = 0; i < theArray.length; i++ ){
document.getElementById("table").innerHTML+= '<tr><th>'+n1[i]+'</th><th>'+ n2[i] + '</th><th><input type="submit" value="bid now"></th></tr>';
}
document.getElementById("browsecontent").innerHTML+= "</table>"; 

}