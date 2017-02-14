// Scroll to top stuff
var body = document.body; // For Chrome, Safari and Opera
var html = document.documentElement; // Firefox and IE places the overflow at the <html> level, unless else is specified. Therefore, we use the documentElement property for these two browsers
var scroller = document.getElementById('scroller')
// Get top jumbotron width
var topJumbotronRect = document.getElementById('top-jumbotron').getBoundingClientRect()
var topJumbotronWidth = topJumbotronRect.bottom-topJumbotronRect.top

function checkScrollerDisplay() {
    if (body.scrollTop > topJumbotronWidth || html.scrollTop > topJumbotronWidth) {
        $('#scroller').fadeIn();
    } else {
        $('#scroller').fadeOut();
    }
}
window.addEventListener('load', checkScrollerDisplay);
window.addEventListener('scroll', checkScrollerDisplay);

function scrollToTop() {
    $('html, body').animate({scrollTop : 0}, 500);
}
scroller.addEventListener('click', scrollToTop);

// Scroll to link stuff
// Add smooth scrolling to all links
$("a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
    	}, 500, function(){
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
});

var sections = ['education', 'researchcv', 'talks'];

sections.forEach(function(element) {
    var section = document.getElementById(`${element}-section`);
    var button = document.getElementById(`${element}-button`);
	// var section = "#" + element + "-section";
	// var button = "#" + element + "-button";
    console.log(`Hiding ${section.id}`);
	// Hide section initially
    section.style.display = 'none';

    $(`#${element}-button`).click(function() {
        console.log(`Clicking ${element}-button`);
		// Check to see if any of the other buttons are currently selected
		var isOtherSelected = false;
		var other_selected;
		sections.forEach(function(otherElement) {
            var otherButton = document.getElementById(`${otherElement}-button`);
            var otherSection = document.getElementById(`${otherElement}-section`);
			if(element == otherElement) { return; }
			if(otherButton.classList.contains("btn-success")) {
				isOtherSelected = true;
				other_selected = otherElement;
                selectedButton = otherButton;
                selectedSection = otherSection;
				console.log(`${selectedButton.id} is currently selected`);
			}
		});

		// Toggle this button
		console.log(`toggling ${section.id}`);
    	button.classList.toggle("btn-success");
    	button.classList.toggle("header");
    	button.classList.toggle("capitalize");
		if (isOtherSelected){
            section.style.display = 'block';
            selectedButton.classList.remove("btn-success", "header", "capitalize");
            selectedSection.style.display = 'none';
		} else {
			$(section).slideToggle();
		}
    });
});
