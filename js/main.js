var activeSection = "homeSection"


$(document).ready(function(){

    /*  Testimonials Slider  */
	setupSlider()

  /*  hide-show mobile menu  */
  setupMobileMenu();

	// Nav Bar Scroll to Section
	setupNavbar();

	// Setup scroll listener
	setupScrollListener();

});


// Setup
var setupScrollListener = function(){
	document.onscroll = function(arg){

		// Get the current _position
		var currentPos = window.scrollY;

		// Check if the nav is at the very top and set opacity appropriately
		if (currentPos < 50) {
			$('header').removeClass("scrollingHeader")
		} else {
			$('header').addClass("scrollingHeader")
		}

		currentPos = currentPos + $('header').height();

		// Determine what section we are in
		var section = ""
		if (currentPos < $('#aboutUsSection').position().top){
			section = 'homeSection'
		} else if (currentPos < $('#servicesSection').position().top){
			section = 'aboutUsSection'
		} else if (currentPos < $('#projectsSection').position().top){
			section = 'servicesSection'
		} else if (currentPos < $('#contactUsSection').position().top){
			section = 'projectsSection'
		} else {
			section = 'contactUsSection'
		}

		$('#' + activeSection + "NavButton").removeClass("activeNavSection")
		activeSection = section;
		$('#' + activeSection + "NavButton").addClass("activeNavSection")
	}
}

var setupNavbar = function(){
	// Todo: Cange name
	setupNavButtonClick("homeSection")
	setupNavButtonClick("aboutUsSection")
	setupNavButtonClick("servicesSection")
	setupNavButtonClick("projectsSection")
	setupNavButtonClick("contactUsSection")

	// set the home section as activeSection
	$('#' + activeSection + "NavButton").addClass("activeNavSection")
}


var setupMobileMenu = function(){
	$("#menu_icon").click(function(){
			$("#nav_menu").toggleClass("show_menu");
			return false;
	});
}

var setupSlider = function(){
	$('#tslider').carouFredSel({
            circular : true,
            infinite: false,
            responsive : true,
            scroll : {
                items : 1,
                fx : "fade"
            },
            pagination: {
				container:	"#t_navigation",
				anchorBuilder:	function(nr){
					return '<a href="#'+nr+'"></a>';
				}
			}
    });
}

// Helpers
var setupNavButtonClick = function(sectionName){
	$('#' + sectionName + "NavButton").click(function(){
		// Highlight this menu items

		// Scroll to sectionName
		scrollToSection(sectionName, function(){
			// Change active sectionName
			$('#' + activeSection + "NavButton").removeClass("activeNavSection")
			activeSection = sectionName;
			$('#' + activeSection + "NavButton").addClass("activeNavSection")
		});

		// Hide the mobile menu if its open
		$('#nav_menu').removeClass("show_menu")




	})
}

var scrollToSection = function(sectionName, onComplete){
	console.log("Scrolling to: " + "#" + sectionName)
	$('html,body').animate({scrollTop: $('#' + sectionName).offset().top - $('header').height()}, 400, "swing", onComplete);



	// $("#"+ sectionName)[0].animate({ scrollTop: 0 }, speedMs);
	// console.log("Scrolling!")
}
