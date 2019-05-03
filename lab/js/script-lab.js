
$(document).ready(function() {
    $menu_icon = $('.menu_icon');

    $modal = $('.modal');
    $modal_close = $('.modal-close');

    $menu_icon.click(function() {
        $modal.addClass('modal--open');
    });

    $modal_close.click(function() {
        $modal.removeClass('modal--open');
    });

});

var image = ["images/specimen1.jpg", 
            "images/specimen.jpg", 
            "images/spyke.jpg",
            "images/spyke-sans.jpg",
            "images/calligraphy1.jpg",
            "images/calligraphy2.jpg",
            "images/calligraphy5.jpg",
            "images/calligraphy6.jpg",
            "images/calligraphy3.jpg",
            "images/hdo.jpg",
            "images/hdo1.jpg",
            "images/hdo2.jpg",
            "images/hdo3.jpg",
            "images/hdo4.jpg",
            "images/happynewyear.jpg"];
var index = 0;

function change(e){
	console.log(event.key);
	if(e.keyCode=='39') {
		index = (index + 1) % 15;
	} else if(e.keyCode=='37') {
		index = (((index - 1) % 15) + 15) % 15;
	}
	document.getElementById("image").src = image[index];
}

var left = document.getElementById("left-arrow");
var right = document.getElementById("right-arrow");

document.onkeydown = change;

right.addEventListener("click", function() {
    index = (index + 1) % 15;
    document.getElementById("image").src = image[index];
});

left.addEventListener("click", function() {
    index = (((index - 1) % 15) + 15) % 15;
    document.getElementById("image").src = image[index];
});