$(document).ready(function() {

    $(document).keydown(function() {
        if (event.keyCode == 88) {
            $('.ryu-cool').show();
            $('.ryu-ready').hide();
            $('.ryu-still').hide();
            $('.ryu-throwing').hide();
            console.log("x pressed");
        }
    });

    $(document).keyup(function() {
        if (event.keyCode == 88) {
            $('.ryu-cool').hide();
            $('.ryu-ready').show();
            $('.ryu-throwing').hide();
            console.log("x pressed");
        }
    });

    $('.ryu').mouseenter(function() {
        $('.ryu-still').hide();
        $('.ryu-ready').show();
    }).mouseleave(function() {
        $('.ryu-ready').hide();
        $('.ryu-still').show();
    }).mousedown(function() {
        console.log('mousedown');
        playHadouken();
        // play hadouken sound
        $('.ryu-ready').hide();
        $('.ryu-throwing').show();
        $('.hadouken').finish().show()
            .animate({
              'left': '1020px'
                },
                500,
                function() {
                    $('.hadouken').hide();
                    $('.hadouken').css('left', '520px');
                });
    }).mouseup(function() {
        $('.ryu-throwing').hide();
        $('.ryu-ready').show();
        console.log('mouseup');
        // ryu goes back to his ready position
    });
});

function playHadouken() {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}


$(window).load(function() {
    console.log('window.loaded');
});