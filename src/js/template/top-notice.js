export default function () {
    
    $('.top-notice').on('click', function() {
        if( $(this).hasClass('active') ) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }
    });

    $(document).on('click', function(event) {
        if (!$(event.target).closest('.top-notice').length) {
            $('.top-notice.active').removeClass('active');
        }
    });
}