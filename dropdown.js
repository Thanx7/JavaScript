function MenuWriter () {
	var topList = document.getElementById("topMenu");
	var topListItems = topList.getElementsByTagName("li");
	var bottomList = document.getElementById("bottomMenu");
	var bottomListItems = bottomList.getElementsByTagName("li");
	var counter = 0;
	var liInterval;

	$( "#topMenu" ).mouseenter(function() {
		liInterval = setInterval(function () {
			topListItems[counter].style.display = "block";
			counter++;
			if (counter === topListItems.length) {
		        clearInterval(liInterval);
		    }
		}, 20);
	});

	$( "#bottomMenu" ).mouseenter(function() {
		liInterval = setInterval(function () {
			bottomListItems[counter].style.display = "block";
			counter++;
			if (counter === bottomListItems.length) {
		        clearInterval(liInterval);
		    }
		}, 20);
	});

	$( "#topMenu" ).mouseleave(function() {
		for (var i = 0; i < topListItems.length; ++i) {
			topListItems[i].style.display = "none";
		}			
		counter = 0;
		clearInterval(liInterval);
	});

	$( "#bottomMenu" ).mouseleave(function() {
		for (var i = 0; i < bottomListItems.length; ++i) {
			bottomListItems[i].style.display = "none";
		}			
		counter = 0;
		clearInterval(liInterval);
	});
}

document.addEventListener("DOMContentLoaded", function(event) {
	var navigation = new MenuWriter();
});