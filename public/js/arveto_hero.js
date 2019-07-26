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
	$([document.documentElement, document.body]).animate({
		scrollTop: $("#fonctionnement-title").offset().top - 80
	}, 800);
});

//CNJE
$("#cnje-hero").click( () => {
	$([document.documentElement, document.body]).animate({
		scrollTop: $("#cnje-title").offset().top - 80
	}, 800);
});
$("#cnje-header").click( () => {
	$([document.documentElement, document.body]).animate({
		scrollTop: $("#cnje-title").offset().top - 80
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


//Equipe
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


//Demo App
$("#demo-hero").click( () => {
	$([document.documentElement, document.body]).animate({
		scrollTop: $("#demoapp").offset().top - 80
	}, 800);
});
$("#demo-header").click( () => {
	console.log("Yoooo")
	$([document.documentElement, document.body]).animate({
		scrollTop: $("#demoapp").offset().top - 80
	}, 800);
});



	//Scroll reveal effect
ScrollReveal({ reset: true });

//Steps
ScrollReveal().reveal('#card1', { delay: 200 });
ScrollReveal().reveal('#card2', { delay: 350 });
ScrollReveal().reveal('#card3', { delay: 500 });

//CNJE
ScrollReveal().reveal('#cnje_panel', { delay: 200 });

//Skills
ScrollReveal().reveal('#skill1', { delay: 400 });
ScrollReveal().reveal('#skill2', { delay: 200 });
ScrollReveal().reveal('#skill3', { delay: 500 });

//Team
ScrollReveal().reveal('#team-member1', { delay: 200 });
ScrollReveal().reveal('#team-member2', { delay: 350 });
ScrollReveal().reveal('#team-member4', { delay: 500 });
ScrollReveal().reveal('#team-member3', { delay: 650 });
