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

function MenuWriter () {
	var topList = document.getElementById("topMenu");
	var topListItems = topList.getElementsByTagName("li");
	var counter = 0;
	var liInterval;

	function typewrite () {
		topListItems[counter].style.display = "block";
		counter++;
		if (counter === topListItems.length) {
	        clearInterval(liInterval);
	        console.log("end");
	    }
	}

	$( "#topMenu" ).mouseenter(function() {
		console.log(counter);
		liInterval = setInterval(typewrite, 20);
	});

	$( "#topMenu" ).mouseleave(function() {
		for (var i = 0; i < topListItems.length; ++i) {
			topListItems[i].style.display = "none";
		}			
		counter = 0;
		clearInterval(liInterval);
	});
}

onload = function() {
	var topMenu = new MenuWriter();
};

/*
function topOver() {
	var topList = document.getElementById("topMenu");
	var topListItems = topList.getElementsByTagName("li");
	var counter = 0;
	var i = setInterval(animate, 100);

	function animate() {
	    	topListItems[counter].style.display = "block";
		    counter++;
		    if (counter === topListItems.length) {
		        clearInterval(i);
		        console.log("end");
		    }

		    function topOut() {
				clearInterval(i);
				console.log("out");
				var topList = document.getElementById("topMenu");
				var topListItems = topList.getElementsByTagName("li");

				for (var i = 0; i < topListItems.length; ++i) {
					topListItems[i].style.display = "none";
				}
			}
	}
}
*/