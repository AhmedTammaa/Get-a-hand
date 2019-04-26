//dirty trick
		var email = document.getElementById("send");
    	email.addEventListener("click",function(){
        var problem = document.getElementById("Problem").value;
        var category = document.getElementById("category").value;
        var describe = document.getElementById("Describe").value;
        window.open('mailto:ahmedtammaa101@hotmail.com?subject= issue: '+problem+'&body= Category: '+category+ "\n description: " + describe + "\n");

	});
