export default function () {
    
    $('.main__icon').on('click', function() {
        if( $('.main__btns').hasClass('active') ) {
            $('.main__btns').removeClass('active');
        } else {
            $('.main__btns').addClass('active');
        }
    });

    $(document).on('click', function(event) {
        if (!$(event.target).closest('.main__icon').length) {
            $('.main__btns.active').removeClass('active');
        }
    });

    $('.main__tabs--item').on('click', function() {
        $('.main__tabs--item').removeClass('active');
        let tab = $(this).attr('data-tab');
        if( $(this).hasClass('active') ) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }
        $('.main__tabs-content').removeClass('active');
        $('.main__tabs-content[data-content="' + tab + '"]').addClass('active');
    });
}