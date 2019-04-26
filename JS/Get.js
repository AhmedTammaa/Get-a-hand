var email = document.getElementById("send");
email.addEventListener(onclick,function(event){
    window.open('mailto:ahmedtammaa101@hotmail.com.com?subject=succeed&body=you did it');
});
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
yes(n1,n2);
function yes(theArray,theArray2){

 // output the subscript and value of each array element
for ( var i = 0; i < theArray.length; i++ ){
document.getElementById("table").innerHTML+= '<tr><th>'+theArray[i]+'</th><th>'+ theArray2[i] + '</th><th><input type="submit" value="bid now"></th></tr>';
}
document.getElementById("browsecontent").innerHTML+= "</table>"; 

}
var input = document.getElementById("find");
var searcher;
input.addEventListener("keyup",function(event){
    if (event.keyCode==13){
        searcher = document.getElementById("find").value; 
        for (var i=0;i<n1.length;i++){
            if (searcher == n1[i]){
                var deleter = document.getElementById("table");
                var parent = deleter.parentNode;
                parent.removeChild(deleter);
                document.getElementById("browsecontent").innerHTML+= '<table align="center" id="table"><tr><th>Project title</th><th>Project description</th><th>bid</th></tr>';
                document.getElementById("table").innerHTML+= '<tr><th>'+ n1[i]+'</th><th>'+ n2[i] + '</th><th><input type="submit" value="bid now"></th></tr>';
                break;                
            }
            if (i+1 == n1.length){
                window.alert("Not found!");
            }
                        
        }
    }
});