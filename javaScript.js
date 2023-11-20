var slices = 8,
    angle = 360 / slices;

for (var i = 0; i < (slices -1); i++) {
    var slice = $('<div></div>').addClass('circle');
    slice.css('transform', 'rotateY(' + angle * i + 'deg)');
    $('.sphere').append(slice);
}