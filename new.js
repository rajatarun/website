function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    { 
//	alert(rawFile.status);
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
//		$("#tarun").append("<h1>"+"tarun"+"</h1>");

//		alert(rawFile.status)
	       	var allText = rawFile.responseText;
//		alert(allText);
//		return string(allText);
		var obj = [];
		obj = JSON.parse(allText);
		document.body.innerHTML = "tarun";
// 		alert(obj.tracks[0].artists[0].name);
//		d = document.getElementById("result");
//		alert(d);
		}
	}
    }
    rawFile.send();
	    		
}
var obj = [];
readTextFile("music.txt");
alert(obj);
