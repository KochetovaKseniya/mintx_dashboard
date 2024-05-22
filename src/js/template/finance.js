export default function () {
    
    $('.finance__tabs--item').on('click', function() {
        $('.finance__tabs--item').removeClass('active');
        let tab = $(this).attr('data-tab');
        if( $(this).hasClass('active') ) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }
        $('.finance__tabs--content').removeClass('active');
        $('.finance__tabs--content[data-content="' + tab + '"]').addClass('active');
    });


    $('.finance__refill--select').on('click', function() {
        if( $(this).hasClass('active') ) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }
    });

    $('.finance__refill--select--row').on('click', function() {
        let parent = $(this).closest('.finance__refill--select');
        let elem = $(this).html();
        parent.find('.finance__refill--select-title').html(elem);
        console.log('click' + elem);
    });
    $('.finance__refill--card').on('click', function() {
        $('.finance__refill--card').removeClass('active');
        if( $(this).hasClass('active') ) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }
    });

}