$(function() {
	$.scrollify({
		section : ".snapping-pane",	// a CSS selector for the sections of the page
		setHeights: false, // a boolean to define whether Scollify assigns a height to the sections, true by default
		after: sectionScrolledIn // A callback that is fired after a new section is scrolled to. Arguments include the index of the section and an array of all section elements.
	});
});

var nav = document.getElementsByTagName("nav")[0]; // navigational button group
var buttons = document.getElementsByTagName("button");
// Register click event handlers
for (var i = 0; i < buttons.length; ++i)
	buttons[i].addEventListener('click', onClick);

function sectionScrolledIn(index) {
	// clear currently selected button "active" class
	var activeButton = nav.getElementsByClassName("active")[0];
	activeButton.classList.remove("active");
	// add "active" class to newly selected button
	activeButton = document.getElementById("section" + index);
	activeButton.classList.add("active");
}

function onClick(e) {
	// clear currently selected button active class
	var activeButton = nav.getElementsByClassName("active")[0];
	activeButton.classList.remove("active");
	// add "active" class to newly selected button
	e.target.classList.add("active");	
	// extract index of the clicked button
	var buttonIndex = +e.target.id[e.target.id.length - 1];
	// scroll to the respective section
	$.scrollify.move(buttonIndex);
}