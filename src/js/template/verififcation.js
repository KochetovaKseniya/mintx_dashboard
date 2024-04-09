export default function () {
    
    $('[href="#verififcation-start"]').on('click', function() {
        
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
}