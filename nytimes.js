function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
	       	var allText = rawFile.responseText;
//		alert(allText1);
		var obj = JSON.parse(allText);
//		var class1 = "article";
		var class2 = "itemrow";
		var class3 = "rowtext";
		var class4 = "description";
		var class5 = "items";
		var class6 = "descriptiontext";
		var id = "itemrow";
		var id1 = "sectionheading";
		document.getElementById("news").innerHTML = "<div id="+id1+">"+obj.results[0].section+"</div>";

//		document.getElementById("news").innerHTML += "<div class="+article+">"
		var leng = obj.results.length;
//		alert(leng,leng1);
		
		for (var j = 0;j<leng;j++)
		{	
//			document.getElementById("news").innerHTML += "<div class="+class2+"id = "+id+">"+"</div>";
			
			for(i in obj.results[j])
			{
				if(i == "title")
				{
				var result = obj.results[j][i];
//				alert(result);
				document.getElementById("news").innerHTML += "<div class="+class5+">"+"<p class="+class3+">"+result.replace("Review:","")+"</p>"+"</div>"
//				document.getElementById("news").innerHTML += "<p class="+class3+">"+result.replace("Review:","")+"</p>";
//				document.getElementById("news").innerHTML += "</div>"
			}
				else if(i=="abstract")
				{
				var result = obj.results[j][i];
				document.getElementById("news").innerHTML += "<div class="+class4+">"+"<p class="+class6+">"+result+"</p>"+"</div>"
//				document.getElementById("news").innerHTML += "<p class="+class6+">"+result+"</p>";
//				document.getElementById("news").innerHTML += "</div>";

//				document.getElementById("news").innerHTML += "<br>";
				}
							
			}
			document.getElementById("news").innerHTML += "</div>";

		}
//		document.getElementById("menu").innerHTML += "</dl>";
		}
            
        }
    }
   rawFile.send(null);
   

}
//document.getElementById("result").innerHTML = "abc";


var newsselect = function(name){
switch(name){

case 1:readTextFile("tarun.txt");
//		alert("arts");
		break;
case 2:readTextFile("bussiness.txt");
		break;
case 3:readTextFile("sports.txt");
		break;
case 4:readTextFile("world.txt");
		break;
case 5:readTextFile("us.txt");
		break;
}
}
//alert(a);

//var c = document.getElementById("news").childNodes;
//alert(c[1]);
//c[2].removeClass("items").addClass("current");

$(document).ready(function(){
		$(".button").click(function(){
				$(".box").css("background-color","rgba(255,255,255,0.7)");
//				$(".description").hide();
				});
		
});

