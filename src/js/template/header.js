export default function () {
    
    $('.header__profile').on('click', function() {
        if( $(this).hasClass('active') ) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }
    });
    $('.header__lang').on('click', function() {
        if( $(this).hasClass('active') ) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }
    });
    $(document).on('click', function(event) {
        if (!$(event.target).closest('.header__profile').length &&
            !$(event.target).closest('.header__lang').length) {
            $('.header__profile.active, .header__lang.active').removeClass('active');
        }
    });
}