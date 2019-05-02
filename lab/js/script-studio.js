
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

var image = ["images/pavlova4.jpg", 
            "images/pavlova3.jpg",
            "images/pavlova5.jpg", 
            "images/pavlova6.jpg",
            "images/pavlova7.jpg",
            "images/pavlova8.jpg",
            "images/pavlova9.jpg",
            "images/pavlova1.jpg",
            "images/pavlova2.jpg",
            "images/immersed.jpg",
            "images/surface.jpg",
            "images/book1.jpg",
            "images/book2.jpg",
            "images/book3.jpg",
            "images/book4.jpg",
            "images/book5.jpg",
            "images/book6.jpg",
            "images/book7.jpg"];
var index = 0;

function change(e){
	console.log(event.key);
	if(e.keyCode=='39') {
		index = (index + 1) % 18;
	} else if(e.keyCode=='37') {
		index = (((index - 1) % 18) + 18) % 18;
	}
    document.getElementById("image").src = image[index];
}

var left = document.getElementById("left-arrow");
var right = document.getElementById("right-arrow");

document.onkeydown = change;

right.addEventListener("click", function() {
    index = (index + 1) % 18;
    document.getElementById("image").src = image[index];
});

left.addEventListener("click", function() {
    index = (((index - 1) % 18) + 18) % 18;
    document.getElementById("image").src = image[index];
});

