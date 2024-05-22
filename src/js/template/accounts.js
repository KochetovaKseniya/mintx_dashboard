export default function () {
    
    $('.accounts__tools').on('click', function() {
        $('.accounts__tools--menu.active').removeClass('active');
        let elem = $(this).find('.accounts__tools--menu');
        if( elem.hasClass('active') ) {
            elem.removeClass('active');
        } else {
            elem.addClass('active');
        }
    });

    $(document).on('click', function(event) {
        if (!$(event.target).closest('.accounts__tools').length) {
            $('.accounts__tools--menu.active').removeClass('active');
        }
    });
}