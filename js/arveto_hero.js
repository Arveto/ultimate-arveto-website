    //Sticky header
$(function(){

	createSticky($("#header"));

});

function leaveTop(sticky, content){
    sticky.addClass("fixed");
    content.addClass("content");
}

function goTop(sticky, content){
    sticky.removeClass("fixed");
    content.removeClass("content");
}

function createSticky(sticky) {

	if (typeof sticky !== "undefined") {

		var	pos = sticky.offset().top,
		win = $(window);
        content = $("#content")
		win.on("scroll", function() {
    		win.scrollTop() >= pos ? leaveTop(sticky, content) : goTop(sticky, content)
		});
	}
}





	//Scrolling anchors

//Scroll button
$("#heroScroller").click( () => {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#header").offset().top
    }, 800);
});

//Top
$("#accueil-header").click( () => {
	$([document.documentElement, document.body]).animate({
		scrollTop: 0
	}, 800);
});
$("#typo-header").click( () => {
	$([document.documentElement, document.body]).animate({
		scrollTop: 0
	}, 800);
});

//Fonctionnement
$("#fonctionnement-hero").click( () => {
	$([document.documentElement, document.body]).animate({
		scrollTop: $("#fonctionnement-title").offset().top - 80
	}, 800);
});
$("#fonctionnement-header").click( () => {
	console.log("Yoooo")
	$([document.documentElement, document.body]).animate({
		scrollTop: $("#fonctionnement-title").offset().top - 80
	}, 800);
});

//Competences
$("#competences-hero").click( () => {
	$([document.documentElement, document.body]).animate({
		scrollTop: $("#competences-title").offset().top - 80
	}, 800);
});
$("#competences-header").click( () => {
	console.log("Yoooo")
	$([document.documentElement, document.body]).animate({
		scrollTop: $("#competences-title").offset().top - 80
	}, 800);
});


//Competences
$("#equipe-hero").click( () => {
	$([document.documentElement, document.body]).animate({
		scrollTop: $("#equipe-title").offset().top - 80
	}, 800);
});
$("#equipe-header").click( () => {
	console.log("Yoooo")
	$([document.documentElement, document.body]).animate({
		scrollTop: $("#equipe-title").offset().top - 80
	}, 800);
});


	//TODO Responsive menu for navbar burger
$("#navbarBurger").click( () => {
	console.log("TODO")
});
