
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

var image = ["images/poster.jpg",
            "images/poster5.jpg",
            "images/poster4.jpg",
            "images/poster6.jpg",
            "images/poster1.jpg", 
            "images/poster3.jpg",
            "images/poster7.jpg",
            "images/poster8.jpg",
            "images/poster9.jpg",
            "images/poster10.jpg",
            "images/poster11.jpg",
            "images/poster12.jpg",
            "images/poster18.jpg",
            "images/poster19.jpg",
            "images/m1.jpg",
            "images/m1-1.jpg",
            "images/m1-2.jpg",
            "images/m1-3.jpg",
            "images/m2.jpg",
            "images/m2-1.jpg",
            "images/m2-2.jpg",
            "images/m2-3.jpg",
            "images/m2-4.jpg",
            "images/m2-5.jpg",
            "images/m2-6.jpg",
            "images/m2-7.jpg",
            "images/m2-8.jpg",
            "images/m2-9.jpg",
            "images/m2-10.jpg",
            "images/m2-11.jpg",
            "images/m2-12.jpg",
            "images/m2-13.jpg",
            "images/m3.jpg",
            "images/m3-1.jpg",
            "images/m3-2.jpg",
            "images/m3-3.jpg",
            "images/m3-4.jpg",
            "images/m3-5.jpg",
            "images/m3-6.jpg",
            "images/m3-7.jpg",
            "images/m3-8.jpg",
            "images/m3-9.jpg",
            "images/m3-10.jpg",
            "images/m3-11.jpg",
            "images/m3-12.jpg",
            "images/m3-13.jpg",
            "images/m3-14.jpg",
            "images/m3-15.jpg",
            "images/m3-16.jpg"];
var index = 0;

function change(e){
	console.log(event.key);
	if(e.keyCode=='39') {
		index = (index + 1) % 49;
	} else if(e.keyCode=='37') {
		index = (((index - 1) % 49) + 49) % 49;
	}
	document.getElementById("image").src = image[index];
}

document.onkeydown = change;