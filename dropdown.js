document.onreadystatechange = function () {
    if (document.readyState == "complete") {
	    var topList = document.getElementById("topMenu");
    	var topListItems = topList.getElementsByTagName("li");

		for (var i = 0; i < topListItems.length; ++i) {
			topListItems[i].style.display = "none";
		}

	    var bottomList = document.getElementById("bottomMenu");
    	var bottomListItems = bottomList.getElementsByTagName("li");

		for (var i = 0; i < bottomListItems.length; ++i) {
			bottomListItems[i].style.display = "none";
		}		
	}
}

window.onload=function(){
	document.getElementById("topMenu").onmouseover=topOver;
    document.getElementById("topMenu").onmouseout=topOut;
	document.getElementById("bottomMenu").onmouseover=bottomOver;
    document.getElementById("bottomMenu").onmouseout=bottomOut;    
};

function topOver() {
	var topList = document.getElementById("topMenu");
	var topListItems = topList.getElementsByTagName("li");

	for (var i = 0; i < topListItems.length; ++i) {
		topListItems[i].style.display = "block";
	}
}

function topOut() {
	var topList = document.getElementById("topMenu");
	var topListItems = topList.getElementsByTagName("li");

	for (var i = 0; i < topListItems.length; ++i) {
		topListItems[i].style.display = "none";
	}
}

function bottomOver() {
	var bottomList = document.getElementById("bottomMenu");
	var bottomListItems = bottomList.getElementsByTagName("li");

	for (var i = 0; i < bottomListItems.length; ++i) {
		bottomListItems[i].style.display = "block";
	}
}

function bottomOut() {
	var bottomList = document.getElementById("bottomMenu");
	var bottomListItems = bottomList.getElementsByTagName("li");

	for (var i = 0; i < bottomListItems.length; ++i) {
		bottomListItems[i].style.display = "none";
	}
}