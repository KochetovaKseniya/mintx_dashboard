export default function () {
    
    $('.account__bottom--item .input-visible').on('click', function() {
        let elem = $(this);
        let input = elem.parent().find('input');
        if( elem.hasClass('active') ) {
            elem.removeClass('active');
            input.attr('type', 'password');
        } else {
            elem.addClass('active');
            input.attr('type', 'text');
        }
    });
    $('.account__bottom--item .input-edit').on('click', function() {
        let elem = $(this);
        let input = elem.parent().find('input');
        if( elem.hasClass('active') ) {
            elem.removeClass('active');
        } else {
            elem.addClass('active');
            input.focus(); 
        }
    });

    $(document).on('click', function(event) {
        if (!$(event.target).closest('.input-edit').length) {
            $('.input-edit').removeClass('active');
        }
    });

    //Open account
    if($('.account__choise')) {
        $('.account__choise').on('click', function() {
            $('.account__choise').removeClass('active');
            let elem = $(this);
            if( elem.hasClass('active') ) {
                elem.removeClass('active');
            } else {
                elem.addClass('active');
            }
        });
    }
    
    $(".account__form--item input[type='password']").on('click change keyup input', function() {
        var password = $(this).val();
        var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>\/?]).{8,15}$/;
        console.log(password);
       
        if (!regex.test(password)) {
            $(this).parent().find('p').addClass('error');
            console.log('error');
        } else {
            $(this).parent().find('p').removeClass('error');
            console.log('no error');

        }
    });
}